import { FC, useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { convertFirstLetterToUpperCase } from "@/utils/toUpperCase";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [isOpen, setOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const { data: session } = useSession();

  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
  };

  return (
    <div className=" h-24 max-w-full mx-auto px-1 text-white mb-10 top-0 relative border-b border-[#53B3CB]">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-1 text-white w-full">
        <h1 className="text-4xl text-[#53B3CB] font-thin cursor-pointer ml-5">
          FitTrack.
        </h1>

        <ul className="text-[#f2f2f2] text-xl hidden md:flex">
          <Link href="/">
            <li className="p-4 cursor-pointer font-thin">Home</li>
          </Link>
          <li className="p-4 cursor-pointer font-thin">About</li>
          <Link href="/workout">
            <li className="p-4 cursor-pointer font-thin">Workout</li>
          </Link>
          <li className="p-4 cursor-pointer font-thin">Community</li>
          <Link href="/login">
            <li className="p-4 cursor-pointer font-thin">
              {!session
                ? "Login"
                : `Welcome, ${convertFirstLetterToUpperCase(
                    session.user.name
                  )}`}
            </li>
          </Link>
        </ul>
        <div className="md:hidden">
          <Hamburger color="#53B3CB" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {isOpen && (
        <div className="top-0 left-0 right-0 origin-top animate-open-menu bg-[#0c090d] ">
          <ul className="text-[#f2f2f2] text-4xl md:hidden flex flex-col text-center">
            <Link href="/">
              <li className="p-4 cursor-pointer font-thin">Home</li>
            </Link>
            <li className="p-4 cursor-pointer font-thin">About</li>
            <li className="p-4 cursor-pointer font-thin">Workout</li>
            <li className="p-4 cursor-pointer font-thin">Community</li>
            <Link href="/login">
              <li className="p-4 cursor-pointer font-thin">
                {!session ? "Login" : `Welcome, ${session.user.name}`}
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
