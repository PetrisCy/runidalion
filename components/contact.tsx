import Link from "next/link";

const socialLinks = [
  {
    label: "Email Run Idalion",
    href: "mailto:hello@runidalion.com",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.5 12 13l9-6.5M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />,
  },
  {
    label: "Run Idalion on Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Run Idalion on Facebook",
    href: "https://www.facebook.com/",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M14 21v-8h3l.5-4H14V7c0-1.2.7-2 2.2-2H18V1.5c-.8-.1-1.8-.2-2.8-.2C12 1.3 10 3.2 10 6.7V9H7v4h3v8" />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#f5efe3] px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="contact-title">
      <span id="register" className="absolute top-0" aria-hidden="true" />
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">Questions? Give us a call</p>
        <h2 id="contact-title" className="mt-5 text-4xl font-bold tracking-tight text-stone-700 sm:text-6xl">
          <Link href="tel:+35799610972" className="transition-colors hover:text-amber-700">
            99610972
          </Link>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-stone-500 sm:text-lg">
          Ready to join us? Register online by Thursday, 19 November 2026, and we&apos;ll see you at the starting line.
        </p>

        <Link
          href="https://in.events-runningincyprus.com/runidalion-2026?currentPage=select-competition"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center rounded-full bg-amber-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-amber-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
        >
          Register
          <span aria-hidden="true" className="ml-2">→</span>
        </Link>

        <div className="mt-10 flex items-center justify-center gap-3">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.label}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-200 bg-[#fffdf8] text-stone-600 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:text-amber-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
                {item.icon}
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
