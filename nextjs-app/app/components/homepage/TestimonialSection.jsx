import Image from 'next/image'
import React from 'react'

const TestimonialSection = () => {
  return (
   <section className='w-screen h-[90vh] px-[4vw] bg-gradient text-white relative' id='testimonial-section'>
    <div className='w-full h-full flex justify-between  pl-[5vw] pt-[12%]'>
        <div className='flex flex-col gap-[1vw] '>
            <Image src={"/assets/images/homepage/testimonial/testimonial-image-1.png"} alt='testimonial image' className='w-[7.5vw] h-[7.5vw] rounded-full' width={100} height={100} />
            <p className='text-[5.5vw] font-display leading-[1]'>
             Paul Lees
            </p>
            <p>CEO , Patronum</p>
        </div>
        <div className='flex flex-col gap-[2vw] w-[45%]'>
            <Image src={"/assets/icons/quote-icon.svg"} alt='quote icon' className='' width={50} height={50}/>
            <p>Enigma Digital's mastery of web design and development is truly unparalleled. Their ability to craft a website that not only captured our essence but also transformed our digital presence is nothing short of miraculous. We are beyond thrilled with the results and can't thank the Enigma team enough for their tireless dedication and creativity. Our collaboration has been a game-changer for Wragby Business Solutions, and we wholeheartedly recommend Enigma Digital to anyone seeking a top-notch digital partner!</p>
        </div>
        <div className='w-full absolute bottom-0 left-0 h-[30vh] flex justify-center items-end '>
            <span className='bg-white h-[20vh] w-[1px]'/>

        </div>

    </div>
   </section>
  )
}

export default TestimonialSection