import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/Gallery";
import { interiors } from "@/lib/photos";

export const Route = createFileRoute("/interiors")({
  head: () => ({
    meta: [
      { title: "Interiors Photography — Matthew Mirabelli" },
      { name: "description", content: "Interiors and architecture photography in Malta by Matthew Mirabelli." },
      { property: "og:title", content: "Interiors Photography — Matthew Mirabelli" },
      { property: "og:description", content: "Interiors and architecture photography in Malta by Matthew Mirabelli." },
    ],
  }),
  component: () => <Gallery title="Interiors" index="03" intro="Interiors and architecture photography in Malta by Matthew Mirabelli." photos={interiors} />,
});
