import { profile } from "@/lib/data/profile";
import { Container } from "@/components/ui/Container";
import { MaskedImage } from "@/components/ui/MaskedImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const details = [
  { term: "Currently", detail: `${profile.shortRole}, ${profile.currentCompany}` },
  { term: "Based in", detail: profile.location },
  { term: "Focus", detail: "Brand, content, and digital growth" },
  { term: "Industries", detail: "Healthcare · Beauty · Travel · E-Commerce" },
];

export function About() {
  const { portrait } = profile;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 py-24 md:py-36"
    >
      <Container>
        <SectionHeading
          id="about-heading"
          label="About"
          title="Brand, culture, and the work in between."
          index="04 / 06"
          className="max-w-3xl"
        />

        {/*
          Explicit row/column placement rather than DOM order, so the reading
          order stays heading → portrait → prose → details on mobile while
          desktop puts the portrait left with the prose beside it and the
          detail list tucked underneath.
        */}
        <div className="mt-14 grid gap-x-16 gap-y-12 lg:mt-20 lg:grid-cols-12">
          {portrait ? (
            <MaskedImage
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              /* The frame is 5 of 12 columns inside a 1680px-max container,
                 so past that width it stops growing — 40vw would keep
                 requesting larger files for no gain. */
              sizes="(min-width: 1680px) 620px, (min-width: 1024px) 40vw, 100vw"
              className="aspect-3/4 w-full lg:col-span-5 lg:col-start-1 lg:row-start-1"
            />
          ) : null}

          <div className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7 lg:row-start-1">
            {profile.about.map((paragraph, index) => (
              <Reveal
                key={paragraph.slice(0, 24)}
                as="p"
                delay={index * 0.06}
                className="max-w-[58ch] text-lede text-muted"
              >
                {paragraph}
              </Reveal>
            ))}
          </div>

          <Reveal className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <dl className="flex flex-col">
              {details.map((item) => (
                <div
                  key={item.term}
                  className="flex flex-col gap-2 border-t border-stone/50 py-5"
                >
                  <dt className="label">{item.term}</dt>
                  <dd className="text-lede leading-snug text-ink">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
