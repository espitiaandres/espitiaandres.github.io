const HrefLink = ({ route }) => {
  const portfolioBaseName = "https://espitiaandres.com";
  window.location.replace(`${portfolioBaseName}/${route}`);
  return null;
};

export default HrefLink;
