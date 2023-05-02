import { useState } from "react";
import { useSession } from "next-auth/react";
import { convertFirstLetterToUpperCase } from "@/utils/toUpperCase";
import DashNav from "@/components/DashNav/DashNav";
import Link from "next/link";
import GoalCard from "@/components/GoalCard/GoalCard";
import { NextPage } from "next";

interface indexProps {}

const Goals: NextPage<indexProps> = ({}) => {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      return <h1>Loading....</h1>;
    },
  });

  const [formInput, setFormInput] = useState({
    type: "",
    target: "",
    timeFrame: "",
    goalName: "",
    goalDesc: "",
    userEmail: session?.user?.email,
  });

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitNewGoal = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/addgoal/addgoal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formInput }),
      });
      const data = await res.json();
      if (data.message === "user not authenticated") {
        alert(data.message);
      }
    } catch (e) {
      throw e;
    }
  };

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
        <div className="flex ">
          <DashNav />
          <label htmlFor="my-modal" className="btn mt-2">
            New goal
          </label>
        </div>
      </div>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Set a new goal!</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <form onSubmit={submitNewGoal}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  Pick the type of goal you want to set
                </span>
              </label>
              <select
                className="select select-bordered"
                onChange={handleFormInput}
                name="type"
                required
              >
                <option disabled selected>
                  Pick one
                </option>
                <option value="calories">Calories</option>
                <option value="distance">Distance</option>
                <option value="walks">Walks</option>
                <option value="runs">Runs</option>
                <option value="steps">Steps</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your target? (km)</span>
              </label>
              <input
                type="text"
                placeholder="e.g: 50"
                className="input input-bordered w-full max-w-xs"
                name="target"
                onChange={handleFormInput}
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  What time frame will this be completed in? (days)
                </span>
              </label>
              <input
                type="text"
                placeholder="e.g: 7"
                className="input input-bordered w-full max-w-xs"
                name="timeFrame"
                onChange={handleFormInput}
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  What is the name of this goal?
                </span>
              </label>
              <input
                type="text"
                placeholder="e.g: Jogging Hero"
                className="input input-bordered w-full max-w-xs"
                name="goalName"
                onChange={handleFormInput}
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  What is the description of this goal?
                </span>
              </label>
              <input
                type="text"
                placeholder="e.g: Aiming to reach 50k in 1 week"
                className="input input-bordered w-full max-w-xs"
                name="goalDesc"
                onChange={handleFormInput}
                required
              />
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn bg-red-800">
                Close
              </label>
              <button type="submit" className="btn bg-green-900">
                Submit!
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-wrap p-5">
        <GoalCard />
        <GoalCard />
      </div>
    </div>
  );
};

export default Goals;
