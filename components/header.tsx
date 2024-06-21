import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ToggleBtn } from './toggleBtn'
import { Plus } from 'lucide-react'

export default function Header() {
  return (
    <div>
      <header className='lg:flex md:flex hidden justify-between items-center py-4 lg:px-[3rem] md:px-[1rem] px-[1rem]'>
        <div>
            <Link href="/">
            <Image width={231} height={209} src="/logo.png" alt="Logo loading" className='lg:w-[3rem] md:w-[3rem] w-[2rem] object-cover ' />
            </Link>
        </div>
        <div className='flex items-center lg:gap-6 md:gap-4 gap-2'>
          <ToggleBtn/>
        <Link href="/" className='bg-[#16a34e] dark:bg-[#1991c9] text-white py-2 px-5 md:px-3 rounded-md'>Add Assignment</Link>  
        </div>
      </header>
      <header className='flex lg:hidden md:hidden justify-between items-center py-4 lg:px-[3rem] md:px-[2rem] px-[1rem]'>
        <div>
            <Link href="/">
            <Image width={231} height={209} src="/logo.png" alt="Logo loading" className='lg:w-[3rem] md:w-[2rem] w-[2rem] object-cover ' />
            </Link>
        </div>
        <div className='flex items-center lg:gap-6 md:gap-4 gap-2'>
          <ToggleBtn/>
        <Link href="/" className='bg-[#16a34e] dark:bg-[#1991c9] text-white py-1 px-1 rounded-full'><Plus /></Link>  
        </div>
      </header>
    </div>
  )
}
