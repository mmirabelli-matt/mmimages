import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/Gallery";
import { press } from "@/lib/photos";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press Photography — Matthew Mirabelli" },
      { name: "description", content: "News and photojournalism from Malta and assignments abroad, by award-winning Times of Malta photographer Matthew Mirabelli." },
      { property: "og:title", content: "Press Photography — Matthew Mirabelli" },
      { property: "og:description", content: "News and photojournalism from Malta and assignments abroad, by award-winning Times of Malta photographer Matthew Mirabelli." },
    ],
  }),
  component: () => <Gallery title="Press" index="01" intro="News and photojournalism from Malta and assignments abroad, by award-winning Times of Malta photographer Matthew Mirabelli." photos={press} />,
});
