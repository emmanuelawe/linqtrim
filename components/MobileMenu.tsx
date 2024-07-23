'use client'
import Link from 'next/link'
import {useState} from 'react'

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <main>
        <div className='flex flex-col gap-[4.5px] cursor-pointer'
        onClick={() => setIsOpen(prev => !prev)}>
            <div className={`w-6 h-1 bg-[#FF5757] rounded-sm ${isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-500`} />
            <div className={`w-6 h-1 bg-[#FF5757] rounded-sm ${isOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-1 bg-[#FF5757] rounded-sm ${isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-500`} />
        </div>
    {isOpen && (
        <div className='absolute top-14 left-0 w-full h-[calc(100vh-56px)] bg-[#FF5757] flex flex-col items-center justify-center gap-8'>
           <Link href="/signin">
            <div className="text-white font-semibold">Sign In</div>
          </Link>
          <Link href="/signup">
            <div className="text-white font-semibold">Get Started</div>
          </Link>
        </div>
    )}
    </main>
  )
}

export default MobileMenu