import { SubmitEvent, useState } from 'react';

import { FieldBase } from '@/components/FieldBase';
import { ButtonBase } from '@/components/ButtonBase';
import { SpinnerIcon } from '@/lib/icons/SpinnerIcon';
import { useContactFormValidation } from './useContactFormValidation';
import type { ContactFormProps } from './types';
import { sendEmail } from '@/lib/api/sendEmail';

export function ContactForm({ className }: ContactFormProps) {
  const { values, errors, hasErrors, handleChange, handleBlur, validate, clearForm } = useContactFormValidation();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactFormSubmit = async(data: FormData) => {
    try {
      setLoading(true);
      const result = await sendEmail(data);

      if(result && result.success) {
        setIsSubmitted(true);
      }
      console.log(result);
    } catch (error) {
      console.error(error);
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

  const returnToForm = () => {
    clearForm();
    setIsSubmitted(false);
  };

  if(isSubmitted) {
    return (
      <>
        <p>You successfully send the message!</p>
        <button onClick={returnToForm}>Send more messages</button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`w-full space-y-6 ${className ?? ''}`}>
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

      <ButtonBase
        type="submit"
        disabled={hasErrors || loading}
        className="px-6 py-3 cursor-pointer w-full"
      >
        {loading && <SpinnerIcon className="h-4 w-4 animate-spin"/>}
        {loading ? 'Sending...' : 'Send your message'}
      </ButtonBase>
    </form>
  );
}
