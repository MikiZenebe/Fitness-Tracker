/* eslint-disable react/prop-types */
import { WeeklyCard, WeeklyTitle } from "../styles/styles";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

export default function AddWorkouts({ workout, setWorkout }) {
  return (
    <WeeklyCard>
      <WeeklyTitle>Add New Workout</WeeklyTitle>
      <TextInput
        value={workout}
        label="Workout"
        textArea
        rows={10}
        placeholder={`Enter in this format:

#Category
-Workout Name
-Sets
-Reps
-Weight
-Duration`}
        handelChange={(e) => setWorkout(e.target.value)}
      />

      <Button text="Add Workout" small />
    </WeeklyCard>
  );
}
