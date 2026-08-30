import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { ContactFieldName, ContactFormErrors, ContactFormFields, UseContactFormValidation } from './types';

const REQUIRED_FIELDS: ContactFieldName[] = ['name', 'email', 'help'];

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const EMPTY_VALUES: ContactFormFields = {
  name: '',
  email: '',
  subject: '',
  help: '',
};

export function useContactFormValidation(initialValues: ContactFormFields = EMPTY_VALUES): UseContactFormValidation {
  const [values, setValues] = useState<ContactFormFields>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});

  const validateField = (field: ContactFieldName): string | undefined => {
    const value = values[field].trim();
    if (REQUIRED_FIELDS.includes(field) && !value) {
      return 'This field is required';
    }
    if (field === 'email' && value && !EMAIL_REGEX.test(value)) {
      return 'Enter a valid email address';
    }
    return undefined;
  };

  const handleChange =
    (field: ContactFieldName) =>
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues((prev) => ({ ...prev, [field]: event.target.value }));
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      };

  const handleBlur = (field: ContactFieldName) => () => {
    setErrors((prev) => ({ ...prev, [field]: validateField(field) }));
  };

  const validate = () => {
    const nextErrors: ContactFormErrors = {};
    for (const field of REQUIRED_FIELDS) {
      nextErrors[field] = validateField(field);
    }
    setErrors(nextErrors);
    return REQUIRED_FIELDS.every((field) => !nextErrors[field]);
  };

  const hasErrors = Object.values(errors).some(Boolean);

  return { values, errors, hasErrors, handleChange, handleBlur, validate };
}