import {
  AuthContainer,
  AuthLeft,
  AuthRight,
  Image,
  Logo,
  Text,
  TextButton,
} from "../styles/styles";
import LogoImage from "../utils/Images/Logo.png";
import AuthImage from "../utils/Images/AuthImage.jpg";
import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default function Auth() {
  const [login, setLogin] = useState(false);

  return (
    <AuthContainer>
      <AuthLeft>
        <Logo src={LogoImage} />
        <Image src={AuthImage} />
      </AuthLeft>

      <AuthRight>
        {login ? (
          <>
            <SignIn />
            <Text>
              Don't have an account?{" "}
              <TextButton onClick={() => setLogin(false)}>SignUp</TextButton>
            </Text>
          </>
        ) : (
          <>
            <SignUp />
            <Text>
              Already have an account?{" "}
              <TextButton onClick={() => setLogin(true)}>SignIn</TextButton>
            </Text>
          </>
        )}
      </AuthRight>
    </AuthContainer>
  );
}
