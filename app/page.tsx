import type { Metadata } from "next";
import PretextBlackHole from "./_components/pretext-black-hole";

export const metadata: Metadata = {
  title: "Black Hole - Media Art",
  description:
    "A Pretext-powered canvas black hole that warps flowing text with gravitational lensing, accretion particles, and Hawking radiation.",
};

export default function Home() {
  return <PretextBlackHole className="fixed inset-0 h-screen w-screen" />;
}
