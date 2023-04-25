import AddExercise from "@/components/AddExercise/AddExercise";
import { NextPage } from "next";

interface indexProps {}

const index: NextPage<indexProps> = ({}) => {
  return (
    <div>
      <AddExercise />
    </div>
  );
};

export default index;
