"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import runIdalionLogo from "../public/runidalion-logo.png";

const navigation = [
  {
    label: "Register",
    href: "https://in.events-runningincyprus.com/runidalion-2026?currentPage=select-competition",
  },
  { label: "Contact", href: "#contact" },
  { label: "Next Run", href: "#next-run" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-[#fffdf8]/95 backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-2 sm:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex h-14 items-center"
          aria-label="Home"
        >
          <Image
            src={runIdalionLogo}
            alt="Run Idalion"
            className="h-14 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-amber-700"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-stone-600 transition-colors hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          {isOpen ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-stone-200 bg-[#fffdf8] px-5 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-md px-3 py-3 text-sm font-medium text-stone-600 transition-colors hover:bg-amber-50 hover:text-amber-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
