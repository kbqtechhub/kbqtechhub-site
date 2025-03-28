
import React from 'react'
import Link from 'next/link'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import Logo from './Logo'

export default function Header() {
    return (
        <section className='border-b border-pure-black'>
            <header className='flex justify-between items-center px-4 py-2 max-w-7xl mx-auto'>
                <Logo />
                <Navigation />
                <button className='hidden md:flex border border-winny text-winny p-2 rounded-md hover:bg-winny hover:text-white hover:transition-colors '>
                    <Link href={'/login'}>Book an intro call</Link>
                </button>
                <MobileNavigation />
            </header>
        </section>
    )
}
