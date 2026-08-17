import { capabilityGroups, toolsAndPlatforms } from "@/lib/data/capabilities";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="scroll-mt-24 py-24 md:py-36"
    >
      <Container>
        <SectionHeading
          id="capabilities-heading"
          label="Capabilities"
          title="The toolkit"
          index="02 / 06"
          className="max-w-3xl"
        />

        <div className="mt-20 grid gap-x-16 gap-y-14 md:grid-cols-3 lg:mt-28">
          {capabilityGroups.map((group, groupIndex) => (
            <Reveal key={group.id} delay={groupIndex * 0.08}>
              <h3 className="label border-t border-stone/50 pt-5 text-ink">{group.label}</h3>
              <ol className="mt-4">
                {group.items.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 border-b border-stone/40 py-3.5"
                  >
                    <span className="label">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lede leading-snug text-ink">{item}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 lg:mt-28">
          <Reveal>
            <h3 className="label border-t border-stone/50 pt-5 text-ink">
              Tools &amp; Platforms
            </h3>
          </Reveal>
          <Marquee
            items={toolsAndPlatforms}
            distance={26}
            className="mt-8"
            itemClassName="font-display text-display-md leading-none text-ink"
          />
        </div>
      </Container>
    </section>
  );
}
