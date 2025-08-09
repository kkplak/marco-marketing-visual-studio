"use client";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';

// Define the form schema with zod
const ContactSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(5, { message: 'Please enter a message' }),
  budget: z.string().optional(),
  consent: z.boolean().refine((val) => val, {
    message: 'You must consent to data processing'
  })
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export function ContactForm({ locale }: { locale: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      budget: '',
      consent: false
    }
  });
  const { showToast } = useToast();

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        showToast(locale === 'de' ? 'Nachricht gesendet!' : 'Message sent!', 'success');
        reset();
      } else {
        showToast(locale === 'de' ? 'Senden fehlgeschlagen.' : 'Submission failed.', 'error');
      }
    } catch (err) {
      showToast(locale === 'de' ? 'Ein Fehler ist aufgetreten.' : 'An error occurred.', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="name">
          {locale === 'de' ? 'Name' : 'Name'}
        </label>
        <Input id="name" {...register('name')} error={errors.name?.message} placeholder="Max Muster" />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
          {locale === 'de' ? 'E‑Mail' : 'Email'}
        </label>
        <Input id="email" type="email" {...register('email')} error={errors.email?.message} placeholder="you@example.com" />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="phone">
          {locale === 'de' ? 'Telefon (optional)' : 'Phone (optional)'}
        </label>
        <Input id="phone" {...register('phone')} placeholder="+41 79 123 45 67" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="company">
          {locale === 'de' ? 'Firma' : 'Company'}
        </label>
        <Input id="company" {...register('company')} placeholder="Acme AG" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="message">
          {locale === 'de' ? 'Nachricht' : 'Message'}
        </label>
        <Textarea id="message" {...register('message')} error={errors.message?.message} placeholder={locale === 'de' ? 'Ihre Nachricht…' : 'Your message…'} />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="budget">
          {locale === 'de' ? 'Budgetrahmen' : 'Budget range'}
        </label>
        <Select id="budget" {...register('budget')}>
          <option value="">{locale === 'de' ? 'Bitte wählen…' : 'Please select…'}</option>
          <option value="<1000">&lt; CHF&nbsp;1’000</option>
          <option value="1000-3000">CHF&nbsp;1’000–3’000</option>
          <option value="3000-5000">CHF&nbsp;3’000–5’000</option>
          <option value=">5000">&gt; CHF&nbsp;5’000</option>
        </Select>
      </div>
      <div className="flex items-center space-x-2">
        <input id="consent" type="checkbox" {...register('consent')} className="h-4 w-4 rounded border-gray-300 text-brand-accent focus:ring-brand-accent" />
        <label htmlFor="consent" className="text-sm text-gray-700">
          {locale === 'de' ? 'Ich stimme der Datenverarbeitung zu' : 'I consent to data processing'}
        </label>
      </div>
      {errors.consent && <p className="text-xs text-red-600">{errors.consent.message}</p>}
      <Button type="submit" variant="primary" disabled={isSubmitting}>
        {locale === 'de' ? 'Absenden' : 'Submit'}
      </Button>
    </form>
  );
}