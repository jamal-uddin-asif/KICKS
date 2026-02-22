import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { IoMdArrowDropup } from 'react-icons/io';
import { IoSearch } from "react-icons/io5";
import { TiArrowSortedDown } from 'react-icons/ti';

const Header = () => {
    return (
        <div className='flex font-bold bg-[#FAFAFA] rounded-4xl p-6  max-w-11/12 mx-auto justify-between items-center'>
            <div className='flex items-center gap-10'>
                <Link href={'/'}>New Drops🔥</Link>
                <Link href={'/'} className='flex items-center'>Men <TiArrowSortedDown /></Link>
                <Link href={'/'} className='flex items-center'>Women <span className='rotate-180'><TiArrowSortedDown className=''/></span></Link>
            </div>
            <div>
                <img src="/public/HeaderLogo.png" alt="Logo" />
                {/* <Image src={'/public/HeaderLogo.png'}
                alt='Header Logo'
                width={100}
                height={100}
                /> */}

            </div>

            <div className='flex items-center gap-10'>
                <div><IoSearch /></div>
                <div><FaUser /></div>
                <div className='bg-[#FFA52F] px-3 py-1 rounded-full'>0</div>
            </div>
        </div>
    );
};

export default Header;