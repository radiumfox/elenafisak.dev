import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { ContactFieldName, ContactFormErrors, ContactFormFields, UseContactFormValidation } from './types';

const REQUIRED_FIELDS: ContactFieldName[] = ['name', 'email', 'help'];

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
    if (REQUIRED_FIELDS.includes(field) && !values[field].trim()) {
      return 'This field is required';
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