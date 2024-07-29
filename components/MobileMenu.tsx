'use client'
import Link from 'next/link'
import {useState} from 'react'

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <main>
        <div className='flex flex-col gap-[4.5px] cursor-pointer'
        onClick={() => setIsOpen(prev => !prev)}>
            <div className={`w-6 h-1 bg-[#2EB77A] rounded-sm ${isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-500`} />
            <div className={`w-6 h-1 bg-[#2EB77A] rounded-sm ${isOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-1 bg-[#2EB77A] rounded-sm ${isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-500`} />
        </div>
    {isOpen && (
        <div className='absolute top-24 left-0 w-full h-[calc(30vh-96px)] ease-in duration-200 bg-gray-800 flex flex-col items-center justify-center gap-4'>
           <Link href="/signin">
            <div className="text-white font-semibold hover:text-[#2EB77A]">Log In</div>
          </Link>
          <Link href="/signup">
            <div className="text-white font-semibold hover:text-[#2EB77A]">Get Started</div>
          </Link>
        </div>
    )}
    </main>
  )
}

export default MobileMenu