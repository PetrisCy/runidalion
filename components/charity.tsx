export default function Charity() {
  return (
    <section className="relative overflow-hidden bg-[#f1f4ed] px-5 py-20 text-stone-700 sm:px-8 sm:py-28" aria-labelledby="charity-title">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-[#52634f]/10" />
      <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full border border-[#52634f]/10" />
      <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-amber-200/25 blur-2xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-amber-300 text-[#52634f] shadow-lg shadow-stone-950/5">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
              <path d="M12 21s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.2-8 11-8 11Z" />
            </svg>
          </div>
          <h2 id="charity-title" className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Run for health.
            <br />
            Run for life.
            <br />
            <span className="text-amber-600">Run for hope.</span>
          </h2>
        </div>

        <div className="rounded-3xl border border-[#52634f]/10 bg-white/75 p-7 shadow-[0_18px_50px_rgba(75,95,72,0.08)] backdrop-blur-sm sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">Every step matters</p>
          <p className="mt-5 text-xl font-medium leading-8 text-stone-700 sm:text-2xl">
            Run or walk with us and support a healthy, active lifestyle in our community.
          </p>
          <p className="mt-5 leading-7 text-stone-500">
            Runidalion Dali is organized together with the <strong className="font-semibold text-stone-700">South Nicosia
            Idalion Municipality</strong>. Part of the event proceeds will be donated to a charity, which will be announced
            soon.
          </p>
          <div className="mt-7 flex items-center gap-3 border-t border-[#52634f]/10 pt-6 text-sm text-stone-500">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Run together. Give together.
          </div>
        </div>
      </div>
    </section>
  );
}
