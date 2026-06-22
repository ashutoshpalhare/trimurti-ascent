import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, BookOpen, Briefcase, FlaskConical, Cpu, Users, Library, Trophy,
  GraduationCap, Wifi, Award, Sparkles, ChevronRight, Calendar, Quote, MapPin,
  Phone, Mail, ShieldCheck, BadgeCheck, Building2,
} from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import aboutCampus from "@/assets/about-campus.jpg";
import principalImg from "@/assets/principal.jpg";
import gLab from "@/assets/gallery-lab.jpg";
import gLibrary from "@/assets/gallery-library.jpg";
import gCultural from "@/assets/gallery-cultural.jpg";
import gSports from "@/assets/gallery-sports.jpg";
import gNss from "@/assets/gallery-nss.jpg";
import gComputer from "@/assets/gallery-computer.jpg";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trimurti Arts, Commerce & Science College — Empowering Minds. Building Futures." },
      { name: "description", content: "Premier institution offering UG programs in Arts, Commerce, Science & Computer Science. Apply now for 2026–27 admissions." },
      { property: "og:title", content: "Trimurti Arts, Commerce & Science College" },
      { property: "og:description", content: "Empowering Minds. Building Futures." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const programs = [
  { icon: BookOpen, title: "Bachelor of Arts", desc: "Explore literature, history, sociology and political science through a holistic, research-oriented curriculum.", duration: "3 Years", eligibility: "10+2 from any stream", color: "from-rose-500/15 to-amber-500/10" },
  { icon: Briefcase, title: "Bachelor of Commerce", desc: "Build a strong foundation in accounting, finance, business and economics aligned to industry needs.", duration: "3 Years", eligibility: "10+2 with Commerce / any stream", color: "from-emerald-500/15 to-teal-500/10" },
  { icon: FlaskConical, title: "Bachelor of Science", desc: "Hands-on lab work across Physics, Chemistry, Botany and Mathematics with modern instrumentation.", duration: "3 Years", eligibility: "10+2 with Science (PCM/PCB)", color: "from-sky-500/15 to-indigo-500/10" },
  { icon: Cpu, title: "Computer Science", desc: "Programming, data structures, web development and AI fundamentals delivered by experienced faculty.", duration: "3 Years", eligibility: "10+2 with Mathematics", color: "from-violet-500/15 to-fuchsia-500/10" },
];

const features = [
  { icon: Users, title: "Experienced Faculty", desc: "PhD and post-graduate experts mentoring every student." },
  { icon: FlaskConical, title: "Modern Laboratories", desc: "Fully equipped labs for science and computing." },
  { icon: Library, title: "Library Facilities", desc: "30,000+ books, journals and e-resources." },
  { icon: Briefcase, title: "Placement Guidance", desc: "Dedicated cell with industry tie-ups." },
  { icon: Award, title: "Scholarships", desc: "Merit and need-based financial support." },
  { icon: Trophy, title: "Sports Facilities", desc: "Cricket, basketball, athletics and indoor games." },
  { icon: GraduationCap, title: "Student Development", desc: "Soft-skills, leadership and personality programs." },
  { icon: Wifi, title: "Digital Learning", desc: "Smart classrooms and online study portal." },
];

const gallery = [
  { src: gLab, alt: "Science laboratory", cat: "Laboratories", h: "row-span-2" },
  { src: gLibrary, alt: "Library", cat: "Library", h: "" },
  { src: gCultural, alt: "Cultural event", cat: "Cultural", h: "row-span-2" },
  { src: gSports, alt: "Sports", cat: "Sports", h: "" },
  { src: gNss, alt: "NSS volunteer", cat: "NSS", h: "" },
  { src: gComputer, alt: "Computer lab", cat: "Academics", h: "" },
];

const news = [
  { date: "Mar 18", cat: "Admissions", title: "Admissions open for academic year 2026–27", img: gComputer },
  { date: "Feb 24", cat: "Events", title: "Annual Cultural Fest 'Spandan' concludes with grand success", img: gCultural },
  { date: "Jan 30", cat: "Achievements", title: "B.Sc students bag top 3 ranks at university level", img: gLab },
];

const testimonials = [
  { name: "Priya Sharma", role: "B.Com Alumna, 2023", quote: "Trimurti gave me both knowledge and confidence. The faculty's mentorship helped me clear my CA Foundation in the first attempt." },
  { name: "Rahul Patil", role: "B.Sc Computer Science", quote: "Modern labs, supportive professors and a vibrant campus — the perfect environment to grow as a developer." },
  { name: "Mrs. Anjali Deshmukh", role: "Parent", quote: "The college genuinely cares about each student's progress. We are proud to be part of the Trimurti family." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroCampus}
            alt="Trimurti College campus at golden hour"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/40" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_20%,oklch(0.78_0.16_82/0.18),transparent)]" />
        </div>

        <div className="container-pro pt-20 pb-24 md:pt-32 md:pb-40 text-primary-foreground">
          <div className="max-w-3xl animate-float-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs md:text-sm font-medium text-white">
              <Sparkles className="h-4 w-4 text-gold" />
              Admissions Open 2026–27
            </div>
            <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white">
              Empowering Minds. <br />
              <span className="text-gradient-gold">Building Futures.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
              Providing quality education in Arts, Commerce, Science and Computer Science with a
              commitment to academic excellence and holistic development.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-[1.02] transition"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition"
              >
                Explore Courses
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
              {[
                { icon: BadgeCheck, label: "Affiliated Institution" },
                { icon: Users, label: "Experienced Faculty" },
                { icon: Building2, label: "Modern Infrastructure" },
                { icon: ShieldCheck, label: "Student Support" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-xs md:text-sm text-white/85">
                  <t.icon className="h-4 w-4 shrink-0 text-gold" />
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative -mt-14 md:-mt-20 z-10">
        <div className="container-pro">
          <div className="rounded-3xl bg-card shadow-elegant border p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: 1500, s: "+", l: "Students" },
              { v: 50, s: "+", l: "Faculty Members" },
              { v: 95, s: "%", l: "Results" },
              { v: 20, s: "+", l: "Years of Excellence" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl md:text-5xl font-bold text-primary">
                  <Counter value={s.v} suffix={s.s} />
                </div>
                <div className="mt-1 text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-pro py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={aboutCampus} alt="College building" loading="lazy" className="rounded-3xl shadow-elegant w-full" />
          <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-card border shadow-elegant p-5 w-56">
            <div className="text-3xl font-bold text-primary font-display">2002</div>
            <div className="text-xs text-muted-foreground mt-1">Established with a vision to deliver accessible, world-class education.</div>
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About the College</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight">
            A legacy of <span className="text-gradient-gold">academic excellence</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Trimurti Arts, Commerce & Science College is dedicated to nurturing the intellectual,
            ethical and social development of students. With state-of-the-art infrastructure and
            a faculty of distinguished educators, we prepare students to lead in their chosen fields.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { t: "Mission", d: "Quality, accessible education that transforms lives." },
              { t: "Vision", d: "A center of academic excellence and innovation." },
              { t: "Values", d: "Integrity, inclusivity, curiosity and excellence." },
            ].map((b) => (
              <div key={b.t} className="rounded-xl border bg-card p-4 hover:shadow-soft transition">
                <div className="font-display font-semibold text-primary">{b.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Learn more about us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-pro">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Academic Programs</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">Choose your path</h2>
            <p className="mt-4 text-muted-foreground">Four distinguished undergraduate streams designed to prepare you for tomorrow.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <div key={p.title} className={`group relative overflow-hidden rounded-2xl border bg-card p-6 hover:shadow-elegant transition hover:-translate-y-1`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition`} />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-soft">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <dl className="mt-5 space-y-1.5 text-xs">
                    <div className="flex justify-between"><dt className="text-muted-foreground">Duration</dt><dd className="font-semibold">{p.duration}</dd></div>
                    <div className="flex justify-between gap-2"><dt className="text-muted-foreground shrink-0">Eligibility</dt><dd className="font-semibold text-right">{p.eligibility}</dd></div>
                  </dl>
                  <a href="/courses" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all">
                    Learn More <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container-pro py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why Choose Us</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">Everything you need to succeed</h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border bg-card p-6 hover:border-gold hover:shadow-soft transition group">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary group-hover:gradient-gold group-hover:text-gold-foreground transition">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRINCIPAL MESSAGE */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="container-pro grid lg:grid-cols-5 gap-12 items-center relative">
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img src={principalImg} alt="Principal" loading="lazy" className="w-full object-cover" />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                <div className="text-white font-display font-semibold">Dr. Rajesh Kulkarni</div>
                <div className="text-xs text-white/80">Principal</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <Quote className="h-10 w-10 text-gold" />
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mt-4">Principal's Message</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight">
              Education is the foundation of a better tomorrow.
            </h2>
            <p className="mt-5 text-white/85 leading-relaxed">
              At Trimurti College, we believe in the transformative power of education. Our
              commitment goes beyond academics — we shape ethical, capable citizens prepared to
              lead. Together with our dedicated faculty, we strive to create an environment where
              every student can flourish.
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-gold hover:text-gold-foreground transition">
              Read Full Message <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CAMPUS LIFE */}
      <section className="container-pro py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Campus Life</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">Beyond the classroom</h2>
          </div>
          <Link to="/campus" className="text-sm font-semibold text-accent inline-flex items-center gap-1 hover:gap-2 transition-all">
            View Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-4">
          {gallery.map((g, i) => (
            <figure key={i} className={`relative overflow-hidden rounded-2xl group ${g.h}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <div className="text-white">
                  <div className="text-xs uppercase tracking-wider text-gold">{g.cat}</div>
                  <div className="font-display font-semibold">{g.alt}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PLACEMENTS */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-pro">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Placements & Careers</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">Career-ready, day one</h2>
          </div>
          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {[
                { t: "Career Guidance", d: "1:1 mentoring with industry advisors." },
                { t: "Resume Workshops", d: "ATS-ready resumes and cover letters." },
                { t: "Industry Interaction", d: "Guest lectures and corporate visits." },
                { t: "Internship Support", d: "Curated internship opportunities." },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl bg-card border p-6 hover:shadow-soft transition">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-display font-semibold">{c.t}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl gradient-primary text-primary-foreground p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-gold">Success Metrics</div>
                <h3 className="mt-2 font-display text-2xl font-bold">Where our graduates go</h3>
              </div>
              <dl className="mt-6 space-y-5">
                {[["85%", "Placement rate"], ["120+", "Recruiting partners"], ["₹6.2 LPA", "Average package"]].map(([k, v]) => (
                  <div key={v} className="flex items-end justify-between border-b border-white/15 pb-3">
                    <dt className="text-sm text-white/80">{v}</dt>
                    <dd className="font-display text-2xl font-bold text-gold">{k}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="container-pro py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Achievements</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">Milestones of pride</h2>
        </div>
        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {[
            { y: "2024", t: "NAAC re-accreditation", d: "Reaccredited with an excellent grade for academic quality." },
            { y: "2023", t: "University toppers", d: "5 students ranked in the top 10 across university streams." },
            { y: "2022", t: "Faculty research awards", d: "12 faculty publications in peer-reviewed journals." },
            { y: "2020", t: "Smart classrooms", d: "100% digital classrooms with interactive learning tools." },
          ].map((m, i) => (
            <div key={i} className={`relative mb-8 grid md:grid-cols-2 gap-8 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full gradient-gold text-gold-foreground font-bold text-xs shadow-gold">
                  {i + 1}
                </div>
                <div className="rounded-2xl border bg-card p-6 hover:shadow-soft transition">
                  <div className="text-gold font-display font-bold text-sm">{m.y}</div>
                  <div className="mt-1 font-display text-lg font-semibold">{m.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
                </div>
              </div>
              <div className="hidden md:block" />
            </div>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-pro">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">News & Events</div>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">What's happening</h2>
            </div>
            <a href="#" className="text-sm font-semibold text-accent inline-flex items-center gap-1 hover:gap-2 transition-all">View all <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {news.map((n) => (
              <article key={n.title} className="group rounded-2xl overflow-hidden bg-card border hover:shadow-elegant transition">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={n.img} alt="" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{n.date}</span>
                    <span className="rounded-full bg-accent/10 text-accent px-2.5 py-0.5 font-semibold">{n.cat}</span>
                  </div>
                  <h3 className="mt-3 font-display font-semibold leading-snug group-hover:text-accent transition">{n.title}</h3>
                  <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">Read More <ChevronRight className="h-4 w-4" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-pro py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Voices of Trimurti</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">Loved by students & families</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border bg-card p-7 hover:shadow-elegant transition relative">
              <Quote className="absolute top-5 right-5 h-8 w-8 text-gold/30" />
              <blockquote className="text-sm leading-relaxed text-foreground/85">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-4 border-t">
                <div className="grid h-11 w-11 place-items-center rounded-full gradient-primary text-primary-foreground font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ADMISSION CTA */}
      <section className="container-pro pb-20 md:pb-28">
        <div className="relative overflow-hidden rounded-3xl gradient-primary text-primary-foreground p-10 md:p-16">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white">
                <Sparkles className="h-4 w-4 text-gold" /> Limited Seats
              </div>
              <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold leading-tight text-white">
                Admissions Open <br />
                <span className="text-gradient-gold">2026–27</span>
              </h2>
              <p className="mt-4 text-white/85 max-w-md">
                Join a community where ambition meets opportunity. Apply online today or download our prospectus.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold">
                Apply Online <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition">
                Download Prospectus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container-pro pb-24">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Get In Touch</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">Visit our campus</h2>
            <p className="mt-4 text-muted-foreground">We'd love to hear from you. Reach out for admissions, academic queries or campus tours.</p>
            <div className="mt-8 space-y-5">
              {[
                { icon: MapPin, t: "Address", d: "College Road, Maharashtra, India 422 001" },
                { icon: Phone, t: "Phone", d: "+91 98765 43210" },
                { icon: Mail, t: "Email", d: "info@trimurticollege.edu.in" },
              ].map((c) => (
                <div key={c.t} className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-primary text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display font-semibold">{c.t}</div>
                    <div className="text-sm text-muted-foreground">{c.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl border">
              <iframe
                title="College location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=73.7%2C19.99%2C73.85%2C20.05&layer=mapnik"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <form className="rounded-3xl border bg-card p-7 md:p-9 shadow-soft space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you! We will reach out soon."); }}>
            <h3 className="font-display text-2xl font-bold">Admission Inquiry</h3>
            <p className="text-sm text-muted-foreground -mt-2">Fill the form and our team will contact you within 24 hours.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" required><input required maxLength={80} className={inputCls} placeholder="Your full name" /></Field>
              <Field label="Phone" required><input required type="tel" maxLength={15} className={inputCls} placeholder="+91" /></Field>
            </div>
            <Field label="Email" required><input required type="email" maxLength={120} className={inputCls} placeholder="you@example.com" /></Field>
            <Field label="Interested Program" required>
              <select required className={inputCls}>
                <option value="">Select a program</option>
                <option>Bachelor of Arts</option>
                <option>Bachelor of Commerce</option>
                <option>Bachelor of Science</option>
                <option>Computer Science</option>
              </select>
            </Field>
            <Field label="Message"><textarea rows={4} maxLength={500} className={inputCls} placeholder="Tell us more..." /></Field>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:opacity-95 transition">
              Submit Inquiry <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

const inputCls = "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition placeholder:text-muted-foreground";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-foreground/80">
        {label}{required && <span className="text-destructive ml-0.5">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
