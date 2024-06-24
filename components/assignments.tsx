import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Assignments() {
  return (
    <div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5'>
        <div className='bg-transparent boxshadow rounded-md w-[100%]'>
        <div>
            <Link href="/full-image"><Image className='rounded-md h-[50%] w-[100%]' width={1200} height={630} src="/banner.webp" alt="loading" /></Link>
        </div>
        <div className='px-2 py-2'>
            <h3 className='font-bold text-[17px]'>Lorem ipsum dolor sit amet</h3>
            <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem.</p>
            <Link className='text-[#16a34e] text-[14px] font-bold hover:border-b-[1px] border-b-gray-700' href="/">Link to website</Link>
        </div>
        </div>
        </div>
    </div>
  )
}
