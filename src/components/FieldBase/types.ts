export type FieldType = 'text' | 'email' | 'textarea';

export interface FieldBaseProps {
  label: string;
  placeholder: string;
  id: string;
  type?: FieldType;
  required?: boolean;
}
