import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { MusicPlayer } from "@/components/MusicPlayer";
import {
  aboutPhoto,
  contactPhoto,
  galleryPhotos,
  heroPhotos,
  packagesPhoto,
} from "@/lib/wedding-photos";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Wedding Photography — Matthew Mirabelli" },
      {
        name: "description",
        content: "Natural, unobtrusive wedding photography with over 25 years of experience. Real emotions, beautifully told by Matthew Mirabelli in Malta.",
      },
      { property: "og:title", content: "Wedding Photography — Matthew Mirabelli" },
      {
        property: "og:description",
        content: "Natural, unobtrusive wedding photography with over 25 years of experience. Real emotions, beautifully told.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Weddings,
});

const navigation = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
] as const;

function Weddings() {
  return (
    <main id="top" className="wedding-theme min-h-screen bg-background font-sans text-foreground">
      <Header />
      <Hero />
      <About />
      <WeddingGallery />
      <Packages />
      <Contact />
    </main>
  );
}

function Header() {
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const updateHeader = () => setSolid(window.scrollY > 80);
    updateHeader();
    window.addEventListener("scroll", updateHeader);
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solid || menu ? "bg-background/95 text-foreground shadow-sm backdrop-blur" : "text-on-overlay"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="font-display text-2xl tracking-wide" aria-label="Matthew Mirabelli — back to portfolio">
          Matthew Mirabelli
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Wedding page">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="wedding-eyebrow opacity-80 transition hover:text-gold hover:opacity-100">
              {item.label}
            </a>
          ))}
          <Link to="/" className="wedding-eyebrow opacity-80 transition hover:text-gold hover:opacity-100">
            Portfolio
          </Link>
        </nav>
        <div className="flex items-center gap-4 sm:gap-6">
          <MusicPlayer />
          <button type="button" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu(!menu)} className="wedding-eyebrow lg:hidden">
            {menu ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {menu && (
        <nav className="flex flex-col gap-6 border-t border-border bg-background px-6 pb-8 pt-6 text-foreground lg:hidden" aria-label="Wedding page mobile">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenu(false)} className="wedding-eyebrow">
              {item.label}
            </a>
          ))}
          <Link to="/" className="wedding-eyebrow" onClick={() => setMenu(false)}>
            Portfolio
          </Link>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % heroPhotos.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative h-svh min-h-[600px] overflow-hidden bg-overlay" aria-label="Wedding photography introduction">
      {heroPhotos.map((src, index) => (
        <div key={src} className={`absolute inset-0 transition-opacity duration-[2000ms] ${index === active ? "opacity-100" : "opacity-0"}`}>
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className={`h-full w-full object-cover ${index === active ? "animate-kenburns" : ""}`}
            loading={index < 2 ? "eager" : "lazy"}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-overlay/75 via-overlay/20 to-overlay/70" />
      <div className="relative flex h-full flex-col items-center justify-end px-6 pb-28 text-center text-on-overlay">
        <p className="wedding-eyebrow animate-rise text-gold">Wedding Photography</p>
        <h1 className="mt-5 max-w-5xl animate-rise text-5xl font-light italic leading-tight [animation-delay:200ms] md:text-8xl">
          Your love, unfolding naturally
        </h1>
        <a
          href="#gallery"
          className="wedding-eyebrow mt-10 animate-rise border border-on-overlay/60 px-8 py-4 transition [animation-delay:400ms] hover:border-gold hover:bg-gold hover:text-accent-foreground"
        >
          View the gallery
        </a>
        <div className="absolute bottom-8 flex gap-2" aria-label="Choose opening photograph">
          {heroPhotos.map((src, index) => (
            <button
              type="button"
              key={src}
              aria-label={`Photo ${index + 1}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              className={`h-[2px] transition-all ${index === active ? "w-10 bg-gold" : "w-5 bg-on-overlay/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2 md:py-40">
      <div className="relative">
        <img src={aboutPhoto} alt="A quiet wedding moment photographed by Matthew Mirabelli" className="aspect-[4/5] w-full object-cover" loading="lazy" />
        <div className="absolute -bottom-6 -right-6 -z-10 hidden h-full w-full border border-gold md:block" />
      </div>
      <div>
        <p className="wedding-eyebrow text-gold">About</p>
        <h2 className="mt-4 text-4xl leading-tight md:text-6xl">Genuine moments, <em>real emotion</em></h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>With over 25 years of experience my aim is to capture genuine moments with a natural, unobtrusive style, focusing on real emotions.</p>
          <p>My approach is straightforward. No elaborate setups or forced smiles—just the beauty of your love, unfolding naturally. Whether it's an intimate affair or a grand celebration, I'm here to document the moments that make your day uniquely yours.</p>
          <p>Each photo I take is a snapshot of your story, reflecting the real, unfiltered moments that define your love. From the laughter to the quiet glances, I aim to create memories that feel true to you.</p>
          <p>From engagement sessions to full-day coverage, my services are tailored to your preferences.</p>
        </div>
        <p className="mt-10 font-display text-3xl italic">— Matthew</p>
      </div>
    </section>
  );
}

function WeddingGallery() {
  const [count, setCount] = useState(24);
  const [open, setOpen] = useState<number | null>(null);
  const step = useCallback(
    (direction: number) => setOpen((current) => current === null ? current : (current + direction + galleryPhotos.length) % galleryPhotos.length),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  return (
    <section id="gallery" className="bg-secondary py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="wedding-eyebrow text-gold">Gallery</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Moments worth keeping</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {galleryPhotos.slice(0, count).map((src, index) => (
            <button type="button" key={src} onClick={() => setOpen(index)} className="group block aspect-[4/5] w-full overflow-hidden bg-muted" aria-label={`Open wedding photograph ${index + 1}`}>
              <img src={src} alt={`Wedding photograph ${index + 1}`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </button>
          ))}
        </div>
        {count < galleryPhotos.length && (
          <div className="mt-14 text-center">
            <button type="button" onClick={() => setCount((current) => current + 24)} className="wedding-eyebrow border border-foreground px-8 py-4 transition hover:bg-foreground hover:text-background">
              Load more
            </button>
          </div>
        )}
      </div>
      {open !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-overlay/95 p-4" onClick={() => setOpen(null)} role="dialog" aria-modal="true" aria-label="Wedding photograph viewer">
          <img src={galleryPhotos[open]} alt={`Wedding photograph ${open + 1}`} className="max-h-[85vh] max-w-full object-contain" onClick={(event) => event.stopPropagation()} />
          <button type="button" aria-label="Close" onClick={() => setOpen(null)} className="absolute right-6 top-6 p-2 text-3xl text-on-overlay hover:text-gold">×</button>
          <button type="button" aria-label="Previous" onClick={(event) => { event.stopPropagation(); step(-1); }} className="absolute left-4 top-1/2 p-2 text-5xl text-on-overlay/70 hover:text-gold">‹</button>
          <button type="button" aria-label="Next" onClick={(event) => { event.stopPropagation(); step(1); }} className="absolute right-4 top-1/2 p-2 text-5xl text-on-overlay/70 hover:text-gold">›</button>
          <p className="wedding-eyebrow absolute bottom-6 text-on-overlay">{open + 1} / {galleryPhotos.length}</p>
        </div>
      )}
    </section>
  );
}

const packages = [
  { name: "Digital", price: "€900", note: "+ VAT", items: ["8 hours of photography", "Edited digital images", "Extra hours at €150 / hour"] },
  { name: "Traditional Album", price: "€1,700", note: "+ VAT", items: ["Everything in Digital", "Quality handmade 50-page (100 side) album", "Designed with your selection of photographs"], featured: true },
  { name: "Digital Album", price: "€1,800", note: "+ VAT · 10×10\"", items: ["Everything in Digital", "Modern hardbound digital wedding book", "80-page leather book, individually designed", "12×12\" option: €1,950 + VAT"] },
];

function Packages() {
  return (
    <section id="packages" className="relative py-28 md:py-36">
      <img src={packagesPhoto} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-overlay/80" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center text-on-overlay">
          <p className="wedding-eyebrow text-gold">Packages</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Tailored to your day</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((item) => (
            <article key={item.name} className={`flex flex-col bg-card p-10 text-card-foreground ${item.featured ? "outline outline-1 outline-offset-[-12px] outline-gold" : ""}`}>
              <p className="wedding-eyebrow text-muted-foreground">{item.name}</p>
              <p className="mt-6 font-display text-6xl">{item.price}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
              <ul className="mt-8 space-y-3 border-t border-border pt-8">
                {item.items.map((detail) => <li key={detail} className="flex gap-3"><span className="text-gold">—</span>{detail}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2 md:py-36">
      <div>
        <p className="wedding-eyebrow text-gold">Contact</p>
        <h2 className="mt-4 text-4xl leading-tight md:text-6xl">Let's tell <em>your</em> story</h2>
        <p className="mt-6 text-lg text-muted-foreground">I'd love to hear about your plans. Send me a message and let's talk about your day.</p>
        <a href="mailto:mmirabelli@mmimages.com" className="mt-8 block break-all font-display text-2xl italic underline decoration-gold underline-offset-8 hover:text-gold md:text-3xl">mmirabelli@mmimages.com</a>
        <a href="tel:+35679499584" className="mt-5 block font-display text-2xl italic hover:text-gold md:text-3xl">+356 7949 9584</a>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="mailto:mmirabelli@mmimages.com" className="wedding-eyebrow bg-gold px-8 py-4 text-accent-foreground transition hover:bg-primary hover:text-primary-foreground">Email me</a>
          <a href="https://www.facebook.com/MatthewMirabelliPhotography/" target="_blank" rel="noreferrer" className="wedding-eyebrow bg-primary px-8 py-4 text-primary-foreground transition hover:bg-gold hover:text-accent-foreground">Facebook</a>
          <a href="https://www.instagram.com/mmirabelli/" target="_blank" rel="noreferrer" className="wedding-eyebrow border border-foreground px-8 py-4 transition hover:bg-foreground hover:text-background">Instagram</a>
        </div>
        <p className="mt-20 text-sm text-muted-foreground">© Matthew Mirabelli {new Date().getFullYear()}</p>
      </div>
      <img src={contactPhoto} alt="Newlyweds photographed by Matthew Mirabelli" className="aspect-[4/5] w-full object-cover" loading="lazy" />
    </section>
  );
}
