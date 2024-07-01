import ThemeButton from '@/components/UI/button/ThemeButton'
import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div className='min-h-screen flex items-center justify-center flex-col' dir='ltr'>
        <div className='text-[2rem] md:text-[3rem] lg:text-[5rem] '>404</div>
        <p className='text-xl font-bold text-zinc-300'>Page Not Found.</p>
        
        <Link href="/">
            <ThemeButton title='' style='light' img='/arr-left.png' containerStyles='absolute bottom-2 left-2'/>
        </Link>
    </div>
  )
}

export default notFound
