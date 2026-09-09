import type { Metadata } from "next";
import { currencyNote, menu } from "../data";

export const metadata: Metadata = {
  title: "Menu",
  description: "Espresso, filter coffee, tea and whatever the kitchen baked this morning.",
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl tracking-tight text-stone-900 dark:text-stone-50">
        Menu
      </h1>
      <p className="mt-4 text-stone-600 dark:text-stone-400">
        Roasts and pastries rotate. Ask us what&apos;s good today.
      </p>

      <div className="mt-16 flex flex-col gap-16">
        {menu.map((section) => (
          <section key={section.title}>
            <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100">
              {section.title}
            </h2>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
              {section.blurb}
            </p>
            <ul className="mt-8 divide-y divide-stone-900/10 dark:divide-white/10">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-8 py-4"
                >
                  <div>
                    <h3 className="text-stone-900 dark:text-stone-100">
                      {item.name}
                      {item.featured && (
                        <span className="ml-2 align-middle text-[10px] uppercase tracking-wide text-amber-700 dark:text-amber-500">
                          House favourite
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-stone-600 dark:text-stone-400">
                      {item.description}
                    </p>
                  </div>
                  <p className="shrink-0 font-mono text-sm text-stone-600 tabular-nums dark:text-stone-400">
                    {item.price}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-16 text-xs text-stone-500 dark:text-stone-500">
        {currencyNote} Oat and coconut milk at no extra charge.
      </p>
    </div>
  );
}
