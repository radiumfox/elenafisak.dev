import type { ChangeEvent } from 'react';

export type FieldType = 'text' | 'email' | 'textarea';

export type FieldChangeHandler = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

export interface FieldBaseProps {
  label: string;
  placeholder: string;
  id: string;
  type?: FieldType;
  required?: boolean;
  value?: string;
  onChange?: FieldChangeHandler;
  onBlur?: () => void;
  error?: string;
}