import type { FormEvent } from 'react';

import { FieldBase } from '@/components/FieldBase';
import type { ContactFormFields } from './types';

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const fields: ContactFormFields = {
      fullName: String(formData.get('fullName') ?? ''),
      companyEmail: String(formData.get('companyEmail') ?? ''),
      help: String(formData.get('help') ?? ''),
    };

    const subject = encodeURIComponent(`Contact from ${fields.fullName}`);
    const body = encodeURIComponent(
      `Full name: ${fields.fullName}\nCompany email: ${fields.companyEmail}\n\n${fields.help}`
    );
    window.location.href = `mailto:hello@elenafisak.dev?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
      <FieldBase
        id="fullName"
        label="Full name"
        placeholder="Jane Doe"
        type="text"
        required
      />

      <FieldBase
        id="companyEmail"
        label="Company / physical entity email"
        placeholder="you@company.com"
        type="email"
        required
      />

      <FieldBase
        id="help"
        label="How can I help you?"
        placeholder="Tell me about your project"
        type="textarea"
      />

      <button
        type="submit"
        className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
      >
        Send your message
      </button>
    </form>
  );
}
