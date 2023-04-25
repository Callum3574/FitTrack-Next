import Signup from "@/components/Auth/Signup";
import { NextPage } from "next";

interface indexProps {}

const CreateUser: NextPage<indexProps> = ({}) => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default CreateUser;
