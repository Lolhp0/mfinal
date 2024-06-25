"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CustomButton from './UI/button/CustomButton'

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
    
    
    <div className="w-full h-[80px] fixed top-0 left-0 right-0 z-50 border-b-[1px] border-b-white/25 backdrop-blur-xl">
        <nav className='w-[96%] h-[inherit] flex items-center justify-start gap-2 mx-auto'>
            {/* NAV IMAGE START */}
            <div className='mx-2 w-fit hidden md:block'>
                <Link href="/">
                    <Image src="/HAGOP.png" width={180} height={180} className='object-contain' alt='Brand'/>
                </Link>
            </div>
            {/* NAV IMAGE END */}
            {/* DESKTOP NAVLIST START */}
            <div className='mx-2 w-fit hidden md:block'>
                <ul className='w-fit h-[inherit] flex items-center justify-start gap-x-5'>
                    <li>
                        <Link href="/" className='text-[15px] text-zinc-500 duration-200 hover:text-zinc-200 font-medium'>Home</Link>
                    </li>
                    <li>
                        <Link href="/projects" className='text-[15px] text-zinc-500 duration-200 hover:text-zinc-200 font-medium'>Projects</Link>
                    </li>
                    <li>
                        <Link href="/experience" className='text-[15px] text-zinc-500 duration-200 hover:text-zinc-200 font-medium'>Experience</Link>
                    </li>
                    <li>
                        <Link href="/achievements" className='text-[15px] text-zinc-500 duration-200 hover:text-zinc-200 font-medium'>Achievements</Link>
                    </li>
                </ul>
            </div>
            {/* DESKTOP NAVLIST END */}
            {/* BUTTONS START */}
            <div className='w-fit mx-2 !ml-auto'>
                <ul className='w-fit h-[inherit] flex items-center justify-start gap-x-5'>
                    <li>
                        <Link href="/contact">
                            <CustomButton title='Contact' style='light'/>
                        </Link>
                    </li>
                    <li className='block md:hidden'>
                        <button className='bg-transparent w-fit h-fit border-none outline-none mt-1' aria-label='Toggle Mobile Nav' onClick={() => setMobileNav(true)}>
                            <Image src="/menu.png" width={32} height={32} className='object-contain' alt='Toggle Menu'/>
                        </button>
                    </li>
                </ul>
            </div>
            {/* BUTTONS END */}
        </nav>
    </div>

    <div className={`block md:hidden w-full h-fit fixed top-0 left-0 right-0 z-[60] bg-primary shadow-lg shadow-white/10 translate-y-[-200%] ${mobileNav && "!translate-y-0"} duration-300 transition-transform`}>
            <nav className='w-full h-fit relative pb-4'>
                <div className='w-full h-fit flex items-center justify-end px-2'>
                    <button className='bg-transparent w-fit h-fit border-none outline-none mt-1' aria-label='Toggle Mobile Nav' onClick={() => setMobileNav(false)}>
                        <Image src="/close.png" width={32} height={32} className='object-contain' alt='Toggle Menu'/>
                    </button>
                </div>

                <ul className='w-full h-fit'>
                    <li onClick={() => setMobileNav(false)}>
                        <Link href="/">
                            <div className='w-full h-fit flex items-center justify-center mb-5'>
                                <Image src="/HAGOP.png" width={180} height={180} className='object-contain' alt='Brand'/>
                            </div>
                        </Link>
                    </li>
                    <li onClick={() => setMobileNav(false)}>
                        <Link href="/">
                            <div className='w-full h-fit p-2 duration-200 cursor-pointer hover:bg-zinc-200 hover:text-zinc-900'>
                                <strong className='text-[18px]'>Home</strong>
                            </div>
                        </Link>
                    </li>
                    <li onClick={() => setMobileNav(false)}>
                        <Link href="/projects">
                            <div className='w-full h-fit p-2 duration-200 cursor-pointer hover:bg-zinc-200 hover:text-zinc-900'>
                                <strong className='text-[18px]'>Projects</strong>
                            </div>
                        </Link>
                    </li>
                    <li onClick={() => setMobileNav(false)}>
                        <Link href="/experience">
                            <div className='w-full h-fit p-2 duration-200 cursor-pointer hover:bg-zinc-200 hover:text-zinc-900'>
                                <strong className='text-[18px]'>Experience</strong>
                            </div>
                        </Link>
                    </li>
                    <li onClick={() => setMobileNav(false)}>
                        <Link href="/achievements">
                            <div className='w-full h-fit p-2 duration-200 cursor-pointer hover:bg-zinc-200 hover:text-zinc-900'>
                                <strong className='text-[18px]'>Achievements</strong>
                            </div>
                        </Link>
                    </li>
                </ul>

                <div className='w-full h-fit pl-1 my-5'>
                    <Link href="/contact" onClick={() => setMobileNav(false)} className='w-full'>
                        <CustomButton title='Contact' style='light' containerStyles='!w-[98%] !h-[44px] !mx-auto'/>
                    </Link>
                </div>
            </nav>       
        </div>

    </>
  )
}

export default Navbar