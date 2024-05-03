import Auth from "./pages/Auth.jsx";
import { AppContainer } from "./styles/styles.js";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Workout from "./pages/Workout.jsx";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      {currentUser ? (
        <AppContainer>
          <Navbar currentUser={currentUser} />
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
