import { createFileRoute, Link } from "@tanstack/react-router";
import { hero, press, sports, interiors } from "@/lib/photos";

const HERO = hero.home;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matthew Mirabelli — Photographer, Malta" },
      { name: "description", content: "Award-winning Maltese photojournalist. Press, sports, interiors and wedding photography by Matthew Mirabelli." },
      { property: "og:title", content: "Matthew Mirabelli — Photographer, Malta" },
      { property: "og:description", content: "Press, sports, interiors and weddings by an award-winning Maltese photojournalist." },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Index,
});

const sections = [
  { to: "/press", n: "01", label: "Press", img: press[0]?.full },
  { to: "/sports", n: "02", label: "Sports", img: sports[0]?.full },
  { to: "/interiors", n: "03", label: "Interiors", img: interiors[0]?.full },
] as const;

function Index() {
  return (
    <main>
      <section className="relative flex h-screen min-h-[600px] items-end overflow-hidden">
        <img src={HERO} alt="Photograph by Matthew Mirabelli" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-scrim" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16">
          <p className="eyebrow mb-6 animate-rise">Photojournalist · Times of Malta</p>
          <h1 className="max-w-5xl text-6xl leading-[0.95] animate-rise md:text-9xl">
            Matthew <em className="text-primary">Mirabelli</em>
          </h1>
          <p className="mt-6 max-w-md text-muted-foreground animate-rise">
            Press & Sports Photographer of the Year. Pictures from Malta and beyond since 1999.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow mb-10">Selected work</p>
        <div className="grid gap-4 md:grid-cols-3">
          {sections.map((s) => (
            <Link key={s.to} to={s.to} className="group relative block aspect-[3/4] overflow-hidden bg-card">
              <img src={s.img} alt={s.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-scrim" />
              <div className="absolute bottom-0 flex w-full items-end justify-between p-6">
                <h2 className="text-5xl">{s.label}</h2>
                <span className="eyebrow group-hover:text-primary">{s.n} →</span>
              </div>
            </Link>
          ))}
        </div>
        <a href="https://weddings.mmimages.com/" target="_blank" rel="noreferrer" className="group mt-4 flex items-center justify-between border border-border px-6 py-8 transition-colors hover:border-primary">
          <span className="font-display text-4xl md:text-5xl">Weddings</span>
          <span className="eyebrow group-hover:text-primary">Visit wedding portfolio ↗</span>
        </a>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
          <h2 className="text-4xl leading-tight md:text-6xl">From Kosovo to the kitesurf beach — two decades behind the lens.</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>Born in Malta in 1975, I began as a photojournalist with The People and the Malta Independent, covering assignments including the war in Kosovo. Since 2005 I've been a staff photographer at The Times of Malta.</p>
            <p>In 2010 I became the first photographer to win both the Press and Sports Photographer of the Year awards in the same year.</p>
            <Link to="/biography" className="eyebrow inline-block text-primary! hover:underline">Read biography →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
