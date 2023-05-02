import { FC } from "react";
import { BsActivity, BsGraphUpArrow } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import Link from "next/link";

interface DashNavProps {}

const DashNav: FC<DashNavProps> = ({}) => {
  return (
    <div className="rounded-3xl py-2 mx-4 sm:mx-6 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-24 shadow-lg w-auto">
      <ul className="flex items-center justify-center text-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
        <Link href="/activity">
          <li
            className="rounded-xl w-12 h-12 flex-none items-center flex justify-center transition duration-300 ease-in-out hover:bg-slate-500 cursor-pointer tooltip"
            data-tip="Activity"
          >
            <BsActivity size={40} className="text-white" />
          </li>
        </Link>

        <Link href="/addworkout">
          <li
            className="rounded-xl w-12 h-12 flex-none items-center flex justify-center transition duration-300 ease-in-out hover:bg-slate-500 cursor-pointer tooltip"
            data-tip="Add exercise"
          >
            <MdAdd size={40} className="text-white" />
          </li>
        </Link>
        <Link href="/goals">
          <li
            className="rounded-xl w-12 h-12 flex-none items-center flex justify-center transition duration-300 ease-in-out hover:bg-slate-500 cursor-pointer tooltip"
            data-tip="Goals"
          >
            <GiAchievement size={40} className="text-white" />
          </li>
        </Link>

        <li
          className="rounded-xl w-12 h-12 flex-none items-center flex justify-center transition duration-300 ease-in-out hover:bg-slate-500 cursor-pointer tooltip"
          data-tip="Averages"
        >
          <BsGraphUpArrow size={40} className="text-white" />
        </li>
      </ul>
    </div>
  );
};

export default DashNav;
