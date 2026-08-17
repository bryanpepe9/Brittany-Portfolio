import { profile } from "@/lib/data/profile";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container } from "@/components/ui/Container";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The page closes on ink rather than ivory — a single tonal inversion that
 * marks the end of the arc without introducing a colour outside the palette.
 * On this ground `stone` becomes the secondary text token; `muted` does not
 * carry enough contrast against ink.
 */
export function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-ink py-28 text-ivory md:py-44"
    >
      <Container>
        <Reveal>
          <div className="flex items-baseline justify-between gap-6 border-t border-stone/35 pt-5">
            <span className="label text-stone">Contact</span>
            <span className="label text-stone">06 / 06</span>
          </div>
        </Reveal>

        <h2 id="contact-heading" className="mt-10">
          <AnimatedText
            text={profile.contactHeadline}
            className="max-w-[16ch] font-display text-display-xl text-ivory"
          />
        </h2>

        <Reveal className="mt-16 grid gap-12 border-t border-stone/35 pt-10 md:mt-24 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <span className="label text-stone">Email</span>
            <CopyEmail email={profile.email} invert className="mt-5" />
          </div>

          <div className="flex flex-col gap-5 md:col-span-4 md:col-start-9">
            <span className="label text-stone">Elsewhere</span>
            <ArrowLink href={profile.linkedin} label="LinkedIn" external invert />
            {profile.resumeHref ? (
              <ArrowLink href={profile.resumeHref} label="Résumé" external invert />
            ) : null}
            <span className="label mt-2 text-stone">{profile.location}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-16 max-w-[52ch] text-lede text-stone">{profile.contactNote}</p>
        </Reveal>
      </Container>
    </section>
  );
}
