import { createFileRoute } from "@tanstack/react-router";
import { hero } from "@/lib/photos";

export const Route = createFileRoute("/biography")({
  head: () => ({
    meta: [
      { title: "Biography — Matthew Mirabelli, Maltese Photographer" },
      { name: "description", content: "Born in Malta in 1975, Matthew Mirabelli is a Times of Malta photographer and multiple Press & Sports Photographer of the Year." },
      { property: "og:title", content: "Biography — Matthew Mirabelli" },
      { property: "og:description", content: "Photojournalist, Times of Malta. Press & Sports Photographer of the Year." },
    ],
  }),
  component: Bio,
});

const awards = [
  ["Press Photographer of the Year", "2011 · 2010 · 1999"],
  ["Sports Photographer of the Year", "2011 · 2010 · 2008 · 2006"],
  ["Images Sans Frontières — Silver Medal", "‘Golden Temple’"],
  ["MPS — Honourable Mention", "‘Kosovo Music School’"],
];

function Bio() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <p className="eyebrow mb-4 animate-rise">04 — Biography</p>
      <h1 className="mb-16 max-w-4xl text-5xl leading-[1.05] animate-rise md:text-7xl">
        It began with an Incredible Hulk 35mm camera, a gift from my father.
      </h1>
      <div className="grid gap-16 lg:grid-cols-[5fr_7fr]">
        <img src={hero.bio} alt="Matthew Mirabelli" className="w-full self-start" />
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p><span className="text-foreground">Born in Malta in 1975</span>, my interest in photography began the day my father bought me an Incredible Hulk 35mm camera when I was about six years old. I have since moved on to Nikon cameras.</p>
          <p>Having completed my studies in photography, I got my first full-time job as an assistant. Shortly after, I began my career as a photojournalist with The People newspaper, before moving to the Malta Independent covering local and foreign assignments — including the first flight into Libya after the removal of sanctions, and the war in Kosovo.</p>
          <p>In 1999 I won Press Photographer of the Year and, two years later, left the island to travel, ending up in Australia working as a freelance photographer. I returned to Malta in 2002 and three years later joined <span className="text-foreground">The Times of Malta</span>, where I still work as a full-time photographer.</p>
          <p>I won Sports Photographer of the Year in 2006 and 2008, and in 2010 became the first photographer to win both the Press and Sports awards in the same year.</p>
          <p>When not shooting professionally I spend my time with my wife Alexia and daughter Amber, or on the water kitesurfing.</p>
          <div className="pt-8">
            <p className="eyebrow mb-6">Awards</p>
            <ul className="divide-y divide-border border-y border-border">
              {awards.map(([a, y]) => (
                <li key={a} className="flex flex-col justify-between gap-1 py-4 md:flex-row">
                  <span className="font-display text-2xl text-foreground">{a}</span>
                  <span className="font-mono text-sm text-primary">{y}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
