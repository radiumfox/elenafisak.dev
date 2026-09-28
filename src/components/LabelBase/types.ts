export type LabelColorVariant =
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange'
  | 'pink'
  | 'red'
  | 'yellow'
  | 'cyan'
  | 'indigo';

export interface LabelProps {
  text: string;
  color: LabelColorVariant;
}
