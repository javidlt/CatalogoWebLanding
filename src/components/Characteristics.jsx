import React from 'react'
import { Characteristics } from '../constants/index'
import styles from '../style'
// 
const characteristics = () => {
  return (
    <div className={`bg-third  mt-4 border-y-2 border-black py-8 `}>
      {/* <ul className={`list-none sm:flex w-full justify-between items-center ${styles.paddingX}`}>
      {Characteristics.map((char) => (
          <li className='sm:w-1/3 w-full sm:mb-0 mb-4 font-poppins flex items-start gap-x-2'>
            <div className='border-l-[26] border-l-transparent
  border-t-[40px] border-t-primary
  border-r-[26px] border-r-transparent'>
            </div>
            <div className='border-l-[14px] border-l-transparent
  border-t-[30px] border-t-primary
  border-r-[14px] border-r-transparent'>
            </div>
            <div>
              <p className={`${styles.paragrawhite} font-medium`}>{char.title}</p>
            </div>
          </li>
      ))}
      </ul> */}
      <div className="relative flex overflow-x-hidden overflow-y-hidden">
  <div className="animate-marquee whitespace-nowrap text-white font-poppins">
    {Characteristics.map((char) => (
      <span className="sm:text-3xl text-lg mx-4">{char.title}</span>
    ))}
  </div>

  <div className="absolute top-0 animate-marquee2 whitespace-nowrap text-white font-poppins">
    {Characteristics.map((char) => (
      <span className="sm:text-3xl text-lg mx-4">{char.title}</span>
    ))}
  </div>
</div>

    </div>
  )
}

export default characteristics