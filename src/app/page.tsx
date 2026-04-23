import HeroSection from "@/components/HeroSection";
import ProjectScope from "@/components/ProjectScope";
import Milestones from "@/components/Milestones";
import Downloads from "@/components/Downloads";
import Technologies from "@/components/Technologies";
import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AquaNext Research | AI-Driven Smart Shrimp Farming",
  description:
    "AquaNext is a SLIIT research project leveraging AI, IoT, and computer vision to revolutionize sustainable shrimp aquaculture management.",
  keywords: [
    "AquaNext",
    "AI aquaculture",
    "shrimp farming",
    "water quality prediction",
    "SLIIT research",
    "smart farming",
  ],
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectScope />
      <Milestones />
      <Downloads />
      <Technologies />
      <AboutUs />
      <ContactSection />
    </>
  );
}
