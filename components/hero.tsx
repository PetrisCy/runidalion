import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const basePath = process.env.GITHUB_ACTIONS === "true" ? "/runidalion" : "";

  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100svh-73px)] overflow-hidden"
      aria-labelledby="hero-title"
    >
      <Image
        src={`${basePath}/653709776_1512615897532345_2844505533434234706_n.jpg`}
        alt="Runners crossing the start line at Run Idalion"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/75 via-stone-900/35 to-transparent" />

      <div className="relative flex min-h-[calc(100svh-73px)] w-full items-end px-5 pb-[12vh] pt-20 sm:px-10 lg:px-16 lg:pb-[14vh]">
        <div className="max-w-2xl text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            Run Idalion
          </p>
          <h1
            id="hero-title"
            className="text-5xl font-bold tracking-tight drop-shadow-sm sm:text-7xl lg:text-8xl"
          >
            November 22
          </h1>
          <Link
            href="https://in.events-runningincyprus.com/runidalion-2026?currentPage=select-competition"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-[#fffdf8] px-6 py-3 text-sm font-semibold text-stone-700 shadow-lg transition hover:bg-amber-50 hover:text-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Register
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
          <p className="mt-4 flex items-center gap-2 text-xs font-medium tracking-wide text-white/75">
            Keep scrolling for more information
            <span aria-hidden="true" className="animate-bounce text-base">↓</span>
          </p>
        </div>
      </div>
    </section>
  );
}
