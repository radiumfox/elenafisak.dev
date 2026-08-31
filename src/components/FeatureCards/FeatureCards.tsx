import { FeatureCard } from './FeatureCard';
import { FeatureCtaCard } from './FeatureCtaCard';
import type { FeatureCardAction, FeatureCardItem } from './types';

interface FeatureCardsProps {
  items: FeatureCardItem[];
  action: FeatureCardAction;
}

export function FeatureCards({ items, action }: FeatureCardsProps) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line/60 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <FeatureCard key={item.id} title={item.title} icon={item.icon}>
          {item.description}
        </FeatureCard>
      ))}

      <FeatureCtaCard title={action.title} href={action.href} linkText={action.linkText} />
    </div>
  );
}
