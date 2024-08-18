import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconBox,
  IconWriting,
  IconCalendarTime,
  IconClock,
} from "@tabler/icons-react";

export const links: {
  title: string;
  icon: React.ReactNode;
  href?: string;
  newTab?: boolean;
  onClick?: () => void;
}[] = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },

  {
    title: "My Journey",
    icon: (
      <IconClock className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/blog/my-journey",
  },

  {
    title: "My Blog",
    icon: (
      <IconWriting className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/blog",
  },
  {
    title: "Tech I Use",
    icon: (
      <IconBox className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/blog/tech-i-use",
  },

  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/vamshinenu/",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.github.com/vamshinenu",
  },
];
