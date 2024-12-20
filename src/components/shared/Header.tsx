import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className='flex justify-between items-center px-4 py-2 max-w-7xl mx-auto border-b border-pure-black'>
            <div>
                <Image src="/images/KBQTECH-HUB-YELLOW.png" alt="KBQ TECH-HUB" width={50} height={50} />
            </div>
            <nav>
                <ul className='flex space-x-4'>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/services'}>Services</Link>
                    </li>
                    <li>
                        <Link href={'/shop'}>Shop</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>
            <button className='border border-winny text-winny p-2 rounded-md hover:bg-winny hover:text-white hover:transition-colors '>
                <Link href={'/login'}>Book an intro call</Link>
            </button>
        </header>
    )
}
