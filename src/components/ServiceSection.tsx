import Image from 'next/image'
import React from 'react'

export default function ServiceSection() {
    return (
        <section>
            <div className='h-[35rem] py-10 bg-light-black flex flex-col gap-10 rounded-b-[10rem] md:mb-2'>
                <div className='container mx-auto flex flex-col justify-center'>
                    <h1 className='text-4xl text-white font-bold text-center mb-5'>Custom Websites Designed to Elevate Your Business</h1>
                    <p className='text-center text-yelly'>Transform your online presence with stunning, responsive websites tailored to your needs.</p>
                </div>
                <div className='container mx-auto flex flex-col justify-center items-center gap-10 relative'>
                    <div>
                        <Image src='/images/rings.svg' width={600} height={600} alt='hero' />
                    </div>
                    <button className='px-10 shadow-2xl absolute top-5 left-50 rounded-3xl py-4 bg-[#fff] text-gold'>Get a Free Quote</button>
                </div>
                <div className='h-[60rem] max-w-5xl w-full mx-auto bg-yelly p-20 -translate-y-60 rounded-b-[100px] flex flex-col gap-10'>
                    <h2 className='text-soft-black text-center text-2xl font-medium'>At KBQ TECH-HUB, we specialize in creating high-performance websites that drive growth and engagement. Whether you're looking to establish a new online presence or revamp an existing site, our expert team will deliver a solution that meets your unique needs.</h2>
                </div>
            </div>
        </section>
    )
}
