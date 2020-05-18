import React from "react";
import SigIn from "../../Components/Sign-in/Sign-in-component";
import SignUp from "../../Components/Sign-up/Sign-up.compenont"
import "./SignIn-style.scss";

const SignPage = () => (
  <div className='sign-in-up'>
    <SigIn />
    <SignUp />
  </div>
);
export default SignPage;
