import Image from 'next/image'
import React from 'react'

export default function OurSeamlessProcess() {
    return (
        <section className='max-w-4xl mx-auto w-full'>
            <Image src='/images/our-seamless-process.svg' width={1440} height={800} alt='Our Seamless Process' />
        </section>
    )
}
