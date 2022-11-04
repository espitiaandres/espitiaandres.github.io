type HrefLinkProp = {
  route: string;
};

const HrefLink = ({ route }: HrefLinkProp) => {
  const portfolioBaseName = "https://espitiaandres.com";
  window.location.replace(`${portfolioBaseName}/${route}`);
  return null;
};

export default HrefLink;
