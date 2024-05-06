import {
  WorkoutCardWrapper,
  WorkoutContainer,
  WorkoutLeft,
  WorkoutRight,
  WorkoutSecTitle,
  WorkoutSection,
  WorkoutTitle,
  WorkoutWrapper,
} from "../styles/styles";
import WorkoutCard from "../components/cards/WorkoutCard";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getWorkouts } from "../api";
import { CircularProgress } from "@mui/material";

export default function Workout() {
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");

  const getTodaysWorkout = async () => {
    setLoading(true);
    const token = localStorage.getItem("currentUser");
    await getWorkouts(token, date ? `?date=${date}` : "").then((res) => {
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      console.log(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getTodaysWorkout();
  }, [date]);

  return (
    <WorkoutContainer>
      <WorkoutWrapper>
        <WorkoutLeft>
          <WorkoutTitle>Select Date</WorkoutTitle>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              onChange={(e) => setDate(`${e.$M + 1}/${e.$D}/${e.$y}`)}
            />
          </LocalizationProvider>
        </WorkoutLeft>
        <WorkoutRight>
          <WorkoutSection>
            <WorkoutSecTitle>Todays Workout</WorkoutSecTitle>
            {loading ? (
              <CircularProgress />
            ) : (
              <WorkoutCardWrapper>
                {todaysWorkouts.map((workout, i) => (
                  <WorkoutCard key={i} workout={workout} />
                ))}
              </WorkoutCardWrapper>
            )}
          </WorkoutSection>
        </WorkoutRight>
      </WorkoutWrapper>
    </WorkoutContainer>
  );
}
