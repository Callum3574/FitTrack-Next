import Login from "@/components/Auth/Login";
import { NextPage } from "next";

interface indexProps {}

const SignIn: NextPage<indexProps> = ({}) => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default SignIn;
