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
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

const Dashboard: NextPage<DashboardProps> = ({ session }) => {
  // UseQuery to fetch data (after 20 secs, data considered stale)
  // If data is fresh, it will used cached data repeatedly
  // If stale, data will be re-fetched on window refocus, reconnect or re-mounting
  // The 'key' is used as a unique identifier to re-grab cached data

  const { isLoading, error, data } = useQuery<any>(
    ["workouts"],
    async () =>
      fetch(`./api/workouts/${session?.user?.email}`).then((res) => res.json()),
    { staleTime: 10000 }
  );

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  console.log(data);

  return (
    <div className="col-span-10 space-y-4 ">
      <div className="relative flex-col md:flex-row flex md:justify-start justify-center">
        <div className="flex  ml-10 md:flex-col flex-row">
          <h1 className="text-2xl text-start">
            {/* {convertFirstLetterToUpperCase(session.user.name)}'s */}
          </h1>
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
        {<RecentActivity userWorkouts={data?.userWorkouts} />}

        <ProfileCard session={session} />
      </div>
    </div>
  );
};

export default Dashboard;
