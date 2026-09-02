import type { ButtonBaseMode, ButtonBaseProps, ButtonBaseSize } from './types';

const MODE_CLASSES: Record<ButtonBaseMode, string> = {
  primary:
    'bg-accent text-background hover:opacity-90',
  secondary:
    'border border-faint/50 text-muted hover:bg-subtle hover:text-foreground',
};

const SIZE_CLASSES: Record<ButtonBaseSize, string> = {
  md: 'h-[40px]',
  lg: 'h-[50px] px-6',
};

const BASE_CLASSES = 'flex items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:opacity-50 cursor-pointer';

export function ButtonBase({
  href,
  text,
  mode = 'primary',
  size = 'md',
  icon: Icon,
  target,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  children,
}: ButtonBaseProps) {
  const classes = `${BASE_CLASSES} ${SIZE_CLASSES[size]} ${MODE_CLASSES[mode]} ${className}`;
  const content = children ?? (
    <>
      {Icon && <Icon className="h-4 w-4" />}
      {text}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noreferrer' : undefined} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
