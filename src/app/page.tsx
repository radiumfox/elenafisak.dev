import { ContentSection } from '@/components/ContentSection';
import { FeatureCards } from '@/components/FeatureCards';
import type { FeatureCardItem } from '@/components/FeatureCards';
import { SparkleIcon } from '@/lib/icons/SparkleIcon';

const FEATURE_ITEMS: FeatureCardItem[] = [
  {
    id: 'zero-configuration',
    icon: SparkleIcon,
    title: 'Zero Configuration',
    description: 'Start coding with TypeScript and React immediately — the build tooling and environment are already set up for you.',
  },
  {
    id: 'rendering-modes',
    icon: SparkleIcon,
    title: 'Rendering Modes',
    description: 'Server-side rendering, client-side rendering, static generation — decide per route what best fits the page.',
  },
  {
    id: 'routing-layouts',
    icon: SparkleIcon,
    title: 'Routing & Layouts',
    description: 'File-based routing and reusable layouts to build complex, URL-driven views with shared components.',
  },
  {
    id: 'data-fetching',
    icon: SparkleIcon,
    title: 'Data Fetching',
    description: 'Make your components async and await your data with idiomatic, type-safe data fetching patterns.',
  },
  {
    id: 'error-handling',
    icon: SparkleIcon,
    title: 'Error Handling',
    description: 'Catch errors gracefully with dedicated boundaries, custom error pages, and rich diagnostics.',
  },
  {
    id: 'performance',
    icon: SparkleIcon,
    title: 'Performance',
    description: 'Automatic code splitting, lazy loading, and asset optimization to keep interactions snappy.',
  },
  {
    id: 'design-system',
    icon: SparkleIcon,
    title: 'Design System',
    description: 'A consistent, themeable system with tokens that scale from a landing page to a full product.',
  },
  {
    id: 'design-system-2',
    icon: SparkleIcon,
    title: 'Design System 2',
    description: 'A consistent, themeable system with tokens that scale from a landing page to a full product.',
  },
];

export default function HomePage() {
  return (
    <main className="mt-[140px] w-full min-w-0 px-1 md:px-6 lg:px-12 lg:pr-6 space-y-16">
      <ContentSection id="intro">
        <p className="text-2xl opacity-80">Hi, I&#39;m Elena.</p>
        <h1 className="text-4xl font-bold">I&#39;m a senior frontend engineer.</h1>
        <div className="space-y-4 opacity-80 max-w-[800px]">
          <p>With 5 years of experience building B2B and B2C SaaS products and shared design systems, I work across TypeScript, React, and Vue to turn ambitious ideas into fast, scalable, maintainable software.</p>
          <p>I like owning things end-to-end — from the first architectural sketch to the final deploy — and I&#39;m equally happy deep in a tricky frontend problem or helping a teammate untangle one. I care about good abstractions, great developer experience, and shipping software that holds up over time.</p>
        </div>
      </ContentSection>

      <ContentSection id="experience">
        <div className="space-y-12">
          <div className="space-y-3">
            <span className="block h-1 w-12 rounded-full bg-accent" />
            <h2 className="text-4xl font-bold tracking-tight">
              Everything I know, nothing I do not
            </h2>
            <p className="text-muted">
              Where I have worked and what I built along the way.
            </p>
          </div>
          <FeatureCards items={FEATURE_ITEMS} action={{ title: 'Reach out to me', href: 'https://www.linkedin.com/', linkText: 'To LinkedIn' }} />
        </div>
      </ContentSection>

      <ContentSection id="work">
        <h1 className="text-4xl font-bold">Work</h1>
        <p>A selection of my projects.</p>
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p>Details about notable work.</p>
      </ContentSection>

      <ContentSection id="contacts">
        <h1 className="text-4xl font-bold">Contacts</h1>
        <p>Ways to get in touch with me.</p>
        <h2 className="text-2xl font-semibold">Get in touch</h2>
        <p>Email and social links.</p>
      </ContentSection>
    </main>
  );
}
