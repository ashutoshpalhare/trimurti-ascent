import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionTitle } from "@/components/site/PageHero";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Trimurti College" },
      { name: "description", content: "Get in touch with Trimurti College — address, phone, email and location map." },
      { property: "og:title", content: "Contact Us — Trimurti College" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="We'd love to hear from you." description="For admissions, academic queries or to schedule a campus tour." />
      <section className="container-pro py-20 grid lg:grid-cols-2 gap-10">
        <div>
          <SectionTitle eyebrow="Reach Us" title="Visit, call or write" />
          <div className="space-y-5">
            {[
              { icon: MapPin, t: "Address", d: "College Road, Maharashtra, India 422 001" },
              { icon: Phone, t: "Phone", d: "+91 98765 43210" },
              { icon: Mail, t: "Email", d: "info@trimurticollege.edu.in" },
              { icon: Clock, t: "Office Hours", d: "Mon – Sat • 9:00 AM – 5:00 PM" },
            ].map((c) => (
              <div key={c.t} className="flex items-start gap-4 rounded-2xl border bg-card p-5">
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
          <div className="mt-6 aspect-[16/10] overflow-hidden rounded-2xl border">
            <iframe
              title="College location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.7%2C19.99%2C73.85%2C20.05&layer=mapnik"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        <form className="rounded-3xl border bg-card p-7 md:p-9 shadow-soft space-y-4 h-fit" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }}>
          <h3 className="font-display text-2xl font-bold">Send a Message</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <input required maxLength={80} placeholder="Full Name" className={inputCls} />
            <input required type="tel" maxLength={15} placeholder="Phone" className={inputCls} />
          </div>
          <input required type="email" maxLength={120} placeholder="Email" className={inputCls} />
          <input required maxLength={120} placeholder="Subject" className={inputCls} />
          <textarea required rows={5} maxLength={500} placeholder="Your message" className={inputCls} />
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold">
            Send Message <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </section>
    </>
  );
}

const inputCls = "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition";
