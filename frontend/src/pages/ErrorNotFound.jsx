import React from "react";
import NotFound from "../assets/errorNotFound.svg";
import Icon from "../assets/reply.png";
import { useNavigate } from "react-router-dom";
import ButtonUI from "../components/common/ButtonUI";

function ErrorNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <img src={NotFound} alt="error" className="w-7/12" />
      <ButtonUI text="Go Back!" onClick={() => navigate(-1)} Icon={Icon} />
    </div>
  );
}

export default ErrorNotFound;
