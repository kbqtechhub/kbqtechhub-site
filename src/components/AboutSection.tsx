import React from 'react'
import TextGradient from './shared/TextGradient'

export default function AboutSection() {
    return (
        <section className='bg-[#fff] shadow-2xl min-h-[400px] h-auto py-16 md:h-[60vh] md:min-h-[70vh] rounded-3xl relative flex flex-col items-center justify-center overflow-hidden px-4'>
            <div className='h-40 w-40 md:h-60 md:w-60 bg-gold rounded-full absolute -top-10 -right-10 md:-top-20 md:-right-20'></div>
            <div className='hidden md:flex size-[400px] absolute -top-50 left-0  -translate-x-60 circle_gradient rounded-full items-center justify-center'>
                <div className='size-[380px] bg-[#fff] rounded-full'></div>
            </div>
            <div className='max-w-2xl mx-auto w-full z-10'>
                <h2 className='text-xl sm:text-3xl md:text-4xl text-soft-black font-semibold text-center leading-normal'>
                    On a mission to <TextGradient text='empower' /> businesses through <TextGradient text='innovative' /> technology, bridging gaps for <TextGradient text='profit' /> and <TextGradient text='simplified' /> efficient living.
                </h2>
            </div>
            <div className='flex absolute bottom-0 translate-y-[50%] max-w-2xl w-full justify-around px-4'>
                <div className='size-[80px] sm:size-[100px] md:size-[150px] bg-winny rounded-full'></div>
                <div className='size-[80px] sm:size-[100px] md:size-[150px] bg-winny rounded-full'></div>
                <div className='size-[80px] sm:size-[100px] md:size-[150px] bg-winny rounded-full'></div>
            </div>
        </section>
    )
}
