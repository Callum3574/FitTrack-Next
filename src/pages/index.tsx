import Image from "next/image";
import { Quicksand } from "next/font/google";
import Hero from "@/components/Hero/Hero";
import Overview from "@/components/Overview/Overview";
import Newsletter from "@/components/Newsletter/Newsletter";
import Navbox from "@/components/Navbox/Navbox";

const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  return (
    <main>
      <Hero />
      <Overview />
      <Newsletter />
      <Navbox />
    </main>
  );
}
