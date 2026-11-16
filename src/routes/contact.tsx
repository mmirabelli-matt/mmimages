import { createFileRoute } from "@tanstack/react-router";
import { hero } from "@/lib/photos";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Matthew Mirabelli Photography, Malta" },
      { name: "description", content: "Get in touch with Malta photographer Matthew Mirabelli for press, sports and wedding commissions." },
      { property: "og:title", content: "Contact Matthew Mirabelli" },
      { property: "og:description", content: "Commission a photographer in Malta." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 pb-16 pt-32 lg:px-16">
        <p className="eyebrow mb-4">04 — Contact</p>
        <h1 className="mb-12 text-6xl md:text-8xl animate-rise">Let's make<br />a picture.</h1>
        <dl className="space-y-8">
          <div><dt className="eyebrow mb-2">Based in</dt><dd className="font-display text-3xl">Malta</dd></div>
          <div><dt className="eyebrow mb-2">Telephone</dt><dd><a href="tel:+35679499584" className="font-display text-3xl hover:text-primary">(00356) 7949 9584</a></dd></div>
          <div><dt className="eyebrow mb-2">Email</dt><dd><a href="mailto:mmirabelli@mmimages.com" className="font-display text-3xl break-all hover:text-primary">mmirabelli@mmimages.com</a></dd></div>
        </dl>
      </div>
      <img src={hero.contact} alt="Photograph by Matthew Mirabelli" className="h-full min-h-96 w-full object-cover" />
    </main>
  );
}
