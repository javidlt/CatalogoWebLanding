import React from 'react'
import styles, {layout} from '../style'
import { features } from '../constants/index'
import {Button} from '../components/index'

const FeatureCard = ({index, icon, title, content}) => {
  return (
    <div className={`flex flex-row p-6 ${index !== features.length-1 ? 'mb-6' : 'mb-0'}`}>
      {/* <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-primary`}> */}
      <div className='border-l-[26] border-l-transparent border-t-[40px] border-t-third border-r-[26px] border-r-transparent'>
            
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-black text-[18px] leading-[23px] mb-1'>{title}</h4>
        <p className='font-poppins font-normal text-black text-[16px] leading-[24px] mb-1'>{content}</p>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section id="aboutUs" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Proveemos joyería cool, <br className='sm:block hidden'/> para gente cool como tu.</h2> 
        <p className={`${styles.paragraphblack} max-w-[470px] mt-5 md:flex hidden`}>Tenemos joyería de diferentes materiales (todos de excelente calidad) para adecuarnos perfecto al presupuesto que tengas. Todo pensado en que se te vea GENIAL</p>
        <Button 
          styles='mt-[16px]' 
          onClick={()=> window.open("https://www.instagram.com/rutilans_mx/")}
        />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>{
        features.map((f, index) => (
          <FeatureCard 
            key={f.id}
            {...f}
            index={index}
          />
        ))
      }</div>
    </section>
  )
}

export default Features