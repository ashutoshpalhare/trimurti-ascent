import { Link } from "@tanstack/react-router";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-[oklch(0.18_0.04_260)] text-[oklch(0.92_0.01_250)]">
      <div className="container-pro py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl gradient-gold">
              <GraduationCap className="h-5 w-5 text-gold-foreground" />
            </div>
            <div>
              <div className="font-display font-bold">Trimurti College</div>
              <div className="text-xs text-white/60">Arts • Commerce • Science</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Empowering minds and building futures through quality education, holistic
            development and academic excellence since 2002.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              ["About Us", "/about"],
              ["Courses Offered", "/courses"],
              ["Admissions", "/admissions"],
              ["Campus Life", "/campus"],
              ["Contact", "/contact"],
            ].map(([l, t]) => (
              <li key={l}>
                <Link to={t} className="hover:text-gold transition">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Academics</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {["Arts Department", "Commerce Department", "Science Department", "Computer Science", "Library", "Scholarships"].map((l) => (
              <li key={l}><a href="#" className="hover:text-gold transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> College Road, Maharashtra, India 422 001</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> +91 98765 43210</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> info@trimurticollege.edu.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-pro py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Trimurti Arts, Commerce & Science College. All rights reserved.</p>
          <p>Designed for academic excellence.</p>
        </div>
      </div>
    </footer>
  );
}
