import React from 'react'
import Hero from './components/homepage/Hero'
import About from './components/homepage/About'
import Work from './components/homepage/Work'
import Testiomonials from './components/homepage/Testimonials'
import WaveShader from './components/WaveShader'
import MainHero from './components/MainHero'

const page = () => {
  return (
    <>
    <div className="w-screen h-[90vh] px-[4vw] py-[5vw] flex justify-between items-end">
      {/* <h1 className="flex flex-col"><span>Digital</span><span>Experience</span><span>Design Agency</span></h1> */}
      <h3 className="w-[60%]">From Concept to Conversion We're Changing the Face of Web.</h3>
      <p className="w-[27%]">Harnessing the power of Emotion, Design, Technology & Neuromarketing, we create Digital Brand Experiences that propel your success in the enigmatic realm of bits & bytes.</p>
    </div>
    <About/>
    <Work/>
    <Testiomonials/>
    </>
  );
};

export default page;
