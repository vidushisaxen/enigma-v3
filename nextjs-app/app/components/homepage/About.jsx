import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-screen h-screen px-[4vw] py-[10%] bg-black-1" id="about">
      <div className="w-full flex justify-between text-white">
        <div className="flex gap-[1vw] items-center h-fit">
            <span className="w-[5px] h-[5px] rounded-full bg-white"/>
            <p className="text-[1.5vw] uppercase">About us</p>
        </div>
        <div className="flex flex-col gap-[4vw] w-[57%]">
            <h3>
            From Concept to Conversion We're Changing the Face of Web.
            </h3>
          <p className=" text-[1.5vw] text-[#c7c7c7] w-[90%]">
            We unravel complex design challenges through meticulous user
            research, expert analysis, prototyping, and collaborative design
            with users and stakeholders. Harnessing the power of cutting-edge
            tools and our proprietary approach we craft delightful and intuitive
            experiences.
          </p>
          <div className="w-fit flex">
            <div className="w-fit h-full px-[3.5vw] py-[0.7vw] rounded-full border border-white font-medium font-display">
                Say Hi
            </div>
            <div className="w-[3.5vw] h-[3.5vw] p-[1.1vw] rounded-full border border-white">
             <Image src={"/assets/icons/arrow-diagonal.svg"} alt="arrow-diagonal" width={50} height={50} className="w-full h-full object-contain"/>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
