"use client"
import React, { useEffect, useState } from 'react';
import { Whisper} from 'next/font/google';
import Data from '@/utils/productData';
import ProductCard, { IProduct } from './ProductCard';

const whisper = Whisper({subsets: ["latin"], weight: ["400"]})

const tabsData = ["All", "Lipsticks", "Makeup", "Nailpolish", "Lipglose"]

const NewArival = () => {

const [selectedTab, setSelectedTab] = useState(0); 
const [data, setData] = useState([]);

const shuffleArray = (array: any) => {
    return array.map((value:any) => ({ value, sort: Math.random() }))
    .sort((a:any,b:any) => a.sort - b.sort)
    .map(({value}: any) => value);
};

useEffect(() =>{
    setData(shuffleArray(Data).slice(0, 15))
}, [])

const handleTab = (index: number) => {
 const category = tabsData[index].toLowerCase()   
    setSelectedTab(index);

 if(category === 'all'){
    setData(shuffleArray(Data).slice(0, 15));
    return
 }  
 
 const filterData = Data.filter((item) => item.category.includes(category));
 setData(shuffleArray(filterData));
};

  return (
    <div className='container pt-32'>
     <div className='text-center'>
        <h3 className={`${whisper.className} text-[40px] text-gray-500`}>For Your Beauty</h3>
        <h2 className='text-semibold text-5xl'>New Arival</h2>

        <ul className='flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase
        font-medium, text-xl'>
            {tabsData.map((text, index) => <li key={text} className={`${
                selectedTab === index && 'text-accent'
            }cursor-pointer hover:text-accent`}
         onClick={() => handleTab(index)}   
          >
            {text}</li>
        )}
        </ul>
     <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8'>
        {data.map((item: IProduct) => (
            <ProductCard
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            sale={item.sale}
            />
        ))}
      </div>
     </div>   
    </div>
  );
};

export default NewArival
