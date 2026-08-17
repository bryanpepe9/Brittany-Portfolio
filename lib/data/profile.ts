import type { SocialLink } from "@/lib/types";

export const profile = {
  name: "Brittany Pepe",
  firstName: "Brittany",
  role: "Brand Manager & Digital Marketing Professional",
  shortRole: "Brand Manager",
  currentCompany: "Careaga Plastic Surgery",
  location: "Miami, Florida",
  locationShort: "Miami, FL",
  email: "brittanychenpepe@gmail.com",
  linkedin: "https://www.linkedin.com/in/brittany-pepe",

  /**
   * Résumé link is opt-in. Drop a PDF at `public/brittany-pepe-resume.pdf`
   * and set this to "/brittany-pepe-resume.pdf" — the hero and footer links
   * appear automatically. Left null so the site never ships a dead link.
   */
  resumeHref: null as string | null,

  /**
   * Portrait used in the About section. Set to null to drop it — the layout
   * collapses to a single column without any markup change.
   */
  portrait: {
    src: "/brittany-pepe.jpg",
    alt: "Portrait of Brittany Pepe",
    width: 1501,
    height: 2000,
  } as { src: string; alt: string; width: number; height: number } | null,

  /** The four disciplines that run across the hero index strip. */
  disciplines: [
    "Brand Strategy",
    "Digital Marketing",
    "Content Strategy",
    "Social Media",
  ],

  heroStatement: "Building brands people notice, remember, and connect with.",

  positioning:
    "I work where brand, culture, and consumer behavior overlap — turning strategy into work people actually want to engage with.",

  about: [
    "I’m a brand and digital marketing professional based in Miami. Right now I’m Brand Manager at Careaga Plastic Surgery, working across social, digital, promotional, and patient-facing channels to keep the brand consistent and the content deliberate.",
    "Before that I worked across beauty, travel, healthcare, and e-commerce — including four years running an online high-end second-hand store, which taught me more about positioning, pricing, and what makes someone actually buy than any lecture could.",
    "What interests me is the gap between strategy and execution: the point where a positioning document becomes something a person stops scrolling for. I pay attention to the details — tone, timing, typography, and the difference between content that fills a calendar and content that earns attention.",
  ],

  contactHeadline: "Let’s create something people remember.",

  contactNote:
    "Open to brand, digital marketing, content, and marketing strategy roles.",
} as const;

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: profile.linkedin, external: true },
  { label: "Email", href: `mailto:${profile.email}` },
];
