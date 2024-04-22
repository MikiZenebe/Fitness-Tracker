import styled from "styled-components";
import LogoImage from "../utils/Images/Logo.png";
import AuthImage from "../utils/Images/AuthImage.png";

export const AppContainer = styled.div({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  background: "#FFFFFF",
  color: "#404040",
  overflowX: "hidden",
  overflowY: "hidden",
  transition: "all 0.2s ease",
});

export const AuthContainer = styled.div`
  display: flex;
  background: #ffffff;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const AuthLeft = styled.div`
  flex: 1;
  background: blue;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const AuthRight = styled.div({
  flex: "1",
  background: "red",
});
