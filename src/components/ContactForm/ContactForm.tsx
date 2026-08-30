import type { FormEvent } from 'react';

import { FieldBase } from '@/components/FieldBase';
import type { ContactFormFields } from './types';

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const fields: ContactFormFields = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      subject: String(formData.get('subject') ?? ''),
      help: String(formData.get('help') ?? ''),
    };

    const subject = encodeURIComponent(fields.subject || `Contact from ${fields.name}`);
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\nSubject: ${fields.subject}\n\n${fields.help}`
    );
    window.location.href = `mailto:hello@elenafisak.dev?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
      <FieldBase
        id="name"
        label="Name"
        placeholder="Your Name"
        type="text"
        required
      />

      <FieldBase
        id="email"
        label="Email"
        placeholder="your.email@example.com"
        type="email"
        required
      />

      <FieldBase
        id="subject"
        label="Subject"
        placeholder="Subject"
        type="text"
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
