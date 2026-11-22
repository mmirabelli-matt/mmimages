import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/press", label: "Press" },
  { to: "/sports", label: "Sports" },
  { to: "/biography", label: "Biography" },
  { to: "/contact", label: "Contact" },
  { to: "/weddings", label: "Weddings" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-2xl leading-none">
          Matthew Mirabelli<span className="text-primary">.</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="eyebrow transition-colors hover:text-foreground" activeProps={{ className: "text-primary!" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <button className="eyebrow md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border px-6 py-6 md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="font-display text-3xl">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-10 md:flex-row">
        <p className="eyebrow">© Matthew Mirabelli · Malta</p>
        <p className="eyebrow">
          <a href="mailto:mmirabelli@mmimages.com" className="hover:text-primary">mmirabelli@mmimages.com</a> · (00356) 7949 9584
        </p>
      </div>
    </footer>
  );
}
