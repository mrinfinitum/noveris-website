import type { Metadata } from "next";
import { NoverisHome } from "./noveris-home";

export const metadata: Metadata = {
  title: "NOVERIS | The Future We Build",
  description:
    "A premium civilization, exploration, automation, and discovery game about humanity's future among the stars.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <NoverisHome />;
}
