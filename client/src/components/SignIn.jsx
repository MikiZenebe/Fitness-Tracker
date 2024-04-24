import { useState } from "react";
import { SignInContainer, Span, Title } from "../styles/styles";
import TextInput from "./TextInput";
import Button from "./Button";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          value={email}
          handelChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          password
          value={password}
          handelChange={(e) => setPassword(e.target.value)}
        />
        <Button text="SignIn" isLoading={loading} isDisabled={buttonDisabled} />
      </div>
    </SignInContainer>
  );
}
