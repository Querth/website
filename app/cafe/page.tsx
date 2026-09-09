import Link from "next/link";
import { cafe, currencyNote, menu } from "./data";
import { HoursList } from "./hours-list";
import { OpenStatus } from "./open-status";

const featured = menu.flatMap((section) =>
  section.items
    .filter((item) => item.featured)
    .map((item) => ({ ...item, section: section.title })),
);

export default function CafeHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stone-900/10 dark:border-white/10">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_75%_20%,rgba(180,120,60,0.18),transparent_70%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <OpenStatus />
          <h1 className="mt-6 font-serif text-5xl leading-tight tracking-tight text-stone-900 sm:text-6xl dark:text-stone-50">
            {cafe.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600 dark:text-stone-400">
            {cafe.intro}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/cafe/menu"
              className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white"
            >
              See the menu
            </Link>
            <Link
              href="/cafe/visit"
              className="rounded-full border border-stone-900/15 px-5 py-2.5 text-sm font-medium text-stone-800 transition-colors hover:border-stone-900/40 dark:border-white/15 dark:text-stone-200 dark:hover:border-white/40"
            >
              Find us
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-500">
            Our room
          </h2>
          <div className="sm:col-span-2">
            <p className="text-xl leading-9 text-stone-800 dark:text-stone-200">
              We opened with six seats and one grinder. There are more of both
              now, but the idea hasn&apos;t changed: a quiet place to start the
              day, coffee worth sitting down for, and staff who know your order
              by the third visit.
            </p>
            <p className="mt-6 leading-7 text-stone-600 dark:text-stone-400">
              Beans come from growers on the Bolaven Plateau and we roast them
              in small batches each week. The pastry case is whatever the
              kitchen felt like at 5am. When it&apos;s gone, it&apos;s gone.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="border-y border-stone-900/10 bg-white/50 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-serif text-3xl text-stone-900 dark:text-stone-50">
              What people order
            </h2>
            <Link
              href="/cafe/menu"
              className="whitespace-nowrap text-sm text-stone-600 underline-offset-4 hover:underline dark:text-stone-400"
            >
              Full menu →
            </Link>
          </div>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {featured.map((item) => (
              <li key={item.name}>
                <p className="text-xs uppercase tracking-wide text-stone-500 dark:text-stone-500">
                  {item.section}
                </p>
                <h3 className="mt-2 font-serif text-xl text-stone-900 dark:text-stone-100">
                  {item.name}
                </h3>
                <p className="mt-2 leading-7 text-stone-600 dark:text-stone-400">
                  {item.description}
                </p>
                <p className="mt-3 font-mono text-sm text-stone-500 tabular-nums dark:text-stone-500">
                  {item.price}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-xs text-stone-500 dark:text-stone-500">
            {currencyNote}
          </p>
        </div>
      </section>

      {/* Hours + address */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-500">
              Hours
            </h2>
            <div className="mt-6">
              <HoursList />
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-500">
              Where
            </h2>
            <address className="mt-6 not-italic leading-8 text-stone-700 dark:text-stone-300">
              {cafe.address.line1}
              <br />
              {cafe.address.line2}
              <br />
              {cafe.address.city}, {cafe.address.country}
            </address>
            <a
              href={cafe.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm text-stone-600 underline underline-offset-4 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
