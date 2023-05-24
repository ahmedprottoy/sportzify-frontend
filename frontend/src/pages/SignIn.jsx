import React from "react";
import SignInForm from "../components/signin/SignInForm";
import SignInCover from "../components/signin/SignINCover";


import {Link} from 'react-router-dom'

function SignIn() {
  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <SignInForm/>
<SignInCover />
        
      </section>
    </div>
  );
}

export default SignIn;
