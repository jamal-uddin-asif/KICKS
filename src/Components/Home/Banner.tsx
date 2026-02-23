import React from 'react';
import Banner1 from '../../../public/Banner1.jpg'
import Container from '../Shared/Container';
import Image from 'next/image';

const Banner = () => {
    return (
        <Container>

        <div className={`Banner1 max-h-[700px]  h-screen  my-10 rounded-[50px]`}>
            <div className='relative'>
                <div className='bg-black absolute -rotate-90  top-40 -left-21 rounded-b-xl inline-block p-2 px-5  text-white '>Nike product of the year </div>
            </div>
            <div className='flex  justify-between items-center'>
                <div>
                    <h2>NIKE AIR MAX</h2>
                    <p>Nike introducing the new air max for everyone's comfort</p>
                    <button className='bg-[#4A69E2] py-2 px-4'>Shop now</button>
                </div>
                <div>
                    <Image src={''} alt='shose' width={100 } height={100}></Image>
                    <Image src={''} alt='shose' width={100 } height={100}></Image>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default Banner;