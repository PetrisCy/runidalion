import Link from "next/link";

const runDetails = [
  {
    label: "Date",
    value: "Sunday, 22 November 2026",
    detail: "The first race starts at 9:00 AM",
  },
  {
    label: "Location",
    value: "Near the Bridge",
    detail: "Dali 2540, Cyprus",
  },
  {
    label: "Registration closes",
    value: "Thursday, 19 November",
    detail: "Online registration is available for all event categories",
  },
  {
    label: "At the finish",
    value: "Plenty to enjoy",
    detail: "Participation medal, massage, water, fruit, and loukoumades",
  },
  {
    label: "Awards",
    value: "Age category awards",
    detail: "Celebrate the runners and their achievements",
  },
];

const runOptions = [
  { name: "10 km Race", note: "Starts at 9:00 AM", icon: "distance" },
  { name: "5 km Race", note: "Starts at 9:10 AM", icon: "runner" },
  { name: "3 km Walk", note: "Starts at 9:30 AM", icon: "walk" },
  { name: "1 km Family Fun Run", note: "10:20 AM · Parents with children up to 6", icon: "family" },
  { name: "1 km Children’s Race", note: "Starts at 10:40 AM", icon: "kids" },
];

function RunIcon({ type }: { type: string }) {
  if (type === "distance") {
    return <path strokeLinecap="round" strokeLinejoin="round" d="M4 17c3-6 5-8 8-8s4 2 8-3M4 17h5m6 0h5M7 6h.01M17 11h.01" />;
  }

  if (type === "runner") {
    return <path strokeLinecap="round" strokeLinejoin="round" d="M14 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-3 15 2-6 3 2 4 1M6 10l4-3 4 2 3 4M4 20l5-5" />;
  }

  if (type === "kids") {
    return <path strokeLinecap="round" strokeLinejoin="round" d="M12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 5c1.5-2 3-3 5-3s3.5 1 5 3M9 12l-1 4-3 3m10-7 1 4 3 3m-7-5v7" />;
  }

  if (type === "walk") {
    return <path strokeLinecap="round" strokeLinejoin="round" d="M13 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-2 15 1-6-3-2-2 4m5-8 3 3 3 1m-6 2 4 6" />;
  }

  return <path strokeLinecap="round" strokeLinejoin="round" d="M8 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm8 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3 18v-3a5 5 0 0 1 10 0v3m-2-5a5 5 0 0 1 10 2v3M6 21h12" />;
}

export default function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden border-t border-[#52634f]/10 bg-[#f1f4ed] px-5 py-20 text-stone-700 sm:px-8 sm:py-28"
      aria-labelledby="location-title"
    >
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#52634f]/10" />
      <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-amber-200/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
            See you in Dali
          </p>
          <h2 id="location-title" className="text-4xl font-bold tracking-tight text-stone-700 sm:text-6xl">
            Where to meet
          </h2>
          <p className="mt-5 text-base leading-7 text-stone-500 sm:text-lg">
            Run or walk at Runidalion Dali and join the South Nicosia Idalion Municipality in supporting a healthy,
            active lifestyle. Choose your event, bring your family, and enjoy a community morning together.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-[0_20px_60px_rgba(65,90,70,0.14)] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="min-h-72 bg-stone-100 sm:min-h-80 lg:min-h-[420px]">
            <iframe
              title="Map showing the Runidalion meeting point near the bridge in Dali"
              src="https://www.google.com/maps?q=Bridge%2C%20Dali%202540%2C%20Cyprus&output=embed"
              className="h-full min-h-72 w-full border-0 sm:min-h-80 lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col justify-center bg-[#fffdf8] p-7 sm:p-10">
            <div className="grid gap-x-8 sm:grid-cols-2">
              {runDetails.map((item) => (
                <div key={item.label} className="border-b border-stone-200 py-5 first:pt-0 sm:[&:nth-child(2)]:pt-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52705a]">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold text-stone-700">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-stone-500">{item.detail}</p>
                </div>
              ))}
            </div>

            <Link
              href="https://www.google.com/maps/search/?api=1&query=Bridge%2C%20Dali%202540%2C%20Cyprus"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex w-fit items-center rounded-full bg-[#52705a] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#405c48] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#52705a]"
            >
              Open in Google Maps
              <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-[#52634f]/10 bg-[#e2eadf] p-7 text-stone-700 shadow-[0_20px_60px_rgba(75,95,72,0.1)] sm:p-10">
          <div className="mb-7 sm:flex sm:items-end sm:justify-between sm:gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">Something for everyone</p>
              <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Pick your run</h3>
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-stone-500 sm:mt-0 sm:text-right">
              Online registration is open until Thursday, 19 November 2026.
            </p>
          </div>

          <p className="mb-4 text-xs text-stone-500 lg:hidden">Swipe to see all five runs →</p>
          <div className="-mx-7 flex snap-x snap-mandatory gap-3 overflow-x-auto px-7 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-10 sm:px-10 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0">
            {runOptions.map((run, index) => (
              <div key={run.name} className="w-[72vw] max-w-64 shrink-0 snap-center rounded-2xl bg-[#fffdf8] p-5 text-stone-700 shadow-sm sm:w-64 lg:w-auto lg:max-w-none">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600">0{index + 1}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <RunIcon type={run.icon} />
                    </svg>
                  </span>
                </div>
                <p className="mt-3 text-lg font-bold">{run.name}</p>
                <p className="mt-1 text-sm leading-5 text-stone-500">{run.note}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-stone-400">
          Part of the proceeds will be donated to a charity, which will be announced later.
        </p>
      </div>
    </section>
  );
}
