import { CustomButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const CustomButton = ({title, image, classNames, handleClick, }: CustomButtonProps) => {
  return (
    <button className={`w-[200px] h-[54px] duration-200 !cursor-pointer flex items-center justify-center gap-5 bg-blue-500 shadow-buttonSize border-2 rounded-md ${classNames && classNames}`} onClick={handleClick}>
        {title}
        {
            image && (
                <div className='relative'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                </div>
            )
        }
    </button>
  )
}

export default CustomButton
