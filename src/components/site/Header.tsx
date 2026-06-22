import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";

const nav = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "About Us", to: "/about" },
      { label: "Vision & Mission", to: "/about#vision" },
      { label: "Principal's Message", to: "/about#principal" },
      { label: "Governing Body", to: "/about#governing" },
    ],
  },
  {
    label: "Academics",
    to: "/courses",
    children: [
      { label: "Courses Offered", to: "/courses" },
      { label: "Arts Department", to: "/courses#arts" },
      { label: "Commerce Department", to: "/courses#commerce" },
      { label: "Science Department", to: "/courses#science" },
      { label: "Computer Science", to: "/courses#cs" },
    ],
  },
  {
    label: "Campus",
    to: "/campus",
    children: [
      { label: "Library", to: "/campus#library" },
      { label: "Laboratories", to: "/campus#labs" },
      { label: "Sports", to: "/campus#sports" },
      { label: "NSS", to: "/campus#nss" },
      { label: "Gallery", to: "/campus#gallery" },
    ],
  },
  { label: "Admissions", to: "/admissions" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-background"
      }`}
    >
      <div className="container-pro flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <div className="grid h-10 w-10 md:h-12 md:w-12 shrink-0 place-items-center rounded-xl gradient-primary shadow-soft">
            <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
          </div>
          <div className="min-w-0">
            <div className="font-display text-sm md:text-base font-bold leading-tight truncate">
              Trimurti College
            </div>
            <div className="text-[10px] md:text-xs text-muted-foreground truncate">
              Arts • Commerce • Science
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                to={item.to}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1 rounded-md"
                activeProps={{ className: "text-primary font-semibold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </Link>
              {item.children && openMenu === item.label && (
                <div className="absolute left-0 top-full pt-2 min-w-56 animate-fade-in">
                  <div className="rounded-xl border bg-card shadow-elegant p-2">
                    {item.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.to}
                        className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/admissions"
            className="inline-flex items-center justify-center rounded-full gradient-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold hover:opacity-95 transition"
          >
            Apply Now
          </Link>
        </div>

        <button
          aria-label="Open menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background animate-fade-in">
          <div className="container-pro py-4 space-y-1">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 rounded-md text-sm font-medium hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="mt-2 block text-center rounded-full gradient-gold px-5 py-3 text-sm font-semibold text-gold-foreground"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
