import React from "react";
import { Link } from "react-router-dom";
import {
  Label,
  LoginButton,
  LoginForm,
  LoginInput,
  LoginTitle,
  LoginWrapper,
  RegisterButton,
} from "./style";

export default function Login() {
  return (
    <>
      <LoginWrapper>
        <LoginTitle>Login</LoginTitle>
        <LoginForm>
          <Label>Email</Label>
          <LoginInput type="email" placeholder="Enter your email..." />
          <Label>Password</Label>
          <LoginInput type="password" placeholder="Enter your password..." />
          <LoginButton>Login</LoginButton>
        </LoginForm>
        <RegisterButton>
          <Link className="link" to="/register">
            REGISTER
          </Link>
        </RegisterButton>
      </LoginWrapper>
    </>
  );
}
