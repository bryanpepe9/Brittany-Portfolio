/**
 * Single source of truth for anything that needs the deployed origin.
 * Set NEXT_PUBLIC_SITE_URL in the Vercel project to move to a custom domain.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://brittany-pepe.vercel.app";

export const SITE_TITLE = "Brittany Pepe | Brand Manager & Digital Marketing";

export const SITE_DESCRIPTION =
  "Portfolio of Brittany Pepe, a Miami-based Brand Manager specializing in digital marketing, brand strategy, content, social media, and audience engagement.";

/**
 * Positioning keywords for structured data only.
 * These are deliberately never rendered on-page — they exist so recruiter
 * searches resolve to this site without turning it into a keyword wall.
 */
export const POSITIONING_KEYWORDS = [
  "Brand Management",
  "Brand Strategy",
  "Digital Marketing",
  "Social Media Marketing",
  "Content Strategy",
  "Content Marketing",
  "Search Engine Optimization",
  "Digital Advertising",
  "Campaign Analysis",
  "Influencer Marketing",
  "Market Research",
  "Audience Engagement",
  "Brand Coordinator",
  "Associate Brand Manager",
  "Digital Marketing Specialist",
  "Marketing Coordinator",
  "Social Media Strategist",
  "Content Strategist",
  "Brand Marketing Specialist",
  "Integrated Marketing Coordinator",
  "Growth Marketing",
] as const;
