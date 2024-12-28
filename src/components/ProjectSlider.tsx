"use client";

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };

    return (
        <section className='max-w-2xl mx-auto'>
            <div className='mt-10'>
                <Slider {...settings}>
                    {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className='h-[25rem] bg-white rounded-lg p-4'>
                            <div className='h-3/4 bg-soft-black'></div>
                            <div className='h-1/4 bg-soft-yelly'></div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
