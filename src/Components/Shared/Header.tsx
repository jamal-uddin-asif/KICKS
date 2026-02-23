import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { IoMdArrowDropup } from 'react-icons/io';
import { IoSearch } from "react-icons/io5";
import { TiArrowSortedDown } from 'react-icons/ti';

const Header = () => {
    return (
        <div className='flex font-bold bg-white rounded-4xl p-9  max-w-11/12 mx-auto justify-between items-center'>
          <div>
            <div className='md:flex items-center gap-10 hidden'>
                <Link href={'/'}>New Drops🔥</Link>
                <Link href={'/'} className='flex items-center'>Men <TiArrowSortedDown /></Link>
                <Link href={'/'} className='flex items-center'>Women <span className='rotate-180'><TiArrowSortedDown className=''/></span></Link>
            </div>

            <div className='md:hidden'>
                <FiMenu />
            </div>
          </div>

            <div>
                <Image src={'https://i.ibb.co.com/F447Q6pN/Group-2.png'}
                alt='Header Logo'
                width={100}
                height={20}
                />

            </div>

            <div className='flex items-center gap-10'>
                <div className='md:block hidden'><IoSearch /></div>
                <div><FaUser /></div>
                <div className='bg-[#FFA52F] px-3 py-1 rounded-full'>0</div>
            </div>
        </div>
    );
};

export default Header;