#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * This helper script validates that the content files in the `content`
 * directory conform to the expected shape. It is intended to be run
 * via `npm run content:validate` prior to commits or CI builds.
 */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentRoot = path.join(__dirname, '..', 'content');
let hasErrors = false;

function assert(condition, message) {
  if (!condition) {
    hasErrors = true;
    console.error(`\u274C  ${message}`);
  }
}

// Validate services
function validateServices() {
  const servicesPath = path.join(contentRoot, 'services.json');
  const services = JSON.parse(fs.readFileSync(servicesPath, 'utf-8'));
  services.forEach((svc, index) => {
    const prefix = `Service #${index} (${svc.slug})`;
    ['slug', 'title_de', 'title_en', 'summary_de', 'summary_en', 'features', 'priceCHF', 'duration', 'ctaText_de', 'ctaText_en'].forEach((field) => {
      assert(svc[field] != null, `${prefix}: missing field '${field}'`);
    });
    assert(Array.isArray(svc.features), `${prefix}: 'features' must be an array`);
  });
  console.log('✅ Services content is valid');
}

// Validate MDX files in a directory
function validateMdxDir(dirName, requiredFields) {
  const dir = path.join(contentRoot, dirName);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));
  files.forEach((filename) => {
    const filePath = path.join(dir, filename);
    const file = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(file);
    const slug = filename.replace(/\.mdx$/, '');
    requiredFields.forEach((field) => {
      assert(data[field] != null, `${dirName}/${filename}: missing field '${field}'`);
    });
    // slug field should match filename if present
    if (data.slug) {
      assert(data.slug === slug, `${dirName}/${filename}: slug mismatch between frontmatter ('${data.slug}') and filename ('${slug}')`);
    }
  });
  console.log(`✅ ${dirName} content is valid`);
}

function run() {
  try {
    validateServices();
    validateMdxDir('cases', ['title', 'date', 'coverImage']);
    validateMdxDir('blog', ['title', 'date', 'excerpt']);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
  if (hasErrors) {
    process.exitCode = 1;
  }
}

run();