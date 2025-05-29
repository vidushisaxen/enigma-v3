import React from "react";
import HeroComp from "./components/homepage/Hero/HeroComp";
import About from "./components/homepage/About";
import Work from "./components/homepage/Work";
import SectionBreak from "./components/Homepage/SectionBreak";
import Testiomonials from "./components/homepage/Testimonials";
import Solutions from "./components/homepage/Solutions";
import Clients from "./components/homepage/Clients";
import Industries from "./components/Homepage/Industries";
import Achievements from "./components/Homepage/Achievements";
import FAQ from "./components/Homepage/FAQ";
import Blogs from "./components/Homepage/Blogs";
import WaveShader from "./components/WaveShader";
import MainHero from "./components/MainHero";
import FractalWithWave from "./components/Homepage/FractalWithWave";
import Footer from "./components/Homepage/Footer";

const page = () => {
  return (
    <>
      {/* <HeroComp/> */}
      {/* <Hero/> */}
      {/* <About />
      <Work />
      <SectionBreak/> */}
      <Testiomonials />
      {/* <Solutions />
      <Industries />
      <Achievements />
      <Clients />
      <FAQ content={faqContent} /> */}
      {/* <div className="relative h-screen w-screen mt-[-40vw] bg-black">
        <WaveShader
          topColor={[1.0, 1.0, 1.0]}
          middleColor={[1.0, 0.5, 0.0]}
          bottomColor={[1.0, 0.3, 0.0]}
          reverse={false}
        />
      </div> */}
      {/* <Footer/> */}
      {/* <FractalWithWave/> */}
    </>
  );
};

export default page;
const faqContent = [
  {
    question: "How long does a project usually take?",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
];
