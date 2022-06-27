//
//  NotFoundPage.ts
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "react-loader-spinner";
import "animate.css";

import NotFoundGif from "../../images/gif/lostAstronaut.gif";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", {
        replace: true,
      });
    }, 5000);
  }, []);

  return (
    <div className="animate__animated animate__fadeIn animate__delay-0.3s">
      <div className="text-black">
        Hey fellow space traveller! Looks like you're heading to the wrong
        planet. Let me take you back to safety...
      </div>
      <div className="flex flex-row justify-center my-5 md:my-7">
        <Loader type="Bars" color="#1ed760" height={36} width={100} />
      </div>
      <div class="avatar flex flex-row justify-center">
        <div class="w-52 md:w-72 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={NotFoundGif} alt="Lost traveller" />
        </div>
      </div>
      <div className="flex flex-row justify-center my-5 md:my-7">
        <Loader type="Bars" color="#1ed760" height={36} width={100} />
      </div>
    </div>
    // <div className="landingPageWrapper">
    //   <div className="mainContentWrapper animate__animated animate__zoomIn animate__delay-0.8s">
    //     <div className="helloWorld">404</div>
    //     <div className="description">
    //       Hey fellow space traveller! Looks like you're heading to the wrong
    //       6
    //     </div>
    //     <div className="notfoundloader">
    //       <Loader type="Bars" color="#1ed760" height={36} width={100} />
    //     </div>
    //     <div className="notfoundgif">
    //       <img src={NotFoundGif} alt="Lost traveller" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default NotFoundPage;
