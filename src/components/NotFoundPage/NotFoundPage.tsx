import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";

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
    <div>
      <div>
        Hi fellow space traveller! Looks like you're heading to the wrong
        planet. Let me take you back to safety...
      </div>
      <div className="flex flex-row justify-center my-12 md:my-20">
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
