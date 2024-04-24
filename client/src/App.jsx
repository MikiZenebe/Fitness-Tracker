import { useState } from "react";
import Auth from "./pages/Auth.jsx";
import { AppContainer } from "./styles/styles.js";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  const [user, setUser] = useState(true);

  return (
    <>
      {user ? (
        <AppContainer>
          <Navbar />
        </AppContainer>
      ) : (
        <AppContainer>
          <Auth />
        </AppContainer>
      )}
    </>
  );
}
