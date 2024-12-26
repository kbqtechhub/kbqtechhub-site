import React from 'react'

export default function Services() {
    return (
        <section className='bg-darker-gray grid gap-10 max-w-4xl mx-auto w-full rounded-2xl rounded-tr-[10rem] px-8 py-10' >
            <div className='flex flex-col gap-4 md:flex-row justify-between items-center'>
                <h2 className='text-yelly text-3xl'>WEB DEVELOPMENT</h2>
                <div className='h-40 w-40 bg-soft-yelly rounded-full border-8 border-white'></div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
                <p className='text-white text-lg w-full md:w-[23rem]'>Design responsive, visually stunning websites that enhance your brand, engage audiences and drive results. We deliver customized digital solutions to make your online presence stand out.</p>
                <button className="w-full md:w-fit bg-gradient-to-r from-muted-wine to-muted-yelly text-white px-6 py-2 rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-sm hover:bg-gradient-to-r hover:from-soft-wine hover:to-soft-yelly">Get a Custom Website</button>
            </div>
        </section>
    )
}
