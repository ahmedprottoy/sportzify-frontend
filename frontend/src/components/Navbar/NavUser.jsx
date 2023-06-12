import React,{useState,useContext} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { signOutReq } from "../../services/authService";
import { useMutation } from "react-query";
import ProfileLogo from '../../assets/profile.png'
import SignOutLogo  from '../../assets/logout.png'
import { AuthContext } from "../../context/authContext";
import NoImage from "../../assets/NoImage.jpg";
import ButtonUI from '../common/ButtonUI';

function NavUser() {
const {username,imageUrl,clearContext} = useContext(AuthContext);
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const navigate = useNavigate();

      const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

      const signOutMutation = useMutation(signOutReq, {
        onSuccess: () => {
          navigate("/sign-in");
        },
      });

      const signOut = () => {
        clearContext();
        signOutMutation.mutate();
      };

  return (
    <div>
      <button
        class={`block shrink-0 hover:ring-4  rounded-full ${
          isDropdownOpen ? "focus:ring-4" : ""
        }`}
        onClick={handleDropdownToggle}
      >
        {(imageUrl) ? (
          <img
            alt="Man"
            src={imageUrl}
            class="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <img
            alt="Man"
            src={NoImage}
            class="h-10 w-10 rounded-full object-cover"
          />
        )}
      </button>
      {isDropdownOpen && (
        <div className="absolute bg-gray-100  p-2 flex flex-col gap-2 right-4 top-12 shadow-lg rounded-lg items-center">
          <div className="flex flex-row items-center w-36 border-2 p-1 border-gray-700 rounded-md">
            <img src={ProfileLogo} alt="Logo" className="h-6 w-6" />
            <p className="p-1">{username}</p>
          </div>
          <hr className="border-1 w-36 border-gray-700" />
          {/* <button
            onClick={signOut}
            className="p-1 flex flex-row items-center  w-36  rounded-md bg-cyan-600 border-2 border-gray-700"
          >
            <img src={SignOutLogo} alt="Logo" className="h-6 w-6" />
            {signOutMutation.isLoading ? "Signing Out..." : "Sign Out"}
          </button> */}

          <ButtonUI
            text="Sign Out"
            onClick={() => {
              signOut();
            }}
            Icon={SignOutLogo}
            className={"w-full"}
          />
        </div>
      )}
    </div>
  );
}

export default NavUser;

{/* <div className="top-12 right-4  bg-gray-200 rounded-lg shadow-lg absolute">
            <p>Prottoy09</p>
          <button
            onClick={signOut}
            className="block px-3 py-1  text-gray-700 border-4 rounded-lg text-sm font-bold border-gray-400  hover:bg-gray-100 "
          >
            {signOutMutation.isLoading ? "Signing Out..." : "Sign Out"}
          </button>
        </div> 
    
    */}