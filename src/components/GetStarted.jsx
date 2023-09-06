import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div onClick={() => window.open("https://www.instagram.com/rutilans_mx/")}>
      {/* <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-white p-[2px] cursor-pointer relative z-[2]`}></div> */}
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-primary border-2 border-black p-[2px] cursor-pointer z-[8]`}>
       <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%]`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className='font-poppins text-[18px] font-medium'>
                    <span>Contacto</span>
                </p>
                <img src={arrowUp} className='w-[23px] h-[23px] object-contain'/>  
            </div>
        </div> 
    </div>
    </div>
  )
}

export default GetStarted