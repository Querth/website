import type { Metadata } from "next";
import { cafe } from "../data";
import { HoursList } from "../hours-list";
import { OpenStatus } from "../open-status";

export const metadata: Metadata = {
  title: "Visit",
  description: `Hours, address and contact details for ${cafe.name}.`,
};

export default function VisitPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl tracking-tight text-stone-900 dark:text-stone-50">
        Visit
      </h1>
      <div className="mt-6">
        <OpenStatus />
      </div>

      <div className="mt-16 grid gap-16 sm:grid-cols-2">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-500">
            Hours
          </h2>
          <div className="mt-6">
            <HoursList />
          </div>
          <p className="mt-6 text-sm leading-6 text-stone-600 dark:text-stone-400">
            The kitchen stops thirty minutes before close. Public holidays vary
            — we post them on Instagram.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-500">
            Find us
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

          <h2 className="mt-12 text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-500">
            Contact
          </h2>
          <ul className="mt-6 flex flex-col gap-2 text-stone-700 dark:text-stone-300">
            <li>
              <a
                className="underline-offset-4 hover:underline"
                href={`tel:${cafe.phone.replace(/\s/g, "")}`}
              >
                {cafe.phone}
              </a>
            </li>
            <li>
              <a
                className="underline-offset-4 hover:underline"
                href={`mailto:${cafe.email}`}
              >
                {cafe.email}
              </a>
            </li>
            <li>
              <a
                className="underline-offset-4 hover:underline"
                href={cafe.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </section>
      </div>

      <section className="mt-20 rounded-2xl border border-stone-900/10 p-8 dark:border-white/10">
        <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100">
          Bookings & events
        </h2>
        <p className="mt-3 max-w-xl leading-7 text-stone-600 dark:text-stone-400">
          We keep the room first-come, first-served during the week. For private
          hire, cuppings or a large order, email us a few days ahead and
          we&apos;ll sort it out.
        </p>
        <a
          href={`mailto:${cafe.email}`}
          className="mt-6 inline-block rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white"
        >
          Email us
        </a>
      </section>
    </div>
  );
}
