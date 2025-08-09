"use client";
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/useTranslation';

export interface HeroProps {
  locale: string;
}

/**
 * The hero section displayed on the home page. It contains a catchy
 * headline, subheading, calls to action and a decorative image. A
 * subtle entrance animation is applied via Framer Motion, respecting
 * the user's reduced motion preference.
 */
export function Hero({ locale }: HeroProps) {
  const t = useTranslation(locale);
  const reduceMotion = useReducedMotion();
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
      <div>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl font-extrabold text-brand mb-4"
        >
          {t('brandName')}
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mb-6 text-xl text-gray-700"
        >
          {t('tagline')}
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Link href={`/${locale}/contact`}>
            <Button variant="primary">{t('cta.bookCall')}</Button>
          </Link>
          <Link href={`/${locale}/portfolio`}>
            <Button variant="secondary">{t('cta.viewPortfolio')}</Button>
          </Link>
        </motion.div>
      </div>
      {/* Decorative image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-md">
        <Image src="/hero.jpg" alt="Studio visuals" fill priority style={{ objectFit: 'cover' }} />
      </div>
    </section>
  );
}