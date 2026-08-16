/**
 * All content for the cafe demo site lives here.
 *
 * NOTE: The details below are PLACEHOLDERS. Swap them for the real cafe's
 * name, address, hours and menu and the whole site updates — no other file
 * needs to change.
 */

export const cafe = {
  name: "Ban Kafé",
  tagline: "Slow coffee, warm room, open early.",
  intro:
    "A small neighbourhood coffee house. We roast in small batches, pull every shot to order, and bake whatever looked good at the market that morning.",
  address: {
    line1: "123 Riverside Road",
    line2: "Ban Mixay",
    city: "Vientiane",
    country: "Laos",
  },
  phone: "+856 20 1234 5678",
  email: "hello@bankafe.example",
  mapUrl: "https://maps.app.goo.gl/uFoMDx4eje9SBcPk8",
  instagram: "https://instagram.com/",
} as const;

/**
 * Opening hours. `weekdays` holds JS day numbers (0 = Sunday) so the
 * "open now" badge can work them out; `label` is what visitors read.
 * Times are 24-hour "HH:MM" in the cafe's local time.
 */
export type HoursBlock = {
  /** What visitors read, e.g. "Monday – Friday". */
  label: string;
  /** JS day numbers this block covers (0 = Sunday). */
  weekdays: number[];
  /** 24-hour "HH:MM" in the cafe's local time. */
  open: string;
  close: string;
};

export const hours: HoursBlock[] = [
  { label: "Monday – Friday", weekdays: [1, 2, 3, 4, 5], open: "07:00", close: "18:00" },
  { label: "Saturday", weekdays: [6], open: "08:00", close: "19:00" },
  { label: "Sunday", weekdays: [0], open: "08:00", close: "16:00" },
];

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/** Minutes since midnight, for comparing "HH:MM" strings. */
function toMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function blockForDay(day: number) {
  return hours.find((block) => block.weekdays.includes(day));
}

export type OpenState =
  /** Open now, closing at `closesAt`. */
  | { open: true; closesAt: string }
  /** Closed now; `opensAt` is the next opening time, `opensOn` the day it falls on. */
  | { open: false; opensAt: string; opensOn: "today" | "tomorrow" | string }
  /** Closed with no upcoming opening in the next week. */
  | { open: false; opensAt: null; opensOn: null };

/** Whether the cafe is open at the given local date/time. */
export function openStateAt(now: Date): OpenState {
  const minutes = now.getHours() * 60 + now.getMinutes();
  const today = blockForDay(now.getDay());

  if (today) {
    if (minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
      return { open: true, closesAt: today.close };
    }
    if (minutes < toMinutes(today.open)) {
      return { open: false, opensAt: today.open, opensOn: "today" };
    }
  }

  // Already past closing (or closed today) — find the next day we open.
  for (let ahead = 1; ahead <= 7; ahead++) {
    const day = (now.getDay() + ahead) % 7;
    const block = blockForDay(day);
    if (block) {
      return {
        open: false,
        opensAt: block.open,
        opensOn: ahead === 1 ? "tomorrow" : DAY_NAMES[day],
      };
    }
  }

  return { open: false, opensAt: null, opensOn: null };
}

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  featured?: boolean;
};

export type MenuSection = {
  title: string;
  blurb: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    title: "Espresso",
    blurb: "Pulled on our house blend — chocolate, brown sugar, a little citrus.",
    items: [
      {
        name: "Espresso",
        description: "Double shot, served with sparkling water.",
        price: "20,000",
      },
      {
        name: "Flat White",
        description: "Double shot, steamed milk, thin cap of microfoam.",
        price: "32,000",
        featured: true,
      },
      {
        name: "Latte",
        description: "Longer milk, softer edge. Hot or over ice.",
        price: "32,000",
      },
      {
        name: "Cappuccino",
        description: "Equal parts espresso, milk and foam.",
        price: "30,000",
      },
      {
        name: "Coconut Cold Brew",
        description: "Steeped eighteen hours, finished with coconut milk.",
        price: "38,000",
        featured: true,
      },
    ],
  },
  {
    title: "Filter & Tea",
    blurb: "Single origins from the Bolaven Plateau, changing every few weeks.",
    items: [
      {
        name: "Pour Over",
        description: "Ask what's on the shelf today — we'll talk you through it.",
        price: "35,000",
      },
      {
        name: "Lao Iced Coffee",
        description: "Dark roast, condensed milk, plenty of ice.",
        price: "25,000",
      },
      {
        name: "Jasmine Green Tea",
        description: "Loose leaf, refilled once on the house.",
        price: "25,000",
      },
      {
        name: "Ginger & Lemongrass",
        description: "Caffeine free, steeped fresh to order.",
        price: "25,000",
      },
    ],
  },
  {
    title: "Kitchen",
    blurb: "Baked in the morning, gone by the afternoon.",
    items: [
      {
        name: "Butter Croissant",
        description: "Laminated over two days. Best before ten.",
        price: "22,000",
      },
      {
        name: "Banana Bread",
        description: "Toasted, with salted butter.",
        price: "25,000",
      },
      {
        name: "Egg & Herb Baguette",
        description: "Soft scramble, spring onion, chilli jam.",
        price: "45,000",
        featured: true,
      },
      {
        name: "Coconut Rice Pudding",
        description: "Served warm with palm sugar and toasted sesame.",
        price: "30,000",
      },
    ],
  },
];

export const currencyNote = "Prices in LAK (₭).";
