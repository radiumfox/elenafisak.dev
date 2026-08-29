import { ContentSection } from '@/components/ContentSection';

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
        <h1 className="text-4xl font-bold">Experience</h1>
        <p>Overview of my professional experience.</p>
        <h2 className="text-2xl font-semibold">Work history</h2>
        <p>Details about previous roles.</p>
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
