import type { WorkArea } from "@/lib/types";
import { experience } from "@/lib/data/experience";

/**
 * Areas of work, not case studies.
 *
 * Each entry describes practice Brittany has actually done and points back to
 * the roles where she did it. When a publishable project exists, attach a
 * `caseStudy` object and the area gains a detail page — the summary card here
 * stays as-is.
 */
export const workAreas: WorkArea[] = [
  {
    id: "brand-strategy",
    index: "01",
    title: "Brand Strategy",
    excerpt:
      "Keeping a brand recognizable across everything it touches — messaging, visual identity, and the competitive context it sits in.",
    practices: [
      "Brand positioning",
      "Messaging consistency",
      "Visual identity governance",
      "Competitive research",
    ],
    relatedRoleIds: ["careaga", "brecho"],
  },
  {
    id: "social-media",
    index: "02",
    title: "Social Media",
    excerpt:
      "Planning content against a calendar rather than a whim, then watching what the audience does with it.",
    practices: [
      "Content planning",
      "Campaign calendars",
      "Community engagement",
      "Trend monitoring",
    ],
    relatedRoleIds: ["careaga", "aesthetic-element", "blend", "upbeat"],
  },
  {
    id: "content-creative",
    index: "03",
    title: "Content & Creative",
    excerpt:
      "Coordinating production from brief to asset, and keeping the output on-brand once it leaves the studio.",
    practices: [
      "Multimedia content",
      "Asset coordination",
      "Production scheduling",
      "Art direction support",
    ],
    relatedRoleIds: ["careaga", "upbeat", "aesthetic-element"],
  },
  {
    id: "seo-digital-growth",
    index: "04",
    title: "SEO & Digital Growth",
    excerpt:
      "The unglamorous work behind organic acquisition — structure, relevance, and visibility that compounds.",
    practices: [
      "On-page SEO",
      "Organic visibility",
      "Content optimization",
      "Acquisition support",
    ],
    relatedRoleIds: ["miavia", "upbeat", "brecho"],
  },
  {
    id: "campaign-analysis",
    index: "05",
    title: "Campaign Analysis",
    excerpt:
      "Reading performance honestly, reporting it clearly, and turning it into a recommendation someone can act on.",
    practices: [
      "Performance reporting",
      "Reach & efficiency review",
      "Audience insights",
      "Actionable recommendations",
    ],
    relatedRoleIds: ["miavia", "careaga"],
  },
  {
    id: "ecommerce",
    index: "06",
    title: "E-Commerce",
    excerpt:
      "Four years of running a store teaches you what a marketing plan looks like when the P&L is yours.",
    practices: [
      "Digital merchandising",
      "Pricing strategy",
      "Product content & photography",
      "Vendor relationships",
    ],
    relatedRoleIds: ["brecho"],
  },
];

/**
 * Resolves an area's role ids to company names, so each card can point at
 * where the work actually happened rather than asserting it in the abstract.
 */
export function companiesForArea(area: WorkArea): string[] {
  return area.relatedRoleIds
    .map((id) => experience.find((role) => role.id === id)?.shortName)
    .filter((company): company is string => Boolean(company));
}
