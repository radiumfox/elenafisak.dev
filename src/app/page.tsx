'use client';

import { ContentSection } from '@/components/ContentSection';
import { FeatureCards } from '@/components/FeatureCards';
import type { FeatureCardItem } from '@/components/FeatureCards';
import { SparkleIcon } from '@/lib/icons/SparkleIcon';
import { CarouselBase, CarouselCard } from '@/components/CarouselBase';
import { LabelBase } from '@/components/LabelBase';
import { ProjectInfoCard } from '@/components/ProjectInfoCard';
import { ContactForm } from '@/components/ContactForm';
import { BannerBase } from '@/components/BannerBase';

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

const SKILLS = [
  {
    title: '@nuxt/ui',
    description: 'The intuitive UI library powered by Reka UI and Tailwind CSS.',
    label: [
      { text: 'Reactive', color: 'blue' },
      { text: 'Themed', color: 'purple' },
    ],
  },
  {
    title: '@nuxt/content',
    description: 'The file-based CMS with support for Markdown, YAML, and JSON.',
    label: [
      { text: 'Markdown', color: 'orange' },
      { text: 'Structured', color: 'green' },
    ],
  },
  {
    title: '@nuxt/devtools',
    description: 'Visual tools that help you know your application better.',
    label: [
      { text: 'Visual', color: 'pink' },
      { text: 'Insightful', color: 'blue' },
    ],
  },
  {
    title: '@nuxt/image',
    description: 'Add images with progressive processing, lazy loading, and resizing.',
    label: [
      { text: 'Optimized', color: 'green' },
      { text: 'Lazy', color: 'orange' },
    ],
  },
  {
    title: '@nuxt/icon',
    description: 'Icon module for Nuxt with thousands of ready-to-use icons.',
    label: [
      { text: 'Scalable', color: 'purple' },
      { text: 'Modern', color: 'pink' },
    ],
  },
  {
    title: '@nuxt/eslint',
    description: 'Project-aware, easy-to-use, extensible and future-proof linting.',
    label: [
      { text: 'Extensible', color: 'green' },
      { text: 'Reliable', color: 'blue' },
    ],
  },
] as const;

const STEPS = [
  {
    title: 'bun init --react',
    description: 'Scaffold a React app (or add index.html to any project).',
  },
  {
    title: 'bun ./index.html',
    description: 'Dev server with HMR that preserves state; browser logs stream to your terminal.',
  },
  {
    title: 'bun build ./index.html --production',
    description: 'Tree-shaken, minified, code-split bundles.',
  },
];

export default function HomePage() {
  return (
    <main className="mt-[140px] w-full min-w-0 px-1 md:px-6 lg:px-12 lg:pr-6 space-y-16 pb-[240px]">
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
              More details about how I can help you
            </h2>
            <p className="text-muted">
              Where I have worked and what I built along the way.
            </p>
          </div>
          <FeatureCards items={FEATURE_ITEMS} action={{ title: 'Reach out to me', href: 'https://www.linkedin.com/', linkText: 'To LinkedIn' }} />
        </div>
      </ContentSection>

      <ContentSection id="skills">
        <div className="space-y-3">
          <span className="block h-1 w-12 rounded-full bg-accent" />
          <h2 className="text-4xl font-bold tracking-tight">Skills</h2>
          <p className="text-muted">
            Technologies I know
          </p>
        </div>

        <CarouselBase slidesPerView={3} navigation autoplay autoplayDelay={3000}>
          {SKILLS.map((skill) => (
            <CarouselCard
              key={skill.title}
              icon={SparkleIcon}
              title={skill.title}
              description={skill.description}
            >
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.label.map((item) => (
                  <LabelBase key={item.text} text={item.text} color={item.color} />
                ))}
              </div>
            </CarouselCard>
          ))}
        </CarouselBase>
      </ContentSection>

      <ContentSection id="works">
        <div className="space-y-10">
          <h2 className="text-4xl font-bold tracking-tight">
            I&#39;m currently working on
          </h2>

          <ProjectInfoCard
            title="A project name"
            description="Point a tool at an HTML file and get a dev server with instant hot reloading, then a production command for optimized bundles. React, TypeScript and CSS imports just work out of the box."
            features={STEPS}
            href="#"
          />

          <ProjectInfoCard
            title="A project name"
            description="Point a tool at an HTML file and get a dev server with instant hot reloading, then a production command for optimized bundles. React, TypeScript and CSS imports just work out of the box."
            features={STEPS}
            href="#"
          />
        </div>
      </ContentSection>

      <ContentSection id="contacts">
        <div className="w-full space-y-6">
          <div className="flex flex-col gap-8 xl:hidden">
            <BannerBase
              imgSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
              text="Got a project in mind? Let's build something amazing."
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Get in touch</h1>
          <p className="text-muted">Whether you have a project, an opportunity,<br/> or simply want to connect — drop me a message.</p>
          <div className="flex flex-col gap-8 xl:flex-row xl:gap-6">
            <ContactForm onSubmit={() => {}} className="xl:max-w-[55%]" />
            <BannerBase
              className="hidden xl:flex xl:w-1/2"
              imgSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
              text="Got a project in mind? Let's build something amazing."
            />
          </div>
        </div>
      </ContentSection>
    </main>
  );
}
