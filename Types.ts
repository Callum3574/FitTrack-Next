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
  exerciseType: string;
  location: string;
  duration: string;
  calories: string;
  timeAndDate?: string;
  distance: string;
  user: string;
  steps: string;
}

export interface ExerciseData {
  user: string;
  distance: string;
  date: Date;
  time: string;
  calories: string;
  location: string;
  steps: string;
  duration: string;
  timeAndDate: string;
}
