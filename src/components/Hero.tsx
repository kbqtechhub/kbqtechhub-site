import React from 'react'

export default function Hero() {
    return (
        <section className='h-[50vh] md:h-[80vh] bg-darker-gray rounded-3xl p-4'>
            <section className='min-h-[40vh] md:h-[70vh] bg-gradient-to-b from-soft-black to-darker-gray rounded-3xl p-4 shadow-2xl flex items-center justify-center'>
                <div className='flex flex-col space-y-8'>
                    <h1 className='text-4xl text-center md:text-7xl font-black'>One <span className='text-winny'>Hub,</span> Endless <span className='text-winny'>Digital</span> Possibilities.</h1>

                    <p className='text-center font-extralight w-full md:w-1/2 mx-auto'>Transforming businesses with cutting-edge solutions, creative expertise, and impactful training to lead in the digital age.</p>

                    <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
                        <button className='border-2 w-full md:w-fit rounded-lg border-yelly bg-[#ffe69960] px-4 py-2'>Sign Up for Training</button>
                        <button className='w-full md:w-fit rounded-lg bg-white text-soft-black px-4 py-2'>Explore Our Services</button>
                    </div>
                </div>
            </section>
        </section>
    )
}
