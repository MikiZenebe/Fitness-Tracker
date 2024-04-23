import { SignInContainer, Span, Title } from "../styles/styles";
import TextInput from "./TextInput";

export default function SignIn() {
  return (
    <SignInContainer>
      <div>
        <Title>Welcome to Fittrack 👋</Title>
        <Span>Please login with your details!</Span>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
        />
      </div>
    </SignInContainer>
  );
}
