import { profile } from "@/lib/data/profile";
import { siteIndex } from "@/lib/data/navigation";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Positioning() {
  return (
    <section
      id="index"
      aria-labelledby="index-heading"
      className="scroll-mt-24 py-24 md:py-36"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="label">Positioning</span>
            </Reveal>
            <AnimatedText
              text={profile.positioning}
              as="p"
              className="mt-8 font-display text-display-lg text-ink"
            />
          </div>

          <nav aria-labelledby="index-heading" className="lg:col-span-4 lg:col-start-9">
            <Reveal>
              <h2 id="index-heading" className="label border-t border-stone/50 pt-5">
                Index
              </h2>
              <ol className="mt-6 flex flex-col">
                {siteIndex.map((entry) => (
                  <li key={entry.href} className="border-b border-stone/40">
                    <a
                      href={entry.href}
                      className="group flex items-baseline gap-5 py-3.5 text-ink"
                    >
                      <span className="label">{entry.index}</span>
                      <span className="link-underline text-lede leading-tight">
                        {entry.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </Reveal>
          </nav>
        </div>
      </Container>
    </section>
  );
}
