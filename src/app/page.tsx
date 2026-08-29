import { ContentSection } from '@/components/ContentSection';

export default function HomePage() {
  return (
    <main className="mt-4 w-full min-w-0 px-1 md:px-6 lg:px-12 lg:pr-6 space-y-16">
      <ContentSection id="intro">
        <h1 className="text-4xl font-bold">Intro</h1>
        <p>Introductory paragraph describing who I am and what I do.</p>
        <h2 className="text-2xl font-semibold">About me</h2>
        <p>More content about my background.</p>
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
