/* eslint-disable react/prop-types */
import { WeeklyCard, WeeklyTitle } from "../../styles/styles";
import { BarChart } from "@mui/x-charts/BarChart";

export default function WeeklyStat({ data }) {
  return (
    <WeeklyCard>
      <WeeklyTitle>Weekly Calories Burned</WeeklyTitle>
      {data.totalWeeksCaloriesBurnt && (
        <BarChart
          xAxis={[
            { scaleType: "band", data: data?.totalWeeksCaloriesBurnt?.weeks },
          ]}
          series={[{ data: data?.totalWeeksCaloriesBurnt?.caloriesBurned }]}
          height={300}
        />
      )}
    </WeeklyCard>
  );
}
