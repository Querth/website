import { hours } from "./data";

export function HoursList() {
  return (
    <dl className="divide-y divide-stone-900/10 dark:divide-white/10">
      {hours.map((block) => (
        <div
          key={block.label}
          className="flex items-baseline justify-between gap-6 py-3"
        >
          <dt className="text-stone-700 dark:text-stone-300">{block.label}</dt>
          <dd className="font-mono text-sm text-stone-600 tabular-nums dark:text-stone-400">
            {block.open} – {block.close}
          </dd>
        </div>
      ))}
    </dl>
  );
}
