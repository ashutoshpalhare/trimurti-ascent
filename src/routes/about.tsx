import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionTitle } from "@/components/site/PageHero";
import aboutCampus from "@/assets/about-campus.jpg";
import principalImg from "@/assets/principal.jpg";
import { Target, Eye, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Trimurti College" },
      { name: "description", content: "Learn about Trimurti College — our vision, mission, leadership and commitment to academic excellence." },
      { property: "og:title", content: "About Us — Trimurti College" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the College"
        title="A legacy of academic excellence since 2002."
        description="Trimurti College is committed to nurturing inquisitive minds, ethical citizens and capable professionals."
      />

      <section className="container-pro py-20 grid lg:grid-cols-2 gap-12 items-center">
        <img src={aboutCampus} alt="Campus" loading="lazy" className="rounded-3xl shadow-elegant w-full" />
        <div>
          <SectionTitle eyebrow="Our Story" title="Built on values, driven by purpose">
            From a humble start in 2002, Trimurti has grown into a leading institution in the region —
            offering streams in Arts, Commerce, Science and Computer Science to over 1,500 students each year.
          </SectionTitle>
          <p className="text-muted-foreground leading-relaxed">
            Our faculty bring decades of teaching and research experience. Our infrastructure includes modern
            laboratories, a vast library, sports facilities and smart classrooms — all designed to give every
            student the best possible foundation.
          </p>
        </div>
      </section>

      <section id="vision" className="bg-secondary/40 py-20">
        <div className="container-pro grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, t: "Mission", d: "Provide accessible, quality education that empowers students with knowledge, skills and values to lead meaningful lives." },
            { icon: Eye, t: "Vision", d: "To be a center of academic excellence recognized for innovation, research and holistic student development." },
            { icon: Heart, t: "Values", d: "Integrity, inclusivity, curiosity, excellence and a deep respect for community and culture." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl bg-card border p-7">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-gold text-gold-foreground">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="principal" className="container-pro py-20 grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-2">
          <img src={principalImg} alt="Principal" loading="lazy" className="rounded-3xl shadow-elegant w-full" />
        </div>
        <div className="lg:col-span-3">
          <SectionTitle eyebrow="Principal's Message" title="A welcome from our Principal">
            Dr. Rajesh Kulkarni, Principal of Trimurti College
          </SectionTitle>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>It is my privilege to welcome you to Trimurti Arts, Commerce & Science College — a place where ambition meets opportunity and where students discover the best version of themselves.</p>
            <p>Education, in our view, is more than the transfer of information. It is the cultivation of curiosity, the practice of discipline and the development of character. Every program we offer is designed with this larger purpose in mind.</p>
            <p>Whether you are a prospective student, a parent or a partner — we look forward to walking this journey with you.</p>
          </div>
        </div>
      </section>

      <section id="governing" className="bg-secondary/40 py-20">
        <div className="container-pro">
          <SectionTitle eyebrow="Leadership" title="Governing Body" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["Mr. Suresh Patil", "Chairman"],
              ["Dr. Rajesh Kulkarni", "Principal"],
              ["Mrs. Meena Joshi", "Vice Principal"],
              ["Mr. Anil Deshmukh", "Secretary"],
            ].map(([n, r]) => (
              <div key={n} className="rounded-2xl bg-card border p-6 text-center hover:shadow-soft transition">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full gradient-primary text-primary-foreground">
                  <Users className="h-7 w-7" />
                </div>
                <div className="mt-4 font-display font-semibold">{n}</div>
                <div className="text-xs text-muted-foreground mt-1">{r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
