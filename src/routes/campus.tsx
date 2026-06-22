import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionTitle } from "@/components/site/PageHero";
import gLab from "@/assets/gallery-lab.jpg";
import gLibrary from "@/assets/gallery-library.jpg";
import gCultural from "@/assets/gallery-cultural.jpg";
import gSports from "@/assets/gallery-sports.jpg";
import gNss from "@/assets/gallery-nss.jpg";
import gComputer from "@/assets/gallery-computer.jpg";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "Campus Life — Trimurti College" },
      { name: "description", content: "Library, laboratories, sports, NSS, cultural events and student clubs at Trimurti College." },
      { property: "og:title", content: "Campus Life — Trimurti College" },
      { property: "og:url", content: "/campus" },
    ],
    links: [{ rel: "canonical", href: "/campus" }],
  }),
  component: CampusPage,
});

const items = [
  { id: "library", title: "Central Library", img: gLibrary, desc: "30,000+ books, journals, periodicals and access to digital research databases." },
  { id: "labs", title: "Modern Laboratories", img: gLab, desc: "Fully equipped Physics, Chemistry, Botany, Zoology and Computer Science labs." },
  { id: "sports", title: "Sports Facilities", img: gSports, desc: "Cricket ground, basketball court, athletics and indoor games for an active campus life." },
  { id: "nss", title: "NSS & Outreach", img: gNss, desc: "Community service, awareness drives and volunteer activities throughout the year." },
  { id: "cultural", title: "Cultural Events", img: gCultural, desc: "Spandan, our annual fest, plus year-round music, dance and dramatics." },
  { id: "computer", title: "Smart Classrooms", img: gComputer, desc: "Digital classrooms with interactive boards and modern AV systems." },
];

function CampusPage() {
  return (
    <>
      <PageHero eyebrow="Campus Life" title="A campus that's alive with possibility." description="From state-of-the-art labs to vibrant cultural events — discover what makes Trimurti special." />

      <section id="gallery" className="container-pro py-20">
        <SectionTitle eyebrow="Facilities & Activities" title="Explore the campus" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <article id={it.id} key={it.id} className="group rounded-2xl overflow-hidden border bg-card hover:shadow-elegant transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
