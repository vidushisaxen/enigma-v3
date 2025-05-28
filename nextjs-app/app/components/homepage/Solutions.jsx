import Image from "next/image";
import React from "react";

const Solutions = () => {
  return (
    <section className="w-screen px-[4vw] h-screen py-[5vw]">
      <div className="w-full flex flex-col ">
        <h2 className="w-full flex justify-between">
          <span>Development</span>
          <span>001</span>
        </h2>
        <span className="w-full h-[1px] bg-black mt-[7vw] mb-[2vw]" />
        <div className="flex flex-col gap-[5vw]">
          <p className="w-[70%] text-[1.5vw]">
            A human-centred, design-led approach to product development that
            leverages cutting-edge technologies & agile methodology, committed
            to putting you on a path to success in the ever-changing
            technological landscape. We craft digital solutions that are not
            just functional, but also intuitive and engaging.
          </p>
          <div className="w-full flex justify-between items-end">
            <div className="w-[70%] flex flex-wrap uppercase h-fit text-[0.9vw] gap-x-[4vw] gap-y-[1.5vw]">
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
            </div>
            <div className="w-fit flex">
              <div className="w-fit h-full px-[3.5vw] py-[0.7vw] rounded-full border border-black-1 font-medium font-display">
               Know More
              </div>
              <div className="w-[3.4vw] h-[3.4vw] p-[1.1vw] rounded-full border border-black-1">
                <Image
                  src={"/assets/icons/arrow-diagonal.svg"}
                  alt="arrow-diagonal"
                  width={50}
                  height={50}
                  className="w-full h-full object-contain invert"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
