import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Services } from "@/components/Services";
import { Newsletter } from "@/components/Newsletter";
import { FAQ } from "@/components/FAQ";
import { Apply } from "@/components/Apply";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <Newsletter />
      <FAQ />
      <Apply />
    </>
  );
}
