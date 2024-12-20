import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navigation from './Navigation'

export default function Header() {
    return (
        <header className='flex justify-between items-center px-4 py-2 max-w-7xl mx-auto border-b border-pure-black'>
            <div>
                <Image src="/images/KBQTECH-HUB-YELLOW.png" alt="KBQ TECH-HUB" width={50} height={50} />
            </div>
            <Navigation />
            <button className='border border-winny text-winny p-2 rounded-md hover:bg-winny hover:text-white hover:transition-colors '>
                <Link href={'/login'}>Book an intro call</Link>
            </button>
        </header>
    )
}
