import { profile } from "@/lib/data/profile";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-between pt-28 pb-8 md:pt-32">
      <Container className="flex flex-1 flex-col justify-center">
        {/* Identity first: the h1 is the name alone, which is also the right
            h1 for a personal site. The positioning line follows as its own
            paragraph rather than competing inside the heading. */}
        <div className="flex items-center gap-5">
          <span className="label whitespace-nowrap text-ink">{profile.shortRole}</span>
          <span className="h-px flex-1 bg-stone/60" aria-hidden="true" />
          <span className="label hidden whitespace-nowrap sm:block">{profile.location}</span>
        </div>

        <h1 className="mt-7 md:mt-9">
          <AnimatedText
            text={profile.name}
            className="font-display text-display-name text-ink"
            animateOnMount
            delay={0.1}
            stagger={0.07}
          />
        </h1>

        <AnimatedText
          as="p"
          text={profile.heroStatement}
          className="mt-7 max-w-[26ch] font-display text-display-md text-ink md:mt-9"
          animateOnMount
          delay={0.42}
        />

        <Reveal delay={0.55} className="mt-12 flex flex-col gap-10 md:mt-16">
          {/* Splits at lg, not md: at tablet widths the two CTAs and the role
              line compete for the same row and the buttons wrap raggedly. */}
          <div className="flex flex-col gap-8 border-t border-stone/50 pt-6 lg:flex-row lg:items-start lg:justify-between">
            <p className="max-w-[36ch] text-lede text-muted">
              {profile.role}, based in {profile.location}.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton
                href="#work"
                className="border border-ink bg-ink text-ivory hover:bg-transparent hover:text-ink"
              >
                Selected Work
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </MagneticButton>

              <MagneticButton
                href="#contact"
                className="border border-stone/70 text-ink hover:border-ink"
              >
                Let&rsquo;s Connect
              </MagneticButton>
            </div>
          </div>

          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline label text-ink"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="link-underline label text-ink">
                Email
              </a>
            </li>
            {profile.resumeHref ? (
              <li>
                <a
                  href={profile.resumeHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline label text-ink"
                >
                  Résumé
                </a>
              </li>
            ) : null}
          </ul>
        </Reveal>
      </Container>

      {/* Discipline index — drifts horizontally as the page is scrolled. */}
      <div className="mt-14 border-t border-stone/50 pt-5">
        <Container>
          <Marquee
            items={profile.disciplines}
            distance={22}
            itemClassName="font-display text-xl italic text-muted md:text-2xl"
          />
        </Container>
      </div>
    </section>
  );
}
