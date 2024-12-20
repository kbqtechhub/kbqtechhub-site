"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

// Navigation Data
const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
    const pathname = usePathname()

    return (
        <nav className='hidden md:flex'>
            <ul className='flex space-x-4'>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.href}
                            className={`hover:text-graphite-gray ${pathname === link.href ? 'text-white' : ''}`}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
