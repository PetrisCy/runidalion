const sponsors = ["AION", "STRIDE", "NOVA", "PEAK", "PULSE"];

function SponsorList({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-5 pr-5 sm:gap-8 sm:pr-8" aria-hidden={hidden || undefined}>
      {sponsors.map((sponsor) => (
        <div
          key={sponsor}
          className="group flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-stone-200 bg-white/80 px-7 shadow-sm transition-colors hover:border-amber-300 hover:bg-white sm:h-24 sm:w-52"
        >
          <span className="text-lg font-bold tracking-[0.22em] text-stone-400 transition-colors group-hover:text-amber-700 sm:text-xl">
            {sponsor}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Sponsors() {
  return (
    <section className="overflow-hidden border-y border-stone-200 bg-[#fffdf8] py-12 sm:py-16" aria-labelledby="sponsors-title">
      <div className="mx-auto mb-8 max-w-6xl px-5 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">Proudly supported by</p>
        <h2 id="sponsors-title" className="mt-2 text-2xl font-bold tracking-tight text-stone-700">
          Our Sponsors
        </h2>
      </div>

      <div className="sponsor-mask">
        <div className="sponsor-track w-max hover:[animation-play-state:paused]">
          <SponsorList />
          <SponsorList hidden />
        </div>
      </div>
    </section>
  );
}
