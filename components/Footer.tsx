import { ExploreLinks, SocialLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-fit mt-5 border-t-2 border-t-white/25'>
      <div className='w-[96%] mx-auto h-fit flex justify-between gap-5 max-sm:flex-col'>
        {/* START COLUMN START */}
        <div className='w-[280px] h-[260px] p-5 '>
            {/* <Image src="/HAGOP.png" width={168} height={168} priority className='object-contain' alt='Hagop'/> */}
            <h3 className='text-[1.8rem] font-bold mb-5'>About Me</h3> 
            <p className='text-zinc-400 text-[15px]'>I am a Front-End Web Dev. I have experience with <strong>HTML, CSS, Javascript, Typescript, React.js, Redux & Next.js</strong>.</p>
        </div>
        {/* START COLUMN END */}
        {/* COLUMN STACKS START */}
        <div className='w-fit h-fit flex items-center justify-end flex-wrap max-sm:justify-start'>
            {/* EXPLORE COLUMN */}
            <div className='w-[200px] h-[inherit] py-[18px] px-5'>
                <h3 className='text-[1.8rem] font-bold mb-5'>Explore</h3> 
                <ul className='w-full h-fit'>
                        {
                            ExploreLinks.map(v => (
                                <li className='mb-1'>
                                    <Link href={v.url} className='text-zinc-500 duration-200 relative before:w-0 before:h-[1px] before:absolute before:content-[""] before:bottom-[-5px] before:left-0 before:bg-zinc-100 before:duration-200 hover:before:w-full hover:text-zinc-300'>
                                        {v.title}
                                    </Link>
                                </li>
                            ))
                        }
                    
                </ul>
            </div>
            {/* SOCIALS COLUMN */}
            <div className='w-[200px] h-[inherit] py-[18px] px-5'>
                <h3 className='text-[1.8rem] font-bold mb-5'>My Socials</h3> 
                <ul className='w-full h-fit'>
                        {
                            SocialLinks.map(v => (
                                <li className='mb-1'>
                                    <a href={v.url} className='text-zinc-500 duration-200 relative before:w-0 before:h-[1px] before:absolute before:content-[""] before:bottom-[-5px] before:left-0 before:bg-zinc-100 before:duration-200 hover:before:w-full hover:text-zinc-300'>
                                        {v.title}
                                    </a>
                                </li>
                            ))
                        }
                    
                </ul>
            </div>
        </div>
        {/* COLUMN STACKS END */}
      </div>
      <div className='w-full h-fit text-center py-5'>
        <p className='text-zinc-400'>Copyrights &copy; <span className='text-zinc-300'>Hagop</span></p>
      </div>
    </footer>
  )
}

export default Footer
