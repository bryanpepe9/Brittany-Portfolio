import type { CapabilityGroup } from "@/lib/types";

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "brand",
    label: "Brand",
    items: [
      "Brand Strategy",
      "Brand Development",
      "Brand Positioning",
      "Campaign Strategy",
      "Competitive Research",
      "Market Research",
    ],
  },
  {
    id: "digital",
    label: "Digital",
    items: [
      "Digital Marketing",
      "Social Media Marketing",
      "Content Strategy",
      "Content Creation",
      "SEO",
      "Email Marketing",
      "Digital Advertising",
      "Influencer Marketing",
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    items: [
      "Campaign Performance",
      "Social Media Analytics",
      "Audience Insights",
      "KPI Tracking",
      "Conversion Optimization",
      "Competitive Analysis",
    ],
  },
];

/**
 * Labelled "Tools & Platforms" deliberately — these are tools Brittany works
 * with, not domains she claims expertise in.
 */
export const toolsAndPlatforms: string[] = [
  "Google Analytics 4",
  "Google Ads",
  "Meta Ads Manager",
  "Meta Business Suite",
  "Canva",
  "Adobe Creative Suite",
  "Photoshop",
  "Illustrator",
  "HubSpot",
  "Mailchimp",
  "WordPress",
  "Looker Studio",
  "Microsoft Excel",
];
