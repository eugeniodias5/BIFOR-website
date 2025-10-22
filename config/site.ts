export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "BIFOR datasets",
  description: "Datasets used in the paper 'Background-invariant re-identification of dogs from camera-trap videos in non-controlled environments'",
  navItems: [
    {
      label: "About",
      href: "/",
    },
    {
      label: "Download",
      href: "/",
    },
    {
      label: "Authors",
      href: "/",
    },
    {
      label: "License",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "hhttps://github.com/eugeniodias5/BIFOR",
    website: "https://anr.fr/Projet-ANR-19-ASIE-0002",
  },
};
