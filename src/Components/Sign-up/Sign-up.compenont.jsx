import React from "react";

import FormInput from "../Form-input/Form-input";

import CustomButton from "../custom-button/custtom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./Sign-up.style.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassward: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassward } = this.state;
    if (password !== confirmPassward) {
      alert(" password doesn't match!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword( email , password );
      createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassward: "",
      });

    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const {name , value}= e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-up'>
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and passward</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            required
            value={this.state.displayName}
            onChange={this.handleChange}
            label="Display Name"
            name="displayName"
          ></FormInput>
          <FormInput
            type="email"
            required
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            name="email"
          ></FormInput>
          <FormInput
            type="password"
            required
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            name="Password"
          ></FormInput>
          <FormInput
            type="password"
            required
            value={this.state.confirmPassward}
            onChange={this.handleChange}
            label="Confirm Password"
            name="ConfirmPassword"
          ></FormInput>
        </form>
        <CustomButton type="submit">Sign up</CustomButton>
      </div>
    );
  }
}
export default SignUp;
