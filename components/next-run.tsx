"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const eventDate = new Date("2026-11-22T09:00:00+02:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const difference = Math.max(0, eventDate.getTime() - Date.now());

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
}

const units: Array<{ key: keyof TimeLeft; label: string }> = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function NextRun() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const initialUpdate = window.setTimeout(() => setTimeLeft(getTimeLeft()), 0);
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1_000);

    return () => {
      window.clearTimeout(initialUpdate);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section
      id="next-run"
      className="relative overflow-hidden bg-[#f5efe3] px-5 py-20 sm:px-8 sm:py-28"
      aria-labelledby="next-run-title"
    >
      <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
            Save the date
          </p>
          <h2
            id="next-run-title"
            className="text-5xl font-bold tracking-tight text-stone-700 sm:text-6xl"
          >
            Next Run
          </h2>
          <div className="mt-7 border-l-2 border-amber-500 pl-5">
            <p className="text-2xl font-semibold text-stone-700">Sunday, November 22</p>
            <p className="mt-1 text-lg text-stone-500">First race starts at 9:00 AM</p>
          </div>

          <Link
            href="#location"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-[#fffdf8] px-5 py-3 text-sm font-semibold text-stone-600 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            Location
          </Link>
        </div>

        <div>
          <p className="mb-5 text-sm font-medium text-stone-500">The starting line is getting closer</p>
          <div
            className="grid grid-cols-4 overflow-hidden rounded-2xl border border-white/80 bg-[#fffdf8]/85 shadow-[0_12px_40px_rgba(120,90,45,0.08)] backdrop-blur sm:gap-4 sm:overflow-visible sm:border-0 sm:bg-transparent sm:shadow-none"
            aria-label="Countdown to the next run"
          >
            {units.map((unit) => (
              <div
                key={unit.key}
                className="border-r border-stone-200 px-1 py-5 text-center last:border-r-0 sm:rounded-2xl sm:border sm:border-white/80 sm:bg-[#fffdf8]/85 sm:px-3 sm:py-8 sm:shadow-[0_12px_40px_rgba(120,90,45,0.08)] sm:backdrop-blur"
              >
                <span className="block text-2xl font-bold tabular-nums tracking-tight text-stone-700 sm:text-5xl">
                  {timeLeft ? String(timeLeft[unit.key]).padStart(2, "0") : "--"}
                </span>
                <span className="mt-2 block text-[9px] font-semibold uppercase tracking-wide text-stone-400 sm:text-xs sm:tracking-widest">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
