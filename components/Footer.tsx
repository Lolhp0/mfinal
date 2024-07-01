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
            <h3 className='text-[1.8rem] font-bold mb-5 font-nunito'>About Me</h3> 
            <p className='text-zinc-400 text-[15px] font-nunito'>I am a Front-End Web Dev. I have experience with <strong>HTML, CSS, Javascript, Typescript, React.js, Redux & Next.js</strong>.</p>
        </div>
        {/* START COLUMN END */}
        {/* COLUMN STACKS START */}
        <div className='w-fit h-fit flex items-center justify-end flex-wrap max-sm:justify-start'>
            {/* EXPLORE COLUMN */}
            <div className='w-[200px] h-[inherit] py-[18px] px-5'>
            <div className='flex justify-start gap-1'>
                    <h3 className='text-[1.8rem] font-bold mb-5 font-nunito'>Explore</h3> 
                    <div className='w-fit h-[inherit] mt-1'>
                        <div className='rotate-45'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(87,87,87,1)"><path d="M4.99958 12.9999C4.99958 7.91198 7.90222 3.5636 11.9996 1.81799C16.0969 3.5636 18.9996 7.91198 18.9996 12.9999C18.9996 13.8229 18.9236 14.6264 18.779 15.4027L20.7194 17.2353C20.8845 17.3913 20.9238 17.6389 20.815 17.8383L18.3196 22.4133C18.1873 22.6557 17.8836 22.7451 17.6412 22.6128C17.5993 22.59 17.5608 22.5612 17.5271 22.5274L15.2925 20.2928C15.1049 20.1053 14.8506 19.9999 14.5854 19.9999H9.41379C9.14857 19.9999 8.89422 20.1053 8.70668 20.2928L6.47209 22.5274C6.27683 22.7227 5.96025 22.7227 5.76498 22.5274C5.73122 22.4937 5.70246 22.4552 5.67959 22.4133L3.18412 17.8383C3.07537 17.6389 3.11464 17.3913 3.27975 17.2353L5.22014 15.4027C5.07551 14.6264 4.99958 13.8229 4.99958 12.9999ZM6.47542 19.6957L7.29247 18.8786C7.85508 18.316 8.61814 17.9999 9.41379 17.9999H14.5854C15.381 17.9999 16.1441 18.316 16.7067 18.8786L17.5237 19.6957L18.5056 17.8955L17.4058 16.8568C16.9117 16.3901 16.6884 15.7045 16.8128 15.0364C16.9366 14.3722 16.9996 13.6911 16.9996 12.9999C16.9996 9.13037 15.0045 5.69965 11.9996 4.04033C8.99462 5.69965 6.99958 9.13037 6.99958 12.9999C6.99958 13.6911 7.06255 14.3722 7.18631 15.0364C7.31078 15.7045 7.08746 16.3901 6.59338 16.8568L5.49353 17.8955L6.47542 19.6957ZM11.9996 12.9999C10.895 12.9999 9.99958 12.1045 9.99958 10.9999C9.99958 9.89537 10.895 8.99994 11.9996 8.99994C13.1041 8.99994 13.9996 9.89537 13.9996 10.9999C13.9996 12.1045 13.1041 12.9999 11.9996 12.9999Z"></path></svg>
                        </div>
                    </div>
                </div>
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
            <div className='w-[200px] h-[inherit] py-[18px] px-5 relative'>
                <div className='flex justify-start gap-1'>
                    <h3 className='text-[1.8rem] font-bold mb-5 font-nunito'>Socials</h3> 
                    <div className='w-fit h-[inherit] mt-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(86,86,86,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path></svg>
                    </div>
                </div>
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
