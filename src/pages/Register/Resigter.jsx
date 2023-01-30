import React from "react";
import {
  Label,
  LoginButton,
  RegisterButton,
  RegisterForm,
  RegisterInput,
  RegisterTitle,
  RegisterWrapper,
} from "./style";

export default function Register() {
  return (
    <>
      <RegisterWrapper>
        <RegisterTitle>Register</RegisterTitle>
        <RegisterForm>
          <Label>Username</Label>
          <RegisterInput type="text" placeholder="Enter your Username..." />
          <Label>Email</Label>
          <RegisterInput type="email" placeholder="Enter your email..." />
          <Label>Password</Label>
          <RegisterInput type="password" placeholder="Enter your password..." />
          <RegisterButton>Register</RegisterButton>
        </RegisterForm>
        <LoginButton>Login</LoginButton>
      </RegisterWrapper>
    </>
  );
}
