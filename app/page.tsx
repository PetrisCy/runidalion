import Charity from "../components/charity";
import Contact from "../components/contact";
import Hero from "../components/hero";
import Location from "../components/location";
import Nav from "../components/nav";
import NextRun from "../components/next-run";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* <Sponsors /> */}
        <Charity />
        <NextRun />
        <Location />
        <Contact />
      </main>
    </>
  );
}
