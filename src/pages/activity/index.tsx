import DashNav from "@/components/DashNav/DashNav";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { convertFirstLetterToUpperCase } from "@/utils/toUpperCase";
import Link from "next/link";

interface indexProps {}

const RecentActivity: NextPage<indexProps> = ({}) => {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      return <h1>Loading....</h1>;
    },
  });

  if (status === "authenticated") {
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

        <div className="flex flex-wrap"></div>
      </div>
    );
  }
};

export default RecentActivity;
