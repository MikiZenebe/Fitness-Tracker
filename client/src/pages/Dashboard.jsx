import {
  DashboardContainer,
  DashboardTitle,
  FlexWrap,
  Wrapper,
} from "../styles/styles";
import { counts } from "../utils/data";
import CountsCard from "../components/cards/CountsCard";
import WeeklyStat from "../components/cards/WeeklyStat";

export default function Dashboard() {
  const data = {
    totalCaloriesBurnt: 13500,
    totalWorkouts: 6,
    avgCaloriesBurntPerWorkout: 2250,
    totalWeeksCaloriesBurnt: {
      weeks: ["17th", "18th", "19th", "20th", "21th", "22th", "23th"],
      caloriesBurned: [10500, 0, 0, 0, 0, 0, 13500],
    },
    pieChartData: [
      {
        id: 0,
        value: 6000,
        label: "Legs",
      },
      {
        id: 1,
        value: 1500,
        label: "Back",
      },
      {
        id: 2,
        value: 3750,
        label: "Shoulder",
      },
      {
        id: 3,
        value: 2250,
        label: "ABS",
      },
    ],
  };

  console.log(data);

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
          <WeeklyStat key={data.id} data={data} />
        </FlexWrap>
      </Wrapper>
    </DashboardContainer>
  );
}
