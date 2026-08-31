import type { ReactNode } from 'react';
import type {
  PortableTextBlock,
  PortableTextMarkDef,
  PortableTextSpan,
} from './types';

export function PortableText({ value }: { value?: PortableTextBlock[] }) {
  if (!value || value.length === 0) return null;

  return (
    <div className="space-y-1">
      {value.map((block) => (
        <p key={block._key}>{renderChildren(block.children, block.markDefs)}</p>
      ))}
    </div>
  );
}

function renderChildren(children?: PortableTextSpan[], markDefs?: PortableTextMarkDef[]) {
  if (!children) return null;

  return children.map((child) => {
    const linkDef = (child.marks ?? [])
      .map((key) => markDefs?.find((def) => def._key === key))
      .find((def) => def?._type === 'link');

    if (linkDef?.href) {
      return (
        <a
          key={child._key}
          href={linkDef.href}
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          {renderMarks(child)}
        </a>
      );
    }

    return <span key={child._key}>{renderMarks(child)}</span>;
  });
}

function renderMarks(child: PortableTextSpan): ReactNode {
  let rendered: ReactNode = child.text;

  if (child.marks?.includes('em')) {
    rendered = <em>{rendered}</em>;
  }
  if (child.marks?.includes('strong')) {
    rendered = <strong>{rendered}</strong>;
  }

  return rendered;
}
