import { SubmitEvent, useState } from 'react';

import { FieldBase } from '@/components/FieldBase';
import { ButtonBase } from '@/components/ButtonBase';
import { SpinnerIcon } from '@/lib/icons/SpinnerIcon';
import { CheckIcon } from '@/lib/icons/CheckIcon';
import { AlertIcon } from '@/lib/icons/AlertIcon';
import { useContactFormValidation } from './useContactFormValidation';
import type { ContactFormProps } from './types';
import { sendEmail } from '@/lib/api/sendEmail';

export function ContactForm({ className, contactEmail }: ContactFormProps) {
  const { values, errors, hasErrors, handleChange, handleBlur, validate, clearForm } = useContactFormValidation();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const handleContactFormSubmit = async(data: FormData) => {
    try {
      setLoading(true);
      const result = await sendEmail(data);

      if(result && result.success) {
        setIsSubmitted(true);
        return;
      }
      setIsFailed(true);
    } catch (error) {
      setIsFailed(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validate();
    if (loading || !isValid) {
      return;
    }

    const formData = new FormData(event.target);
    await handleContactFormSubmit(formData);
  };

  const resetForm = () => {
    clearForm();
    setIsSubmitted(false);
    setIsFailed(false);
  };

  const tryAgain = () => {
    setIsSubmitted(false);
    setIsFailed(false);
  };

  if(isSubmitted) {
    return (
      <div className="space-y-4 pt-10">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
            <CheckIcon className="h-5 w-5" />
          </span>
          <p className="text-xl font-semibold text-foreground">Your message was sent!</p>
        </div>
        <p className="text-muted">
          Thanks for reaching out.<br/> I&apos;ll get back to you as soon as possible.
        </p>
        <ButtonBase type="button" mode="primary" onClick={resetForm} className="px-5 py-2.5 cursor-pointer">
          Send another message
        </ButtonBase>
      </div>
    );
  }

  if(isFailed) {
    return (
      <div className="space-y-4 pt-10">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/15 text-red-500">
            <AlertIcon className="h-5 w-5" />
          </span>
          <p className="text-xl font-semibold text-foreground">Something went wrong</p>
        </div>
        <p className="text-muted">
          Try again or write me an email directly at{' '}
          {contactEmail && (
            <a className="font-medium text-accent underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          )}.
        </p>
        <ButtonBase type="button" mode="primary" onClick={tryAgain} className="px-5 py-2.5 cursor-pointer">
          Try again
        </ButtonBase>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`w-full space-y-6 ${className ?? ''}`}>

      <FieldBase
        id="name"
        label="Full Name"
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
        label="Email Address"
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
        id="text"
        label="How can I help you?"
        placeholder="Tell me about your project"
        type="textarea"
        required
        value={values.text}
        onChange={handleChange('text')}
        onBlur={handleBlur('text')}
        error={errors.text}
      />

      <div className="w-full flex justify-end">
        <ButtonBase
          type="submit"
          disabled={hasErrors || loading}
          className="px-6 py-3 cursor-pointer w-full"
          size="lg"
        >
          {loading && <SpinnerIcon className="h-4 w-4 animate-spin"/>}
          {loading ? 'Sending...' : 'Send your message'}
        </ButtonBase>
      </div>
    </form>
  );
}
