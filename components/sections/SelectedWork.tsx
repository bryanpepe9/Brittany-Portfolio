import { workAreas } from "@/lib/data/work";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCard } from "@/components/sections/WorkCard";

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 py-24 md:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionHeading
            id="work-heading"
            label="Selected Work"
            title="Areas of work"
            index="01 / 06"
            className="lg:col-span-6"
          />
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="max-w-[48ch] text-lede text-muted">
              Six disciplines I work in, and the roles where each one was
              practised. Case studies follow as projects become publishable.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-x-16 gap-y-20 lg:mt-28 lg:grid-cols-2 lg:gap-y-8">
          {workAreas.map((area, index) => {
            /* Alternating vertical offset gives the grid an editorial rhythm
               instead of a uniform card wall — but the final row resolves
               flush, so the stagger doesn't leave a column of dead space
               hanging off the bottom of the section. */
            const inLastRow = index >= workAreas.length - 2;
            const offset = index % 2 === 1 && !inLastRow;

            return (
              <Reveal key={area.id} className={offset ? "lg:mt-36" : undefined}>
                <WorkCard area={area} />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
