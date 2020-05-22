import React from "react";

import CustomButton from "../custom-button/custtom-button.component";

import "./Sign-up.style.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import FormInput from "../Form-input/Form-input";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      displayName: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, displayName, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        email: "",
        password: "",
        displayName: "",
        confirmPassword: "",
      });
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
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and passward</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            required
            name="displayName"
            label="Display Name"
            type="text"
            onChange={this.handleChange}
            value={this.state.displayName}
          />
          <FormInput
            required
            name="email"
            label="Email"
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
          />
          <FormInput
            required
            value={this.state.password}
            name="password"
            type="password"
            label="Password"
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
