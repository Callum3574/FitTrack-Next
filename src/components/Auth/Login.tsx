import { FC } from "react";
import { CgProfile } from "react-icons/cg";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
interface SignupProps {}

const Login: FC<SignupProps> = ({}) => {
  const { data: session } = useSession();

  //! Required will redirect user to login page
  // const { data: session } = useSession({
  //   required: true,
  // });

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white text-center">
          Welcome, {session?.user?.name}
        </h1>
        <img
          src={session?.user?.image}
          alt="Profile Picture"
          className="mx-auto rounded-full mt-5"
        />
        <button
          className="rounded-lg bg-slate-400 w-20 h-10 mt-5 text-black"
          onClick={() => signOut()}
        >
          LOGOUT
        </button>
      </div>
    );
  }
  return (
    <div className="w-full py-16 text-white px-3 bg-white  ">
      <div className="mt-4 max-w-[1240px] mx-auto grid grid-cols-1 px-5 text-center lg:w-[400px] md:w-[400px]  sm:w-[400px] w-[350px] lg:h-[500px] md:h-[500px] sm:h-[500px] h-[500px] rounded-md shadow-xl hover:scale-105 duration-300">
        <CgProfile
          className="text-[#53B3CB] mx-auto mt-[-2rem] mb-10"
          size={40}
        />
        <h1 className="text-black lg:text-4xl md:text-3xl text-2xl mx-auto mt-[-8rem] h-[4rem] lg:mt-[-6rem]">
          Sign in
        </h1>
        <form className="flex flex-col mx-auto w-full lg:mt-[-5rem] mt-[-10rem]">
          <input
            className="w-full rounded-md p-3 flex text-black bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md"
            placeholder="Email Address *"
            type="email"
            name="email"
            required
          ></input>
          <input
            className=" w-ful rounded-md p-3 flex text-black mt-[1rem] bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md"
            placeholder="Password *"
            type="password"
            name="password"
            required
          ></input>
          <button
            onClick={() => signIn("google")}
            className="bg-[#53B3CB] w-full rounded-md font-medium my-6 py-2 mt-[3rem] text-black"
          >
            SIGN IN WITH GOOGLE
          </button>

          <div className="flex justify-between">
            <label className="block text-gray-500 font-bold my-4">
              <input type="checkbox" className="leading-loose text-pink-600" />
              <span className="py-2 text-sm text-gray-600 leading-snug">
                Remember Me
              </span>
            </label>
            <label className="block text-gray-500 font-bold my-4">
              <a
                href="/"
                className="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"
              >
                <span>Forgot Password?</span>
              </a>
            </label>
          </div>
          <label className="block text-gray-500  my-4">
            <a
              href="/signup"
              className="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"
            >
              <span>Dont have an account? Sign-Up!</span>
            </a>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
