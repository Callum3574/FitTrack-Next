import DashNav from "@/components/DashNav/DashNav";
import Image from "next/image";
import { FC } from "react";
import { useSession } from "next-auth/react";
import FitnessOverview from "@/components/FitnessOverview/FitnessOverview";
import ProgressCard from "@/components/Progress/ProgressCard";
import Totals from "@/components/Totals/Totals";
import RecentActivity from "@/components/RecentActivity/RecentActivity";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import { DashboardProps, SessionProps } from "../../../Types";
import { NextPage } from "next";

const Dashboard: NextPage<DashboardProps> = ({}) => {
  const { data: session }: { data: any } = useSession();

  return (
    <div className="col-span-10 space-y-4 ">
      <div className="relative flex-col md:flex-row flex md:justify-start justify-center">
        <div className="flex  ml-10 md:flex-col flex-row">
          <h1 className="text-2xl text-start">Callum's</h1>
          <span className="text-2xl text-bold text-[#53B3CB] text-start md:ml-0 ml-2 ">
            Dashboard
          </span>
        </div>
        <DashNav />
      </div>

      <div className="flex flex-wrap">
        <ProgressCard />
        <FitnessOverview />
        <Totals />
        <RecentActivity />
        <ProfileCard session={session} />
      </div>
    </div>
  );
};

export default Dashboard;