export default function HomePage() {
  return (
    <main className="mt-4 w-full min-w-0 px-1 md:px-6 lg:px-12 lg:pr-6 space-y-16">
      <section id="intro" className="scroll-mt-16">
        <article className="space-y-4">
          <h1 className="text-4xl font-bold">Intro</h1>
          <p>Introductory paragraph describing who I am and what I do.</p>
          <h2 className="text-2xl font-semibold">About me</h2>
          <p>More content about my background.</p>
        </article>
      </section>

      <section id="experience" className="scroll-mt-16">
        <article className="space-y-4">
          <h1 className="text-4xl font-bold">Experience</h1>
          <p>Overview of my professional experience.</p>
          <h2 className="text-2xl font-semibold">Work history</h2>
          <p>Details about previous roles.</p>
        </article>
      </section>

      <section id="work" className="scroll-mt-16">
        <article className="space-y-4">
          <h1 className="text-4xl font-bold">Work</h1>
          <p>A selection of my projects.</p>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p>Details about notable work.</p>
        </article>
      </section>

      <section id="contacts" className="scroll-mt-16">
        <article className="space-y-4">
          <h1 className="text-4xl font-bold">Contacts</h1>
          <p>Ways to get in touch with me.</p>
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <p>Email and social links.</p>
        </article>
      </section>
    </main>
  );
}
