import { FitnessCenterRounded, TimelapseRounded } from "@mui/icons-material";
import { Card, Category, Details, Flex, Name, Sets } from "../../styles/styles";

export default function WorkoutCard() {
  return (
    <Card>
      <Category>#Legs</Category>
      <Name>Back Squat</Name>
      <Sets>Count: 5sets X 10reps</Sets>

      <Flex>
        <Details>
          <FitnessCenterRounded sx={{ fontSize: "20px" }} /> 30kg
        </Details>
        <Details>
          <TimelapseRounded sx={{ fontSize: "20px" }} /> 30kg
        </Details>
      </Flex>
    </Card>
  );
}
