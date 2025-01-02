import React from 'react'

export default function TrainingEnrollCta() {
    return (
        <section
            style={{
                backgroundImage: "url('/images/IT-Training.webp')",
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
            className='relative min-h-[60vh] flex items-center justify-center rounded-md rounded-br-[5rem] rounded-tl-[5rem] overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-[#d7277cd7] to-[#e6b800e1]'></div>
            <div className='relative z-10 text-center max-w-2xl flex flex-col gap-4 px-4'>
                <h3 className='text-white text-3xl font-bold'>Transform Your Career with Expert IT Training</h3>
                <p className='text-white'>Unlock the skills you need to excel in web development and thrive in today's tech-driven world.</p>
                <button className='bg-background w-fit py-2 text-soft-black hover:bg-gray-200 hover:text-light-black px-10 self-center rounded-tl-3xl rounded-br-3xl rounded-sm'>Enroll Now</button>
            </div>
        </section>
    )
}
