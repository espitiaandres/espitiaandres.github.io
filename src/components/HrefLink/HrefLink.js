const HrefLink = ({ route }) => {
  const portfolioBaseName = "https://andres-espitia.com";
  window.location.replace(`${portfolioBaseName}/${route}`);
  return null;
};

export default HrefLink;
