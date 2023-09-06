import React from 'react'
import {catalogue} from '../constants/index'
import ProductCard from './ProductCard'

const Catalogue = () => {
  return (
    <div id="catalogue" className=''>{catalogue.map((prod) => (
      
      <ProductCard 
        id={prod.id}
        title={prod.title}  
        content={prod.content} 
        name={prod.name} 
        img={prod.img}
        />
        
    ))}</div>
  )
}

export default Catalogue