interface HrefLinkProp {
  route: string;
}

export default function HrefLink({ route }: HrefLinkProp) {
  const portfolioBaseName = "https://espitiaandres.com";
  window.location.replace(`${portfolioBaseName}/${route}`);
  return null;
}
