const projects = [
  {
    name: "Project One",
    description: "A short description of what this project does and why it's interesting.",
    link: "#",
  },
  {
    name: "Project Two",
    description: "A short description of what this project does and why it's interesting.",
    link: "#",
  },
  {
    name: "Project Three",
    description: "A short description of what this project does and why it's interesting.",
    link: "#",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto max-w-2xl px-6 py-24">
        {/* Hero */}
        <section className="mb-20">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Your Name
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A one-line description of who you are and what you do — e.g.
            &ldquo;Software engineer building things on the web.&rdquo;
          </p>
        </section>

        {/* About */}
        <section className="mb-20">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
            About
          </h2>
          <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
            Write a couple of sentences here about your background, what you&apos;re
            working on, and what you&apos;re interested in.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
            Projects
          </h2>
          <div className="mt-6 flex flex-col gap-8">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.link}
                className="group block"
              >
                <h3 className="text-lg font-medium text-black group-hover:underline dark:text-zinc-50">
                  {project.name}
                </h3>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
            Contact
          </h2>
          <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
            Reach me at{" "}
            <a
              href="mailto:you@example.com"
              className="font-medium text-black underline dark:text-zinc-50"
            >
              you@example.com
            </a>{" "}
            or find me on{" "}
            <a
              href="#"
              className="font-medium text-black underline dark:text-zinc-50"
            >
              GitHub
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
