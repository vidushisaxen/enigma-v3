import Image from 'next/image'
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Work = () => {
  return (
    <section className='w-screen h-fit px-[4vw] py-[7vw] bg-black-1'>
        <div className='w-full h-[90vh] flex justify-between gap-[1vw] sticky top-[5%]'>
            <div className='w-full h-full rounded-[2.5vw] bg-primary p-[2vw] flex flex-col justify-between work-1-content'>
                <p className='text-[8vw] w-[75%] font-display leading-[1]'>
                Garden
                City Mall
                </p>
                <div className='flex justify-between text-white'>
                    <span>2023</span>
                    <div className='flex gap-[2.5vw]'>
                        <span>
                        Web Design
                        </span>
                        <span>
                        Branding
                        </span>
                        <span>
                        Marketing
                        </span>
                    </div>
                </div>

            </div>
            <div className='w-full h-full rounded-[2.5vw] bg-[#33EAFF] flex justify-center items-center work-1-mockup'>
              <div className='w-full h-full'>
                <Image src={"/assets/images/homepage/work/work-mockup-1.png"} alt='' className='w-full h-full object-contain' width={800} height={500}/>

              </div>
            </div>

        </div>

    </section>
  )
}

export default Work