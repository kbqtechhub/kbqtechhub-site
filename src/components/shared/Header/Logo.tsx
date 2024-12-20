import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href='/'>
            <Image src="/images/KBQTECH-HUB-YELLOW.png" alt="KBQ TECH-HUB" width={50} height={50} />
        </Link>
    )
}
