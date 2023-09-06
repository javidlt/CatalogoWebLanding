import React from 'react'

const ProductCard = ({name, title, content, img, id}) => {
  return (
    
    <div id={id} className='px-4 py-4 md:px-0 md:py-0 flex md:flex-row flex-col h-[60vh] md:h-[400px] w-full border-b-2 border-black'>
      <div className='w-full md:w-1/2 md:h-full h-2/3 border-r-2 border-y-2 md:border-y-0 border-l-2 md:border-l-0 border-black '>
        <img src={img} className='w-full h-full object-cover'/>
      </div>
      <div className='md:border-t-0 border-black w-full md:w-1/2 md:h-full h-1/3'>
        <div className='h-[60%] md:h-3/4 px-0 md:px-6 md:pb-6 flex items-start md:items-end mt-1 md:mt-0'>
         <div>
          <h1 className='font-semibold text-2xl md:text-[28px] font-poppins'>{title}</h1> 
          <p className='text-xl md:text-[24px] font-poppins'>{content}</p> 
         </div>
        </div>
        <div className='h-[40%] md:h-1/4 border-t-2 border-x-2 border-b-2 md:border-x-0 md:border-b-0 border-black bg-third flex items-center px-6'>
          <h2 className='text-3xl text-white  font-poppins'>{name}</h2>
        </div>
      </div>
    </div>
  )
}

export default ProductCard