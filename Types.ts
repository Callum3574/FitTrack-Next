import { Session } from "next-auth";

//Auth
export interface SessionProps {
  expires: string;
  user: {
    name: string;
    email: string;
    image?: string;
  };
}

//Dashboard
export interface ProfileCardProps {
  session: SessionProps[];
}

export interface DashboardProps {}

//Add new exercise
export interface AmountOfInputs {
  name: string;
  type: string;
}

export interface FormInput {
  ExerciseType: string;
  Location: string;
  Duration: string;
  Calories: string;
  TimeAndDate: string;
  Distance: string;
}
