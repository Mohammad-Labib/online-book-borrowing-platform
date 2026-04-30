import Link from 'next/link';
import userImage from "@/assets/user-image.jpg"
import React from 'react';
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <>

        <div className=' container mx-auto flex justify-between mt-2'>

            <div className='flex items-center'>
                <h1 className='font-bold text-2xl'>BOOK<span className='text-green-500'>VERSE</span> </h1>
            </div>

            <ul className='flex justify-between items-center gap-4 '>
                <li><NavLink href={"/"}>Home</NavLink></li>
                <li><NavLink href={"/all-books"}>All Books</NavLink></li>
                <li><NavLink href={"/profile"}>My Profile</NavLink></li>
            </ul>

             <div className='flex items-center gap-2'>
                <h1 className='font-semibold'> I m here</h1>
            <Image src={userImage} alt="user-image" width={60} height={60}></Image>

            <button className='btn bg-green-500 text-white'>
                <NavLink href={'/login'}>Login</NavLink>
            </button>
        </div>

        </div>

       
        </>

        
    );
};

export default Navbar;