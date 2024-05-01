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

export default function Workout() {
  return (
    <WorkoutContainer>
      <WorkoutWrapper>
        <WorkoutLeft>
          <WorkoutTitle>Select Date</WorkoutTitle>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </WorkoutLeft>
        <WorkoutRight>
          <WorkoutSection>
            <WorkoutSecTitle>Todays Workout</WorkoutSecTitle>
            <WorkoutCardWrapper>
              <WorkoutCard /> <WorkoutCard /> <WorkoutCard /> <WorkoutCard />{" "}
              <WorkoutCard />
            </WorkoutCardWrapper>
          </WorkoutSection>
        </WorkoutRight>
      </WorkoutWrapper>
    </WorkoutContainer>
  );
}
