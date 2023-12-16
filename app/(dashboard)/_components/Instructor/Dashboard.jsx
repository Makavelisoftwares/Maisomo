import { Enroled } from "../Enroled";
import { Greetings } from "./Greetings";
import { InstructorCard } from "./InstructorCards";

export const InstructorDasboard = () => {
  return (
    <div>
      {/* Greetings */}
      <div>
        <Greetings />
        <InstructorCard />
        <Enroled />
      </div>
    </div>
  );
};
