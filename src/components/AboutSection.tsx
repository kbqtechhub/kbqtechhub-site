import React from 'react'
import TextGradient from './shared/TextGradient'

export default function AboutSection() {
    return (
        <section className='bg-[#fff] shadow-2xl h-[60vh] md:min-h-[70vh] rounded-3xl relative flex flex-col items-center justify-center overflow-hidden'>
            <div className='h-60 w-60 bg-gold rounded-full absolute -top-20 -right-20'></div>
            <div className='size-[400px] absolute -top-50 left-0  -translate-x-60 circle_gradient rounded-full flex items-center justify-center'>
                <div className='size-[380px] bg-[#fff] rounded-full'></div>
            </div>
            <div className='max-w-2xl mx-auto w-full z-10'>
                <h2 className='text-3xl text-soft-black font-semibold text-center leading-normal'>On a mission to  <TextGradient text='empower' /> businesses through <TextGradient text='innovative' /> technology, bridging gaps for <TextGradient text='profit' /> and <TextGradient text='simplified' /> efficient living.
                </h2>
            </div>
            <div className='flex absolute bottom-0 translate-y-[50%] max-w-2xl w-full justify-around'>
                <div className='size-[150px] bg-winny rounded-full'></div>
                <div className='size-[150px] bg-winny rounded-full'></div>
                <div className='size-[150px] bg-winny rounded-full'></div>
            </div>
        </section>
    )
}
