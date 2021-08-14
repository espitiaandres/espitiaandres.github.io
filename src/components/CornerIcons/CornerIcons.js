import React from "react";
import "./CornerIcons.css";

const CornerIcons = ({ src, className }) => {
  return (
    <div>
      <img src={src} alt={className} className={className} />
    </div>
  );
};

export default CornerIcons;
