import type { ExperienceRole } from "@/lib/types";

/**
 * Ordered most recent first.
 *
 * `metrics` is intentionally absent on every role. Brittany has no verified,
 * publishable campaign numbers yet, and the brief forbids inventing them.
 * When real figures exist, add a `metrics` array to the relevant role and the
 * timeline renders it — no component changes required.
 */
export const experience: ExperienceRole[] = [
  {
    id: "careaga",
    company: "Careaga Plastic Surgery",
    shortName: "Careaga",
    role: "Brand Manager",
    location: "Miami, Florida",
    start: "2025-08",
    end: null,
    industry: "Healthcare",
    featured: true,
    summary:
      "Supporting brand strategy across every channel a patient encounters — social, digital, promotional, and in-practice.",
    contributions: [
      "Supporting brand strategy across digital, social, promotional, and patient-facing marketing channels",
      "Planning social media content, coordinating creative assets, and managing campaign calendars",
      "Maintaining consistent brand messaging and visual identity across touchpoints",
      "Monitoring audience engagement and content performance",
      "Tracking competitor activity and marketing trends to identify digital growth opportunities",
      "Collaborating with internal teams on promotions and service launches",
      "Coordinating content production and supporting marketing initiatives aligned with business objectives",
    ],
  },
  {
    id: "miavia",
    company: "MiaVia Travel App",
    shortName: "MiaVia",
    role: "Marketing Intern",
    location: "Miami, Florida",
    start: "2024-09",
    end: "2024-12",
    industry: "Travel",
    summary:
      "Measuring what campaigns actually did — reach, efficiency, and the SEO work behind organic acquisition.",
    contributions: [
      "Analyzing digital marketing campaign performance and evaluating reach and efficiency",
      "Building marketing reports and data-driven recommendations",
      "Supporting SEO initiatives to improve app visibility and organic user acquisition",
      "Collecting and analyzing user feedback to identify potential product improvements",
      "Creating and managing social media and digital content",
      "Monitoring social media trends and market insights, delivering weekly marketing updates",
    ],
  },
  {
    id: "upbeat",
    company: "UPBEAT Pediatric Dentistry",
    shortName: "UPBEAT",
    role: "Marketing & Content",
    location: "Miami, Florida",
    start: "2023-06",
    end: "2023-12",
    industry: "Healthcare",
    summary:
      "Multimedia content and SEO practice for a pediatric dental brand, reviewed against performance.",
    contributions: [
      "Developing multimedia marketing content",
      "Applying SEO best practices to improve online visibility",
      "Supporting audience engagement and monitoring industry trends",
      "Reviewing content performance and recommending improvements to content and marketing strategy",
    ],
  },
  {
    id: "aesthetic-element",
    company: "Aesthetic Element",
    shortName: "Aesthetic Element",
    role: "Content Creation",
    location: "Miami, Florida",
    start: "2023-02",
    end: "2023-04",
    industry: "Beauty",
    summary:
      "Social content for an aesthetics brand, shaped by what was moving in digital culture.",
    contributions: [
      "Creating social media content in step with digital and social trends",
      "Supporting online presence and customer engagement",
    ],
  },
  {
    id: "blend",
    company: "Blend Hair Boutique",
    shortName: "Blend",
    role: "Marketing & Content Support",
    location: "Miami, Florida",
    start: "2021-07",
    end: "2021-12",
    industry: "Beauty",
    summary:
      "Marketing support across content, community, and email — plus the research behind partnership decisions.",
    contributions: [
      "Supporting marketing strategy through social media content creation and community engagement",
      "Running email marketing and promoting events and product launches",
      "Conducting market research and media and influencer partnership research",
      "Supporting brand visibility initiatives",
    ],
  },
  {
    id: "brecho",
    company: "Brechó Boutique",
    shortName: "Brechó",
    role: "E-Commerce & Brand Operations",
    start: "2018-01",
    end: "2021-12",
    industry: "E-Commerce",
    summary:
      "Running an online high-end second-hand store end to end — merchandising, pricing, content, and the commercial calls behind them.",
    contributions: [
      "Managing an online high-end second-hand store across e-commerce and brand operations",
      "Owning budgeting, vendor relationships, sales and market analysis, pricing strategy, and product positioning",
      "Running SEO-focused marketing campaigns with original product content and photography",
      "Directing digital merchandising and social media engagement",
    ],
  },
];
