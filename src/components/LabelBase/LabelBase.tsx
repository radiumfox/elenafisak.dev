import type { LabelProps, LabelColorVariant } from './types';

const COLOR_MAP: Record<LabelColorVariant, string> = {
  blue: 'bg-blue-950/20 text-blue-300',
  green: 'bg-green-950/20 text-green-300',
  purple: 'bg-purple-950/20 text-purple-300',
  orange: 'bg-orange-950/20 text-orange-300',
  pink: 'bg-pink-950/20 text-pink-300',
};

export function LabelBase({ text, color }: LabelProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${COLOR_MAP[color]}`}
    >
      {text}
    </span>
  );
}
