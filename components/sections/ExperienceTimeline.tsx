import { experience } from "@/lib/data/experience";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/sections/ExperienceCard";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 py-24 md:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionHeading
            id="experience-heading"
            label="Experience"
            title="Career to date"
            index="03 / 06"
            className="lg:col-span-6"
          />
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="max-w-[48ch] text-lede text-muted">
              Six roles across healthcare, beauty, travel, and e-commerce — from
              running a store single-handed to managing a brand.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 lg:mt-24">
          {experience.map((role) => (
            <ExperienceCard key={role.id} role={role} />
          ))}
        </ol>
      </Container>
    </section>
  );
}
