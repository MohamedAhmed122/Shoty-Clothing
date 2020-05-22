import React from "react";
import SigIn from "../../Components/Sign-in/Sign-in-component";

import "./SignIn-style.scss";
import SignUp from "../../Components/Sign-up/Sign-up.component";

const SignPage = () => (
  <div className='sign-in-up'>
    <SigIn />
    <SignUp />
  </div>
);
export default SignPage;
