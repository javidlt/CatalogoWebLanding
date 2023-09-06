import React from 'react'
import styles from '../style'
import { logonegro } from '../assets/index'
import { footerLinks } from '../constants/index'

const Footer = () => {
  return (
    <section className={`${styles.paddingX} ${styles.flexCenter} ${styles.paddingFooterY} flex-col border-t-2 border-black`}>
      <div className={`${styles.flexStart} md:flex-row flex-col w-full `}>
       <div className='flex-1 flex flex-col justify-start mr-10'>
          <img  
            src={logonegro}
            alt="rutilans"
            className='w-[96.48px] h-[72px]'
          />
         <p className={`${styles.paragraphblack} mt-4 max-w-[310px]`}>Joyería realizada con amor.</p> 
        </div> 
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 font-poppins'>
          {footerLinks.map((l) => (
            <div key={l.key} className='flex ss:my-0 my-4 min-w-[150px] flex-col'>
              <h4 className='font-medium'>
                {l.title}
              </h4>
              <ul>
                {l.links.map((link) => (
                  <li 
                    key={link.name} 
                    className='font poppins font-normal text-[16px] leading-[24px] text-black hover:font-medium hover:text-third cursor-pointer'
                    onClick={() => window.open(link.link)}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer