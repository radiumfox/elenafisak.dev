import type { FieldBaseProps } from './types';

const FIELD_CLASSES =
  'w-full rounded-xl border border-line bg-background px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-accent';

export function FieldBase({ label, placeholder, id, type = 'text', required = false }: FieldBaseProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          placeholder={placeholder}
          required={required}
          className={`${FIELD_CLASSES} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className={FIELD_CLASSES}
        />
      )}
    </div>
  );
}
