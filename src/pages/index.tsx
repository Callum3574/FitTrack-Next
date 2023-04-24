import { Quicksand } from "next/font/google";
import Hero from "@/components/Hero/Hero";
import Overview from "@/components/Overview/Overview";
import Newsletter from "@/components/Newsletter/Newsletter";
import Navbox from "@/components/Navbox/Navbox";

const quicksand = Quicksand({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  return (
    <main className={quicksand.className}>
      <Hero />
      <Overview />
      <Newsletter />
      <Navbox />
    </main>
  );
}
