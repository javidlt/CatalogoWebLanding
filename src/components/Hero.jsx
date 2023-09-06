import React from 'react'
import styles from '../style'
import { logoblanco, robot, imageJewerly } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingHeroY} items-center`}>
      <div className={`flex-1 flex justify-center items-center md:items-start flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex items-center py-[8px] px-4 bg-discount-gradient rounded-[6px] mb-2'>
          <img src={logoblanco} alt="dicount" className='w-[27px] h-[20] mr-3' />
          <p className={`${styles.paragraph}`}>La mejor calidad</p> 
        </div>
        <div className='flex flex-row justify-between items-center w-full text-center md:text-left'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[90px] leading-[75px]'>
            Joyería
            <br className="sm:block hidden"/> {" "}
            <span className='text-third'>para personas</span><br className="sm:block hidden"/> {" "}
          </h1>
         {/* boton contacto  */}
         <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted/>
         </div>
        </div>
        <h1  className='text-center md:text-left font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[90px] leading-[75px] w-full'>
          como usted
        </h1>
        <p className={`text-center md:text-left font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>Marca mexicana realizada pensando en llevar a las personas joyería de calidad a precios justos.</p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-0 relative ss:mt-0 mt-10`}>
        <img src={imageJewerly} alt="joyas" className='w-[100%] h-[90%] relative z-[5]' /> 
        <div className='absolute z-[0] w-[40%] h-[35%] top-[200px] pink__gradient'></div>
        <div className='absolute z-[1] w-[20%] h-[50%] rounded-full bottom-40 white__gradient'></div>
        <div className='absolute z-[0] w-[40%] h-[35%] top-[200px] pink__gradient'></div>
      </div>
      <div className={`ss:hidden mt-10 ${styles.flexStart}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero