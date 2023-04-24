import Achievements from "@/components/Achievements/Achievements";
import DashNav from "@/components/DashNav/DashNav";
import FitnessOverview from "@/components/FitnessOverview/FitnessOverview";
import FriendList from "@/components/FriendsList/FriendList";
import Overview from "@/components/Overview/Overview";
import ProgressCard from "@/components/Progress/ProgressCard";
import { FC } from "react";

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return (
    <div className="flex md:flex-row flex-col justify-start md:space-x-12 h-full mx-auto px-1 text-white w-full max-w-full">
      <DashNav />
      <div className="md:w-full md:flex md:flex-col md:items-start text-center -mb-10">
        <div className="mb-5">
          <h1>Callum's</h1>
          <span className="text-xl font-bold">Dashboard</span>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-10 justify-start w-full md:pr-8 p-10 md:p-0 h-screen md:h-full">
          <FitnessOverview />
          <Achievements />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-10 justify-start w-full md:pr-8 p-10 md:p-0 mb-10">
          <ProgressCard />
          <ProgressCard />
          <ProgressCard />
        </div>
      </div>
    </div>
  );
};

export default index;
