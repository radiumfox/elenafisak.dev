import Image from 'next/image';
import type { ReactNode } from 'react';
import { urlFor } from './image';
import type {
  PortableTextBlock,
  PortableTextEntry,
  PortableTextImage,
  PortableTextMarkDef,
  PortableTextSpan,
} from './types';

export function PortableText({ value, className }: { value?: PortableTextEntry[], className?: string }): ReactNode {
  if (!value || value.length === 0) return null;

  return <div className={`space-y-1 ${className}`}>{value.map(renderEntry)}</div>;
}

function renderEntry(entry: PortableTextEntry) {
  if (entry._type === 'image') {
    return renderImage(entry);
  }

  return renderBlock(entry);
}

function renderImage(image: PortableTextImage) {
  const { dimensions, lqip } = image.asset?.metadata ?? {};

  return (
    <div
      key={image._key}
      className="relative my-6 w-full overflow-hidden rounded-2xl border border-line"
      style={{
        aspectRatio: dimensions ? `${dimensions.width} / ${dimensions.height}` : '16 / 9',
      }}
    >
      <Image
        src={urlFor(image).width(1200).url()}
        alt={image.alt ?? ''}
        fill
        unoptimized
        placeholder={lqip ? 'blur' : 'empty'}
        blurDataURL={lqip}
        className="object-cover"
      />
    </div>
  );
}

function renderBlock(block: PortableTextBlock) {
  const children = renderChildren(block.children, block.markDefs);
  const key = block._key;

  switch (block.style) {
  case 'h1':
    return <h1 className="text-title mt-6" key={key}>{children}</h1>;
  case 'h2':
    return <h2 className="text-title mt-6" key={key}>{children}</h2>;
  case 'h3':
    return <h3 className="text-2xl mt-4" key={key}>{children}</h3>;
  case 'h4':
    return <h4 className="text-2xl mt-4" key={key}>{children}</h4>;
  case 'h5':
    return <h5 className="text-xl mt-4" key={key}>{children}</h5>;
  case 'h6':
    return <h6 className="text-xl mt-4" key={key}>{children}</h6>;
  case 'blockquote':
    return (
      <blockquote key={key} className="border-l-2 border-line pl-4 italic">
        {children}
      </blockquote>
    );
  default:
    return <p key={key}>{children}</p>;
  }
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
  if (child.marks?.includes('underline')) {
    rendered = <u>{rendered}</u>;
  }
  if (child.marks?.includes('strike-through')) {
    rendered = <s>{rendered}</s>;
  }
  if (child.marks?.includes('code')) {
    rendered = (
      <code className="rounded bg-subtle px-1 py-0.5 font-mono text-sm block">
        {rendered}
      </code>
    );
  }

  return rendered;
}
