import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "react-loader-spinner";
import "animate.css";

import NotFoundGif from "../../images/gif/lostAstronaut.gif";
import CornerIconsWrapper from "../CornerIconsWrapper/CornerIconsWrapper";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", {
        replace: true,
      });
    }, 4800);
  }, []);

  return (
    <div className="landingPageWrapper">
      <div className="mainContentWrapper animate__animated animate__zoomIn animate__delay-0.8s">
        <div className="helloWorld">404</div>
        <div className="description">
          Hey fellow space traveller! Looks like you're heading to the wrong
          planet. Let me take you back to safety...
        </div>
        <div className="notfoundloader">
          <Loader type="Bars" color="#1ed760" height={36} width={100} />
        </div>
        <div className="notfoundgif">
          <img src={NotFoundGif} alt="Lost traveller" />
        </div>
      </div>
      <div>
        <CornerIconsWrapper />
      </div>
    </div>
  );
};

export default NotFoundPage;
