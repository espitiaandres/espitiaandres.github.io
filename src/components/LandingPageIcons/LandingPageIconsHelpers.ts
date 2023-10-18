import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

interface SocialIcon {
  href: string;
  fontAwesome: [IconPrefix, IconName];
  label: string;
}

interface toolIcon {
  src: string;
  href: string;
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

export const toolIcons: readonly toolIcon[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    href: "https://www.python.org/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    href: "https://nodejs.org/en",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    href: "https://www.typescriptlang.org/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
    href: "https://go.dev/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg",
    href: "https://www.djangoproject.com/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain-wordmark.svg",
    href: "https://nestjs.com/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    href: "https://graphql.org/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    href: "https://react.dev/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    href: "https://tailwindcss.com/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original-wordmark.svg",
    href: "https://kafka.apache.org/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg",
    href: "https://www.docker.com/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    href: "https://code.visualstudio.com/",
  },
];
