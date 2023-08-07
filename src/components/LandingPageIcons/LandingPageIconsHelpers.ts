import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

interface SocialIcon {
  href: string;
  fontAwesome: [IconPrefix, IconName];
  label: string;
}

interface toolIcon {
  src: string;
  className: string;
}

export const socialIcons: SocialIcon[] = [
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

export const toolIcons: toolIcon[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    className: "w-16 h-16",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
    className: "w-16 h-16",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    className: "w-16 h-16",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
    className: "w-16 h-16",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg",
    className: "w-16 h-16",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain-wordmark.svg",
    className: "w-16 h-16",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    className: "w-16 h-16",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    className: "w-16 h-16",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    className: "w-16 h-16",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original-wordmark.svg",
    className: "w-16 h-16",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg",
    className: "w-16 h-16",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    className: "w-16 h-16",
  },
];
