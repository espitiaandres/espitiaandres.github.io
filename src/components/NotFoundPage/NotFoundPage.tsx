import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";
// import "animate.css";

// import NotFoundGif from "../../images/gif/lostAstronaut.gif";

const NotFoundPage = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/", {
  //       replace: true,
  //     });
  //   }, 5000);
  // }, []);

  return (
    <div
    // className="animate__animated animate__fadeIn animate__delay-0.3s"
    >
      <div className="text-black text-lg">
        Hi fellow space traveller! Looks like you're heading to the wrong
        planet. Let me take you back to safety...
      </div>
      <div className="flex flex-row justify-center my-12 md:my-20">
        {/* <Loader type="Bars" color="#1ed760" height={36} width={100} /> */}
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
