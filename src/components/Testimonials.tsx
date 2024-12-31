"use client";

import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "60px",
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,

    };

    return (
        <section className='bg-gold min-h-[80vh] px-8 py-12 md:p-16 flex flex-col gap-4 rounded-3xl shadow-2xl'>
            <h3 className='text-background text-2xl font-semibold text-center'>Client Testimonials</h3>
            <Slider {...settings}>
                {Array(4).fill(0).map((_, index) => <div key={index} className='bg-soft-black max-w-[25rem] relative border-[10px] border-background rounded-tl-[10%] rounded-tr-[10%] rounded-br-[10%] p-8 md:p-10 md:my-10 text-white'>
                    <div className='flex flex-col gap-6 mb-16'>
                        <p className='text-lg leading-relaxed'>
                            Working with KBQ TECH-HUB was a game-changer. Their team developed a sleek, responsive website for us that perfectly represents our brand. We've seen a 40% increase in client inquiries!
                        </p>
                        <div className='mt-auto'>
                            <h4 className='text-xl font-semibold mb-1'>John Doe</h4>
                            <p className='text-gold'>CEO, XYZ Company</p>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url('/images/profile.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        className='h-[80px] w-[80px] border-8 border-gold rounded-full -translate-x-10 translate-y-6 absolute bg-winny bottom-0 left-0'></div>
                </div>)}
            </Slider>
        </section>
    )
}
