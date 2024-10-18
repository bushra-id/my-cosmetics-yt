import React from 'react';
import BlogCard from './BlogCard';

const data = [
    {
        img:"/blog1.png",
        title:"Best Quality Makeup Products",
        date:"Sep 27, 2024",
        Comment: 8,
    },
    {
        img:"/blog2.png",
        title:"Extremly long lashes Maskara",
        date:"Sep 22, 2024",
        Comment: 5,
    },
    {
        img:"/blog3.png",
        title:"Full high coverage Foundation",
        date:"Out 1, 2024",
        Comment: 3,
    },
]

const BlogSection = () => {
  return (
    <div className='container pt-32'>
        <h2 className='font-bold text-2xl'>Latest News</h2>
        <p className='text-gray-500'>
            present posts in a best way to highlight 
            interesting moments of your blog.
        </p>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
        {data.map(item => <BlogCard
            key={item.date}
            img={item.img}
            title={item.title}
            date={item.date}
            comment={item.Comment} 
            />
     )}
     </div>  
      
    </div>
  )
}

export default BlogSection
