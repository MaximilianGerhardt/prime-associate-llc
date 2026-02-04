import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";

const Benefits = dynamic(() => import("@/components/Benefits").then(mod => mod.Benefits));
const Services = dynamic(() => import("@/components/Services").then(mod => mod.Services));
const TechStack = dynamic(() => import("@/components/TechStack").then(mod => mod.TechStack));
const Newsletter = dynamic(() => import("@/components/Newsletter").then(mod => mod.Newsletter));
const FAQ = dynamic(() => import("@/components/FAQ").then(mod => mod.FAQ));
const Apply = dynamic(() => import("@/components/Apply").then(mod => mod.Apply));

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <TechStack />
      <Newsletter />
      <FAQ />
      <Apply />
    </>
  );
}
