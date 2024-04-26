import { useState } from "react";
import Auth from "./pages/Auth.jsx";
import { AppContainer } from "./styles/styles.js";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Workout from "./pages/Workout.jsx";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState(true);

  return (
    <>
      {user ? (
        <AppContainer>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/workouts" exact element={<Workout />} />
          </Routes>
        </AppContainer>
      ) : (
        <AppContainer>
          <Auth />
        </AppContainer>
      )}
    </>
  );
}
