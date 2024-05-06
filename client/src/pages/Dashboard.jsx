import {
  CardWrapper,
  DashboardContainer,
  DashboardTitle,
  FlexWrap,
  Section,
  Title,
  Wrapper,
} from "../styles/styles";
import { counts } from "../utils/data";
import CountsCard from "../components/cards/CountsCard";
import WeeklyStat from "../components/cards/WeeklyStat";
import CategoryChart from "../components/cards/CategoryChart";
import AddWorkouts from "../components/AddWorkouts";
import { useEffect, useState } from "react";
import WorkoutCard from "../components/cards/WorkoutCard";
import { addWorkout, getDashboardDetails, getWorkouts } from "../api";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [data, setData] = useState();
  const [workout, setWorkout] = useState(`#Legs
-Back Squat
-5 setsX15 reps
-30 kg
-10 min`);

  const dashboardData = async () => {
    setLoading(true);
    const token = localStorage.getItem("currentUser");
    await getDashboardDetails(token).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  };

  const getTodaysWorkout = async () => {
    setLoading(true);
    const token = localStorage.getItem("currentUser");
    await getWorkouts(token, "").then((res) => {
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      setLoading(false);
    });
  };

  const addNewWorkout = async () => {
    setButtonLoading(true);
    const token = localStorage.getItem("currentUser");
    await addWorkout(token, { workoutString: workout })
      .then((res) => {
        dashboardData();
        getTodaysWorkout();
        setButtonLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    dashboardData();
    getTodaysWorkout();
  }, []);

  return (
    <DashboardContainer>
      <Wrapper>
        <DashboardTitle>Dashboard</DashboardTitle>
        <FlexWrap>
          {counts.map((item) => (
            <CountsCard key={item} item={item} data={data} />
          ))}
        </FlexWrap>

        <FlexWrap>
          <WeeklyStat data={data} />
          <CategoryChart data={data} />
          <AddWorkouts
            workout={workout}
            setWorkout={setWorkout}
            addNewWorkout={addNewWorkout}
            buttonLoading={buttonLoading}
          />
        </FlexWrap>

        <Section>
          <Title>Today Workouts</Title>
          <CardWrapper>
            {todaysWorkouts.map((workout, i) => (
              <WorkoutCard key={i} workout={workout} />
            ))}
          </CardWrapper>
        </Section>
      </Wrapper>
    </DashboardContainer>
  );
}
