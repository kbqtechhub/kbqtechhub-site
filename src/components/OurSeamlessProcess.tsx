import Image from 'next/image'
import React from 'react'

export default function OurSeamlessProcess() {
    return (
        <section className='max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20'>
            <Image src='/images/our-seamless-process.svg' width={1440} height={800} alt='Our Seamless Process' />
        </section>
    )
}
