import React from 'react';
import Container from '../Shared/Container';
import Image from 'next/image';


const Banner = () => {
    return (
        <Container>

        <div className={`Banner1  relative max-h-[700px]  h-screen  my-10 rounded-[50px]`}>
            <div className='absolute rounded-b-[50px] inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent'>

            <div className='relative'>
                <div className='bg-black absolute -rotate-90  top-40 -left-21 rounded-b-xl inline-block p-2 px-5  text-white '>Nike product of the year </div>
            </div>
            <div className='flex  w-full justify-between absolute bottom-4 px-8  items-center'>
                <div className='space-y-3.5'>
                    <h2 className='font-bold text-4xl md:text-6xl text-[#FFFFFF]'>NIKE AIR MAX</h2>
                    <p className='text-white'>Nike introducing the new air max for <br /> everyone's comfort</p>
                    <button className='bg-[#4A69E2] py-2 px-4 rounded-sm text-[#FFFFFF]'>Shop now</button>
                </div>
                
               {/* Image Section */}
                    <div className='flex flex-col gap-4 mb-2'>
                        <div className='border-2 border-white rounded-xl overflow-hidden'>
                            <Image 
                                src={'https://i.ibb.co.com/n8b9kSNT/Banner1.jpg'} 
                                alt='shoe 1' 
                                width={120} 
                                height={80} 
                                priority
                                className="object-cover"
                            />
                        </div>
                        <div className='border-2 border-white rounded-xl overflow-hidden'>
                            <Image 
                                src={'https://i.ibb.co.com/nM62MNYX/Banner2.jpg'} 
                                alt='shoe 2' 
                                width={120} 
                                height={80} 
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>
            </div>
            </div>
        </div>
        </Container>
    );
};

export default Banner;