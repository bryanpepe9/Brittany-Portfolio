export type Industry =
  | "Healthcare"
  | "Beauty"
  | "Travel"
  | "E-Commerce";

export type DisciplineId =
  | "brand-strategy"
  | "social-media"
  | "content-creative"
  | "seo-digital-growth"
  | "campaign-analysis"
  | "ecommerce";

/**
 * A verified, quotable result.
 *
 * Nothing in the current dataset populates this. It exists so real numbers
 * can be added as a data edit rather than a markup change — every consumer
 * renders its block conditionally and shows nothing when the array is absent
 * or empty. Do not populate with estimates.
 */
export type Metric = {
  label: string;
  value: string;
  note?: string;
};

export type ExperienceRole = {
  id: string;
  company: string;
  /** Recognisable short form, for tight metadata lines. */
  shortName: string;
  role: string;
  location?: string;
  /** ISO year-month, e.g. "2025-08". */
  start: string;
  /** ISO year-month, or null for a current role. */
  end: string | null;
  summary: string;
  contributions: string[];
  industry: Industry;
  /** Current role — rendered at the largest scale in the timeline. */
  featured?: boolean;
  metrics?: Metric[];
};

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

/**
 * The shape a WorkArea grows into once there is a publishable project
 * behind it. Adding one turns the card into a /work/[slug] detail page.
 */
export type CaseStudy = {
  slug: string;
  projectTitle: string;
  company: string;
  role: string;
  challenge: string;
  strategy: string;
  execution: string[];
  tools: string[];
  gallery: GalleryImage[];
  results?: Metric[];
};

export type WorkArea = {
  id: DisciplineId;
  index: string;
  title: string;
  excerpt: string;
  practices: string[];
  /** Ties the area back to the roles where the work actually happened. */
  relatedRoleIds: string[];
  caseStudy?: CaseStudy;
};

export type CapabilityGroup = {
  id: string;
  label: string;
  items: string[];
};

export type LanguageProficiency = {
  language: string;
  level: string;
};

export type Education = {
  institution: string;
  location: string;
  degree: string;
  field: string;
  concentration?: string;
  year: string;
};

export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};
