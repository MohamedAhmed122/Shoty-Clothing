import React from "react";

import FormInput from "../Form-input/Form-input";
import CustomButton from "../custom-button/custtom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./Sign-in.style.scss";

import { auth } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            required
            value={this.state.email}
            name="email"
            label="email"
            onChange={this.handleChange}
            type="email"
          />
          <FormInput
            required
            value={this.state.password}
            name="password"
            type="password"
            label="password"
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submmit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignedIn>
              sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
