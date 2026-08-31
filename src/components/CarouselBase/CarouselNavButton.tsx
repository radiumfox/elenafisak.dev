import { ChevronIcon } from '@/lib/icons/ChevronIcon';

interface CarouselNavButtonProps {
  onClick: () => void;
  label: string;
  direction: 'prev' | 'next';
}

export function CarouselNavButton({ onClick, label, direction }: CarouselNavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-subtle text-white transition-opacity hover:opacity-80 cursor-pointer"
    >
      <ChevronIcon
        direction={direction === 'prev' ? 'left' : 'right'}
        className="h-4 w-4"
      />
    </button>
  );
}
