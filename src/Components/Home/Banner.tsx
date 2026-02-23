import React from 'react';
import Banner1 from '../../../public/Banner1.jpg'
import Container from '../Shared/Container';
import Image from 'next/image';

const Banner = () => {
    return (
        <Container>

        <div className={`Banner1 relative max-h-[700px]  h-screen  my-10 rounded-[50px]`}>
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent'>

            <div className='relative'>
                <div className='bg-black absolute -rotate-90  top-40 -left-21 rounded-b-xl inline-block p-2 px-5  text-white '>Nike product of the year </div>
            </div>
            <div className='flex justify-between absolute bottom-4 px-8  items-center'>
                <div className='space-y-3.5'>
                    <h2 className='font-bold text-6xl text-[#FFFFFF]'>NIKE AIR MAX</h2>
                    <p className='text-white'>Nike introducing the new air max for <br /> everyone's comfort</p>
                    <button className='bg-[#4A69E2] py-2 px-4 rounded-sm text-[#FFFFFF]'>Shop now</button>
                </div>
                <div>
                    <Image src={'https://i.ibb.co.com/n8b9kSNT/Banner1.jpg'} alt='shose' width={100 } height={100}></Image>
                    <Image src={'https://i.ibb.co.com/nM62MNYX/Banner2.jpg'} alt='shose' width={100 } height={100}></Image>
                </div>
                {/* https://i.ibb.co.com/n8b9kSNT/Banner1.jpg
https://i.ibb.co.com/nM62MNYX/Banner2.jpg */}
            </div>
            </div>
        </div>
        </Container>
    );
};

export default Banner;