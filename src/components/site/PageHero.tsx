import { createFileRoute, Link } from "@tanstack/react-router";
import { ReactNode } from "react";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <section className="relative gradient-primary text-primary-foreground overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
      <div className="container-pro relative py-20 md:py-28">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</div>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold leading-tight text-white max-w-3xl">{title}</h1>
        {description && <p className="mt-5 text-white/85 max-w-2xl">{description}</p>}
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-2xl mb-10">
      {eyebrow && <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</div>}
      <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">{title}</h2>
      {children && <p className="mt-4 text-muted-foreground">{children}</p>}
    </div>
  );
}

// Placeholder so this file is a valid module to import by routes if needed
export const _ph = createFileRoute;
export const _ln = Link;
