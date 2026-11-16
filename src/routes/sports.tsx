import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/Gallery";
import { sports } from "@/lib/photos";

export const Route = createFileRoute("/sports")({
  head: () => ({
    meta: [
      { title: "Sports Photography — Matthew Mirabelli" },
      { name: "description", content: "Sports photography by four-time Malta Sports Photographer of the Year Matthew Mirabelli." },
      { property: "og:title", content: "Sports Photography — Matthew Mirabelli" },
      { property: "og:description", content: "Sports photography by four-time Malta Sports Photographer of the Year Matthew Mirabelli." },
    ],
  }),
  component: () => <Gallery title="Sports" index="02" intro="Sports photography by four-time Malta Sports Photographer of the Year Matthew Mirabelli." photos={sports} />,
});
