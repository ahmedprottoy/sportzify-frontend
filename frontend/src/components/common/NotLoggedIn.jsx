import React from "react";
import NotLogInSVG from "../../assets/NotLoggedIn.svg";
import ButtonUI from "./ButtonUI";
import { useNavigate } from "react-router-dom";
import LogInIcon from '../../assets/login.png'

function NotLoggedIn() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <object data={NotLogInSVG} type="" className="w-4/12" />

      <p className="text-4xl mt-5 font-nunito font-semibold">
        You must Login to visit this page !
      </p>

      <ButtonUI
        text="Sign In First"
        onClick={() => {
          navigate("/sign-in");
        }}
        type="button"
        className="my-10"
        Icon={LogInIcon}
        data-testid="not-logged-signin-button"
      />
    </div>
  );
}

export default NotLoggedIn;
