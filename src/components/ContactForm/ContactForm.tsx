import type { SubmitEvent  } from 'react';

import { FieldBase } from '@/components/FieldBase';
import { useContactFormValidation } from './useContactFormValidation';
import type { ContactFormFields, ContactFormProps } from './types';

export function ContactForm({ onSubmit }: ContactFormProps) {
  const { values, errors, hasErrors, handleChange, handleBlur, validate } = useContactFormValidation();

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (hasErrors || !validate()) {
      return;
    }

    const fields: ContactFormFields = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      help: values.help,
    };

    onSubmit(fields);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
      <FieldBase
        id="name"
        label="Name"
        placeholder="Your Name"
        type="text"
        required
        value={values.name}
        onChange={handleChange('name')}
        onBlur={handleBlur('name')}
        error={errors.name}
      />

      <FieldBase
        id="email"
        label="Email"
        placeholder="your.email@example.com"
        type="email"
        required
        value={values.email}
        onChange={handleChange('email')}
        onBlur={handleBlur('email')}
        error={errors.email}
      />

      <FieldBase
        id="subject"
        label="Subject"
        placeholder="Subject"
        type="text"
        value={values.subject}
        onChange={handleChange('subject')}
        onBlur={handleBlur('subject')}
      />

      <FieldBase
        id="help"
        label="How can I help you?"
        placeholder="Tell me about your project"
        type="textarea"
        required
        value={values.help}
        onChange={handleChange('help')}
        onBlur={handleBlur('help')}
        error={errors.help}
      />

      <button
        type="submit"
        disabled={hasErrors}
        className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:opacity-50"
      >
        Send your message
      </button>
    </form>
  );
}
