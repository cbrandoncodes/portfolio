import HomeHero from "./home/hero";
import HomeExpertise from "./home/expertise";
import HomeProjects from "./home/projects";
import HomeTestimonials from "./home/testimonials";
import { baseMetadata } from "@/utils/base-metadata";
import { Metadata } from "next";

export const metadata: Metadata = baseMetadata({
  title: "Full-Stack Developer - Brandon",
  description: "Full-Stack Developer - Brandon",
  slug: "/",
});

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeExpertise />
      <HomeProjects />
      <HomeTestimonials />
    </>
  );
}
