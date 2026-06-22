import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionTitle } from "@/components/site/PageHero";
import { BookOpen, Briefcase, FlaskConical, Cpu, Check } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses Offered — Trimurti College" },
      { name: "description", content: "Explore UG programs in Arts, Commerce, Science and Computer Science at Trimurti College." },
      { property: "og:title", content: "Courses Offered — Trimurti College" },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

const departments = [
  {
    id: "arts", icon: BookOpen, name: "Arts Department", duration: "3 Years", eligibility: "10+2 from any stream",
    desc: "A vibrant department exploring literature, history, sociology, political science and language studies.",
    subjects: ["English Literature", "History", "Political Science", "Sociology", "Marathi", "Economics"],
  },
  {
    id: "commerce", icon: Briefcase, name: "Commerce Department", duration: "3 Years", eligibility: "10+2 with Commerce / any stream",
    desc: "Industry-aligned commerce education preparing students for CA, CS, MBA and corporate careers.",
    subjects: ["Financial Accounting", "Business Law", "Economics", "Marketing", "Income Tax", "Auditing"],
  },
  {
    id: "science", icon: FlaskConical, name: "Science Department", duration: "3 Years", eligibility: "10+2 with Science (PCM/PCB)",
    desc: "Rigorous science programs with modern laboratories and a strong research orientation.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Botany", "Zoology", "Statistics"],
  },
  {
    id: "cs", icon: Cpu, name: "Computer Science", duration: "3 Years", eligibility: "10+2 with Mathematics",
    desc: "Programming, web development, data structures, databases and emerging tech for the digital era.",
    subjects: ["Programming (C/C++/Python)", "Data Structures", "Web Development", "DBMS", "Operating Systems", "Networking"],
  },
];

function CoursesPage() {
  return (
    <>
      <PageHero eyebrow="Academics" title="Programs designed for tomorrow." description="Four undergraduate streams led by experienced faculty and modern infrastructure." />
      <section className="container-pro py-20 space-y-12">
        {departments.map((d, i) => (
          <article id={d.id} key={d.id} className={`grid lg:grid-cols-5 gap-8 items-center rounded-3xl border bg-card p-6 md:p-10 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="lg:col-span-2">
              <div className="grid h-16 w-16 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft">
                <d.icon className="h-8 w-8" />
              </div>
              <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold">{d.name}</h2>
              <p className="mt-3 text-muted-foreground">{d.desc}</p>
              <dl className="mt-5 space-y-1.5 text-sm">
                <div className="flex justify-between border-b py-2"><dt className="text-muted-foreground">Duration</dt><dd className="font-semibold">{d.duration}</dd></div>
                <div className="flex justify-between gap-3 py-2"><dt className="text-muted-foreground">Eligibility</dt><dd className="font-semibold text-right">{d.eligibility}</dd></div>
              </dl>
            </div>
            <div className="lg:col-span-3">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Subjects Offered</div>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {d.subjects.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-gold/20 text-gold">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
