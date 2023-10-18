import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

interface SocialIcon {
  href: string;
  fontAwesome: [IconPrefix, IconName];
  label: string;
}

export const socialIcons: readonly SocialIcon[] = [
  {
    href: "https://github.com/espitiaandres",
    fontAwesome: ["fab", "github-alt"],
    label: "Github",
  },
  {
    href: "https://www.linkedin.com/in/espitiaandres",
    fontAwesome: ["fab", "linkedin-in"],
    label: "LinkedIn",
  },
  {
    href: "mailto:espitiaandres123@gmail.com",
    fontAwesome: ["fas", "envelope"],
    label: "Email",
  },
  {
    href: "https://dribbble.com/espitiaandres",
    fontAwesome: ["fab", "dribbble"],
    label: "Dribbble",
  },
  {
    href: "https://medium.com/@espitiaandres123",
    fontAwesome: ["fab", "medium"],
    label: "Medium",
  },
  {
    href: "https://stackoverflow.com/users/13973201/espitiaandres",
    fontAwesome: ["fab", "stack-overflow"],
    label: "Stack Overflow",
  },
];
