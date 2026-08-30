import type { FieldBaseProps } from './types';

const FIELD_CLASSES =
  'w-full rounded-xl border border-line bg-background px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-accent';

const FIELD_ERROR_CLASSES =
  'w-full rounded-xl border border-red-500 bg-background px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-red-500';

export function FieldBase({
  label,
  placeholder,
  id,
  type = 'text',
  required = false,
  value,
  onChange,
  onBlur,
  error,
}: FieldBaseProps) {
  const fieldClasses = error ? FIELD_ERROR_CLASSES : FIELD_CLASSES;

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`${fieldClasses} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={fieldClasses}
        />
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}