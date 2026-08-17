import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Capabilities } from "@/components/sections/Capabilities";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { About } from "@/components/sections/About";
import { Credentials } from "@/components/sections/Credentials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <SelectedWork />
      <Capabilities />
      <ExperienceTimeline />
      <About />
      <Credentials />
      <ContactCTA />
    </>
  );
}
