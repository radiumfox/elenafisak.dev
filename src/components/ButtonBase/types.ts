import type {
  ComponentType,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
  SVGProps,
} from 'react';

export type ButtonBaseMode = 'primary' | 'secondary';
export type ButtonBaseSize = 'md' | 'lg';

export interface ButtonBaseProps {
  href?: string;
  text?: string;
  mode?: ButtonBaseMode;
  size?: ButtonBaseSize;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  target?: HTMLAttributeAnchorTarget;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}
