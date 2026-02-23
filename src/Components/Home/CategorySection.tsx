import React from 'react';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Container from '../Shared/Container';
import CategoryCard from '../Cards/CategoryCard';

const CategorySection =async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/categories')
    const cate = await res.json()

    const categories = cate.slice(0,2)
    console.log(categories[0])
    return (
        <div className='bg-black'>
            <Container>

            <div className='flex py-15 justify-between items-center'>
                <h2 className='text-white text-4xl uppercase font-semibold '>Categories</h2>
                <div>
                    <button className='bg-white/50 p-1 rotate-180 mr-2'><MdKeyboardArrowRight /></button>
                    <button  className='bg-white p-1 '><MdKeyboardArrowRight /></button>
                </div>
            </div>
                </Container>
            <div className='text-white  grid grid-cols-1 md:grid-cols-2'>
                {
                    categories.map((category)=> <CategoryCard key={category.id} category={category}/>)
                }
            </div>
        
        </div>
    );
};

export default CategorySection;