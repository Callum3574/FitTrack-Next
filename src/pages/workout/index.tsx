import { useState } from "react";
import DashNav from "@/components/DashNav/DashNav";
import FitnessOverview from "@/components/FitnessOverview/FitnessOverview";
import ProgressCard from "@/components/Progress/ProgressCard";
import Totals from "@/components/Totals/Totals";
import RecentActivity from "@/components/RecentActivity/RecentActivity";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import { DashboardProps } from "../../../Types";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { convertFirstLetterToUpperCase } from "@/utils/toUpperCase";
import Link from "next/link";

const Dashboard: NextPage<DashboardProps> = ({}) => {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      return <h1>Loading....</h1>;
    },
  });

  // UseQuery to fetch data (after 20 secs, data considered stale)
  // If data is fresh, it will used cached data repeatedly
  // If stale, data will be re-fetched on window refocus, reconnect or re-mounting
  // The 'key' is used as a unique identifier to re-grab cached data
  // enabled is ensuring that the status is authenticated before fetching data
  const { isLoading, error, data } = useQuery<any>(
    ["workouts"],
    async () =>
      fetch(`./api/workouts/${session?.user?.email}`).then((res) => res.json()),
    { staleTime: 10000, enabled: status === "authenticated" }
  );

  // If the data is undefined, we will assume the data has NOT been fetched.
  // We also ensure the status of session is authenticated.
  if (typeof data !== "undefined" && status === "authenticated") {
    return (
      <div className="col-span-10 space-y-4 z-1">
        <div className="relative flex-col md:flex-row flex md:justify-start justify-center">
          <div className="flex  ml-10 md:flex-col flex-row">
            <Link href="/workout">
              <h1 className="text-2xl text-start">
                {convertFirstLetterToUpperCase(session?.user?.name)}s
              </h1>
              <span className="text-2xl text-bold text-[#53B3CB] text-start md:ml-0 ml-2 ">
                Dashboard
              </span>
            </Link>
          </div>
          <DashNav />
        </div>

        <div className="flex flex-wrap">
          <ProgressCard data={data.userWorkouts} />
          <FitnessOverview data={data.userWorkouts} />
          <Totals data={data.userWorkouts} />
          <RecentActivity data={data.userWorkouts} />
          <ProfileCard session={session} />
        </div>
      </div>
    );
  } else {
    return <Link href="/login">Sign-in</Link>;
  }
};

export default Dashboard;
