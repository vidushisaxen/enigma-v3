import React from 'react'
import HeroComp from './components/homepage/Hero/HeroComp'
import About from './components/homepage/About'
import Work from './components/homepage/Work'
import Testiomonials from './components/homepage/Testimonials'
import Solutions from './components/homepage/Solutions'
import Clients from './components/homepage/Clients'
import Industries from "./components/homepage/Industries"
import Achievements from './components/homepage/Achievements'
import FAQ from './components/homepage/FAQ'
import WaveShader from './components/WaveShader'
import MainHero from './components/MainHero'
import FractalWithWave from './components/homepage/FractalWithWave'

const page = () => {
  return (
    <>
   <HeroComp/>
    <About/>
    <Work/>
    <Testiomonials/>
    <Solutions/>
    <Industries/>
    <Achievements/>
    <Clients/>
    <FAQ content={faqContent}/> 
     {/* <div className='relative h-screen w-screen bg-black'>
    <WaveShader topColor = {[0.0, 0.0, 0.0]} 
  middleColor = {[1.0, 0.5, 0.0]} 
  bottomColor = {[1.0, 0.3, 0.0]} reverse={false}/>
    </div> */}
    {/* <FractalWithWave/> */}
    </>
  );
};

export default page;
const faqContent = [
  {
    question: 'What is Montra?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: 'Is Montra licensed?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: 'What is unique about Montra?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: 'How do we Sign-Up on Montra?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking.",
  },
  {
    question: 'How do we Sign-In on Montra?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: 'Is enabling Face / Touch / Fingerprint ID safe?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
]
