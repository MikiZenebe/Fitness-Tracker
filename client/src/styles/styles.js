import styled from "styled-components";

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

//SignUp
export const SignUpContainer = styled.div({});

//SignIn
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
