export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Index", href: "#index" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/**
 * The full contents list rendered inside the Index section — this is what
 * makes "Index" in the nav mean something, and gives the sections that are
 * deliberately kept out of the top-level nav a way to be reached.
 */
export const siteIndex: Array<NavItem & { index: string }> = [
  { index: "01", label: "Selected Work", href: "#work" },
  { index: "02", label: "Capabilities", href: "#capabilities" },
  { index: "03", label: "Experience", href: "#experience" },
  { index: "04", label: "About", href: "#about" },
  { index: "05", label: "Education & Languages", href: "#credentials" },
  { index: "06", label: "Contact", href: "#contact" },
];
