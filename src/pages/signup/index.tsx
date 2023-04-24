import Signup from "@/components/Auth/Signup";
import { FC } from "react";
import { CgProfile } from "react-icons/cg";

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default index;
