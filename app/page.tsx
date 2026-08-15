const projects = [
  {
    name: "website",
    description: "My personal site and learning project.",
    link: "https://github.com/Querth/website",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto max-w-2xl px-6 py-24">
        {/* Hero */}
        <section className="mb-20">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Patiphanh
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Student learning new skills.
          </p>
        </section>

        {/* About */}
        <section className="mb-20">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
            About
          </h2>
          <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
            Patiphanh is a student exploring web development and picking up
            new skills through hands-on projects.
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
              href="mailto:ikkyuzchocolate@gmail.com"
              className="font-medium text-black underline dark:text-zinc-50"
            >
              ikkyuzchocolate@gmail.com
            </a>{" "}
            or find me on{" "}
            <a
              href="https://github.com/Querth"
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
