import { Session } from "next-auth";

export interface DashboardProps {}

export interface SessionProps {
  expires: string;
  user: {
    name: string;
    email: string;
    image?: string;
  };
}

export interface ProfileCardProps {
  session: SessionProps[];
}
