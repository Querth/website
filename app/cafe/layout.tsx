import type { Metadata } from "next";
import Link from "next/link";
import { cafe } from "./data";

export const metadata: Metadata = {
  title: {
    default: `${cafe.name} — ${cafe.tagline}`,
    template: `%s — ${cafe.name}`,
  },
  description: cafe.intro,
};

const nav = [
  { href: "/cafe", label: "Home" },
  { href: "/cafe/menu", label: "Menu" },
  { href: "/cafe/visit", label: "Visit" },
] as const;

export default function CafeLayout({ children }: LayoutProps<"/cafe">) {
  return (
    <div className="flex min-h-screen flex-col bg-[#fbf7f1] text-stone-800 dark:bg-[#12100e] dark:text-stone-200">
      <header className="sticky top-0 z-10 border-b border-stone-900/10 bg-[#fbf7f1]/85 backdrop-blur dark:border-white/10 dark:bg-[#12100e]/85">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
          <Link
            href="/cafe"
            className="font-serif text-lg tracking-tight text-stone-900 dark:text-stone-100"
          >
            {cafe.name}
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-stone-900/10 dark:border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 text-sm text-stone-600 sm:flex-row sm:items-start sm:justify-between dark:text-stone-400">
          <div>
            <p className="font-serif text-base text-stone-900 dark:text-stone-100">
              {cafe.name}
            </p>
            <p className="mt-2">
              {cafe.address.line1}, {cafe.address.line2}
            </p>
            <p>
              {cafe.address.city}, {cafe.address.country}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <a className="hover:text-stone-900 dark:hover:text-stone-100" href={`tel:${cafe.phone.replace(/\s/g, "")}`}>
              {cafe.phone}
            </a>
            <a className="hover:text-stone-900 dark:hover:text-stone-100" href={`mailto:${cafe.email}`}>
              {cafe.email}
            </a>
            <a
              className="hover:text-stone-900 dark:hover:text-stone-100"
              href={cafe.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <p className="text-xs text-stone-500 dark:text-stone-500">
            Demo site. Not affiliated with any business.
          </p>
        </div>
      </footer>
    </div>
  );
}
