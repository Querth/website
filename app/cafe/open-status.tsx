"use client";

import { useEffect, useState } from "react";
import { openStateAt, type OpenState } from "./data";

/**
 * "Open now" badge. The answer depends on the visitor's clock, so it renders
 * nothing on the server and fills in after mount — no hydration mismatch.
 */
export function OpenStatus() {
  const [state, setState] = useState<OpenState | null>(null);

  useEffect(() => {
    const update = () => setState(openStateAt(new Date()));
    update();
    const timer = setInterval(update, 60_000);
    return () => clearInterval(timer);
  }, []);

  if (!state) {
    return <span className="h-6" aria-hidden />;
  }

  const label = state.open
    ? `Open now — until ${state.closesAt}`
    : state.opensAt
      ? `Closed — opens ${state.opensOn} at ${state.opensAt}`
      : "Closed";

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-white/70 px-3 py-1 text-xs font-medium text-stone-700 dark:border-white/10 dark:bg-white/5 dark:text-stone-300">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          state.open ? "bg-emerald-600 dark:bg-emerald-400" : "bg-stone-400"
        }`}
        aria-hidden
      />
      {label}
    </span>
  );
}
