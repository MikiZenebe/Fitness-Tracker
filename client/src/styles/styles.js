import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

//Auth Page
export const AuthLeft = styled.div`
  flex: 1;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const AuthRight = styled.div({
  flex: "1",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  padding: "40px",
  gap: "16px",
  alignItems: "center",
  justifyContent: "center",
});
export const Logo = styled.img({
  position: "absolute",
  width: "70px",
  top: "40px",
  left: "60px",
  zIndex: "10",
});
export const Image = styled.img({
  position: "relative",
  height: "100%",
  width: "100%",
  objectFit: "cover",
});
export const Text = styled.div({
  fontSize: "15px",
  textAlign: "center",
  color: `${({ theme }) => theme.text_secondary}`,
  marginTop: "16px",
});
export const TextButton = styled.span({
  color: "#007AFF",
  cursor: "pointer",
  fontWeight: "bold",
});

//Sign
export const SignUpContainer = styled.div({});
export const SignInContainer = styled.div({
  width: "100%",
  maxWidth: "500px",
  display: "flex",
  flexDirection: "column",
  gap: "36px",
});
export const Title = styled.div({
  fontSize: "30px",
  fontWeight: "800",
  color: "#404040",
});
export const Span = styled.div({
  fontSize: "16px",
  fontWeight: "400",
  color: "#4d4c4c" + 90,
});

//Navbar
export const Nav = styled.div({
  backgroundColor: "#FFFFFF",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
  position: "sticky",
  top: "0",
  zIndex: 10,
  color: "white",
  borderBottom: `1px solid ${"#4d4c4c" + 20}`,
});
export const NavContainer = styled.div({
  width: "100%",
  maxWidth: "1400px",
  padding: "0 24px",
  display: "flex",
  gap: "14px",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "1rem",
});
export const Mobileicon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
export const NavLogo = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: "0 6px",
  fontWeight: "600",
  fontSize: "18px",
  textDecoration: "none",
  color: "black",
});
export const NavBLogo = styled.img({
  height: "42px",
});
export const Navlink = styled(NavLink)({
  display: "flex",
  alignItems: "center",
  color: "#404040",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 1s slide-in",
  textDecoration: "none",
  "&:hover": {
    color: "#007AFF",
    textDecoration: "none",
  },

  "&.active": {
    color: "#007AFF",
    textDecoration: "none",
  },
});
export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavTextButton = styled.div({
  textAlign: "end",
  color: "#5B86E5",
  cursor: "pointer",
  fontSize: "16px",
  transition: "all 0.3s ease",
  fontWeight: "600",
  "&:hover": {
    color: "#007AFF",
  },
});
export const UserContainer = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-end",
  gap: "16px",
  alignItems: "center",
  padding: "0 6px",
  color: "#007AFF",
});

//Dashboard
export const DashboardContainer = styled.div({
  flex: 1,
  height: "100%",
  display: "flex",
  justifyContent: "center",
  padding: "22px 0px",
  overflowY: "scroll",
});
export const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
export const DashboardTitle = styled.div({
  padding: "0px 16px",
  fontSize: "22px",
  color: `${({ theme }) => theme.text_primary}`,
  fontWeight: "500",
});
export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
