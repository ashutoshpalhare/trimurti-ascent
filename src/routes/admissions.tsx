import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionTitle } from "@/components/site/PageHero";
import { ArrowRight, FileText, IndianRupee, Award, ClipboardList } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2026–27 — Trimurti College" },
      { name: "description", content: "Apply online for admissions at Trimurti College. Eligibility, fee structure and scholarships." },
      { property: "og:title", content: "Admissions 2026–27 — Trimurti College" },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  return (
    <>
      <PageHero eyebrow="Admissions 2026–27" title="Begin your journey at Trimurti." description="A simple, transparent admissions process to help you join the program that fits your ambitions." />

      <section className="container-pro py-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <SectionTitle eyebrow="How to Apply" title="A 4-step process" />
            <ol className="space-y-4">
              {[
                ["Fill the online application", "Provide basic details and select your program."],
                ["Upload documents", "Marksheets, ID proof and a recent photograph."],
                ["Pay application fee", "Secure payment via UPI, card or netbanking."],
                ["Attend counselling", "Final seat allocation based on merit and preference."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4 rounded-2xl border bg-card p-5 hover:shadow-soft transition">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full gradient-gold text-gold-foreground font-bold">{i + 1}</div>
                  <div>
                    <div className="font-display font-semibold">{t}</div>
                    <p className="text-sm text-muted-foreground mt-1">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <SectionTitle eyebrow="Fee Structure" title="Transparent and affordable" />
            <div className="overflow-hidden rounded-2xl border">
              <table className="w-full text-sm">
                <thead className="bg-secondary text-foreground">
                  <tr><th className="text-left p-4">Program</th><th className="text-right p-4">Annual Fees</th></tr>
                </thead>
                <tbody>
                  {[["Bachelor of Arts", "₹ 18,000"], ["Bachelor of Commerce", "₹ 22,000"], ["Bachelor of Science", "₹ 28,000"], ["Computer Science", "₹ 32,000"]].map(([p, f]) => (
                    <tr key={p} className="border-t bg-card">
                      <td className="p-4">{p}</td>
                      <td className="p-4 text-right font-semibold">{f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">* Indicative. Final fees subject to university norms.</p>
          </div>

          <div>
            <SectionTitle eyebrow="Scholarships" title="We support deserving students" />
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["Merit Scholarship", "Up to 50% fee waiver for top scorers."],
                ["Need-Based Aid", "Financial assistance for economically weaker students."],
                ["Sports Scholarship", "For state and national level athletes."],
                ["Government Schemes", "EBC, SC/ST/OBC scholarships supported."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border bg-card p-5 hover:shadow-soft transition">
                  <Award className="h-6 w-6 text-gold" />
                  <div className="mt-3 font-display font-semibold">{t}</div>
                  <p className="text-sm text-muted-foreground mt-1">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 h-fit space-y-4">
          <div className="rounded-3xl gradient-primary text-primary-foreground p-7 shadow-elegant">
            <ClipboardList className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-2xl font-bold">Apply Online</h3>
            <p className="text-sm text-white/80 mt-2">Start your application in minutes.</p>
            <a href="#inquiry" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-3 text-sm font-semibold hover:bg-gold hover:text-gold-foreground transition">
              Start Application <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <a href="#" className="block rounded-2xl border bg-card p-6 hover:shadow-soft transition">
            <FileText className="h-6 w-6 text-accent" />
            <div className="mt-3 font-display font-semibold">Download Prospectus</div>
            <p className="text-xs text-muted-foreground mt-1">PDF, 4.2 MB</p>
          </a>
          <div className="rounded-2xl border bg-card p-6">
            <IndianRupee className="h-6 w-6 text-gold" />
            <div className="mt-3 font-display font-semibold">Need help paying?</div>
            <p className="text-xs text-muted-foreground mt-1">Talk to our financial aid office about scholarships and EMI options.</p>
          </div>
        </aside>
      </section>

      <section id="inquiry" className="bg-secondary/40 py-20">
        <div className="container-pro max-w-3xl">
          <SectionTitle eyebrow="Online Inquiry" title="Tell us about you" />
          <form className="rounded-3xl border bg-card p-7 md:p-9 shadow-soft space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Our admissions team will contact you."); }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required maxLength={80} placeholder="Full Name" className={inputCls} />
              <input required type="tel" maxLength={15} placeholder="Phone" className={inputCls} />
            </div>
            <input required type="email" maxLength={120} placeholder="Email" className={inputCls} />
            <select required defaultValue="" className={inputCls}>
              <option value="" disabled>Interested Program</option>
              <option>Bachelor of Arts</option>
              <option>Bachelor of Commerce</option>
              <option>Bachelor of Science</option>
              <option>Computer Science</option>
            </select>
            <textarea rows={4} maxLength={500} placeholder="Message (optional)" className={inputCls} />
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-gold text-gold-foreground px-6 py-3.5 text-sm font-semibold shadow-gold">
              Submit Application <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

const inputCls = "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition";
