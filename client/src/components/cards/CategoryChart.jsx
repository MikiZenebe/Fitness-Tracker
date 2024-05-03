/* eslint-disable react/prop-types */
import { WeeklyCard, WeeklyTitle } from "../../styles/styles";
import { PieChart } from "@mui/x-charts/PieChart";

export default function CategoryChart({ data }) {
  return (
    <WeeklyCard>
      <WeeklyTitle>Weekly Calories Burned</WeeklyTitle>
      {data?.pieChartData && (
        <PieChart
          series={[
            {
              data: data?.pieChartData,
              innerRadius: 30,
              outerRadius: 120,
              paddingAngle: 5,
              cornerRadius: 5,
            },
          ]}
          height={300}
        />
      )}
    </WeeklyCard>
  );
}
