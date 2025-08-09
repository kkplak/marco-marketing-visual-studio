"use client";
import { useEffect, useState } from 'react';

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

// Sample testimonials. Replace with real client quotes.
const testimonials: Testimonial[] = [
  {
    quote: 'Marco hat unserem Markenauftritt zu neuer Strahlkraft verholfen. Die Bilder und Videos sprechen für sich.',
    author: 'Anna Müller',
    company: 'Café Aroma'
  },
  {
    quote: 'Dank der Microsite von Marco generieren wir deutlich mehr Anfragen und Leads.',
    author: 'Peter Huber',
    company: 'TechStart'
  },
  {
    quote: 'Die Reels sind der Hammer! Unsere Reichweite auf Instagram hat sich verdoppelt.',
    author: 'Laura Becker',
    company: 'FitnessHub'
  }
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const { quote, author, company } = testimonials[index];
  return (
    <div className="mx-auto max-w-xl text-center">
      <p className="text-xl italic text-gray-700">“{quote}”</p>
      <p className="mt-4 font-medium text-brand">{author}</p>
      <p className="text-sm text-gray-500">{company}</p>
    </div>
  );
}