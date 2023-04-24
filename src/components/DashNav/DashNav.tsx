import { FC } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsActivity, BsGraphUpArrow } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
import { GiAchievement, GiWeightLiftingUp } from "react-icons/gi";

interface DashNavProps {}

const DashNav: FC<DashNavProps> = ({}) => {
  return (
    <div className="rounded-3xl py-2 mx-80  shadow-lg w-auto ">
      <ul className="flex items-center justify-center text-center space-x-8 text-black mt-1 mb-1">
        <li
          className="rounded-xl w-20 h-12 flex-none items-center flex justify-center transition duration-300 ease-in-out hover:bg-slate-500 cursor-pointer tooltip"
          data-tip="Activity"
        >
          <BsActivity size={40} className="text-white" />
        </li>
        <li
          className="rounded-xl w-20 h-12 flex-none items-center flex justify-center transition duration-300 ease-in-out hover:bg-slate-500 cursor-pointer tooltip"
          data-tip="Add exercise"
        >
          <BiAddToQueue size={40} className="text-white" />
        </li>
        <li
          className="rounded-xl w-20 h-12 flex-none items-center flex justify-center transition duration-300 ease-in-out hover:bg-slate-500 cursor-pointer tooltip"
          data-tip="Goals"
        >
          <GiAchievement size={40} className="text-white" />
        </li>
        <li
          className="rounded-xl w-20 h-12 flex-none items-center flex justify-center transition duration-300 ease-in-out hover:bg-slate-500 cursor-pointer tooltip"
          data-tip="Averages"
        >
          <BsGraphUpArrow size={40} className="text-white" />
        </li>
        <li
          className="rounded-xl w-20 h-12 flex-none items-center flex justify-center transition duration-300 ease-in-out hover:bg-slate-500 cursor-pointer tooltip"
          data-tip="Weights"
        >
          <GiWeightLiftingUp size={40} className="text-white" />
        </li>
      </ul>
    </div>
  );
};

export default DashNav;
