import type { ButtonBaseMode, ButtonBaseProps } from './types';

const MODE_CLASSES: Record<ButtonBaseMode, string> = {
  primary:
    'bg-accent text-background hover:opacity-90',
  secondary:
    'border border-line text-muted hover:bg-subtle hover:text-foreground',
};

const BASE_CLASSES = 'flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:opacity-50 cursor-pointer';

export function ButtonBase({
  href,
  text,
  mode = 'primary',
  icon: Icon,
  target,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  children,
}: ButtonBaseProps) {
  const classes = `${BASE_CLASSES} ${MODE_CLASSES[mode]} ${className}`;
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
