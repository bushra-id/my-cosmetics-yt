import { title } from 'process';
import React from 'react';
import FeatureCart from './FeatureCart';

const data =[
    {
     img:"/icon_cosmetic.png" ,
     title: "Naturally Derived",
     desc: "Natural and organic beauty product",
    },
    {
        img:"/icon_ship.png" ,
     title: "Free Shipping",
     desc:"Free shipping on all products over $99",
    },
    {
        img:"/icon_money.png" ,
        title: "Secure Payment",
        desc: "Fully protected when paying online",
    }
]
const Feature = () => {
  return (
    <div className='container pt-16'>
    <div className='grid md:grid-cols-2 gap-y-8 lg:gap-y-4 lg:grid-cols-3 gap-4'>
        {data.map(item => <FeatureCart 
        key={item.title} 
        img={item.img} 
        title={item.title} 
        desc={item.desc} />)}</div>    
    </div>
  )
}

export default Feature
