import styled from "@emotion/styled";

export const RegisterWrapper = styled("div")`
  label: RegisterWrapper;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
`;
export const RegisterTitle = styled("span")`
  label: RegisterTitle;
  font-size: 50px;
`;
export const RegisterForm = styled("from")`
  label: RegisterForm;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
export const Label = styled("Label")`
  label: Label;
  margin: 10px;
`;
export const RegisterInput = styled("input")`
  label: RegisterInput;
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 10px;
`;
export const RegisterButton = styled("button")`
  label: RegisterButton;
  margin-top: 20px;
  cursor: pointer;
  background-color: lightcoral;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 10px;
`;
export const LoginButton = styled("button")`
  label: LoginButton;
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: teal;
  cursor: pointer;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
`;
