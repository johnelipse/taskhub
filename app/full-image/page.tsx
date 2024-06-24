import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <div className='flex justify-center items-center w-full'>
      <Image className='w-[85%] h-[20%] mt-32' width={1200} height={630} src="/banner.webp" alt="loading" />
    </div>
  )
}
