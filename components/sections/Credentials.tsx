import { education, languages } from "@/lib/data/education";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Credentials() {
  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      className="scroll-mt-24 py-24 md:py-36"
    >
      <Container>
        <SectionHeading
          id="credentials-heading"
          label="Education & Languages"
          title="Credentials"
          index="05 / 06"
          className="max-w-3xl"
        />

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <h3 className="label border-t border-stone/50 pt-5 text-ink">Education</h3>

            <p className="mt-7 font-display text-display-md leading-none text-ink">
              {education.institution}
            </p>

            <p className="mt-5 max-w-[44ch] text-lede text-ink">
              {education.degree}, {education.year} — {education.field}
            </p>

            <p className="label mt-4">
              {education.concentration
                ? `Concentration in ${education.concentration} · `
                : ""}
              {education.location}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.08}>
            <h3 className="label border-t border-stone/50 pt-5 text-ink">Languages</h3>

            <dl className="mt-4">
              {languages.map((language) => (
                <div
                  key={language.language}
                  className="flex items-baseline justify-between gap-6 border-b border-stone/40 py-3.5"
                >
                  <dt className="text-lede text-ink">{language.language}</dt>
                  <dd className="label text-right">{language.level}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
