//Auth
export interface SessionProps {
  expires: string;
  user: {
    name: string;
    email: string;
    image: string;
  };
}

//Dashboard
export interface ProfileCardProps {
  session: any;
}
export interface RecentActivityProps {
  data: WalksAndRuns[];
}

export interface TotalsProps extends RecentActivityProps {}
export interface FitnessOverviewProps extends RecentActivityProps {}
export interface ProgressCardProps extends RecentActivityProps {}
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
  user_email: string;
  steps: string;
}

export interface ExerciseData {
  user_email: string;
  distance: string;
  date: Date;
  time: string;
  calories: string;
  location: string;
  steps: string;
  duration: string;
  timeAndDate: string;
  exerciseType: string;
}

//View all workouts

export interface WalksAndRuns {
  id: number;
  workout_type: String;
  user_email: string;
  distance: number;
  date: Date;
  time: string;
  calories: number | null;
  location: string;
  steps: number;
  duration: number;
}
