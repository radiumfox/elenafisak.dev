import type { ChangeEvent } from 'react';

export interface ContactFormFields {
  name: string;
  email: string;
  subject: string;
  text: string;
}

export interface ContactFormProps {
  className?: string;
  contactEmail?: string;
}

export type ContactFieldName = keyof ContactFormFields;

export type ContactFormErrors = Partial<Record<ContactFieldName, string>>;

export interface UseContactFormValidation {
  values: ContactFormFields;
  errors: ContactFormErrors;
  hasErrors: boolean;
  handleChange: (
    field: ContactFieldName
  ) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (field: ContactFieldName) => () => void;
  validate: () => boolean;
  clearForm: () => void;
}
