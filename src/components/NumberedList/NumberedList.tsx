import type { NumberedListProps } from './types';

export function NumberedList({ items }: NumberedListProps) {
  return (
    <ol className="space-y-4">
      {items.map((item, index) => (
        <li key={item.title} className="flex items-start gap-4">
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-background">
            {index + 1}
          </span>
          <div>
            <p className="text-sm font-medium">{item.title}</p>
            <p className="text-sm text-muted">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
