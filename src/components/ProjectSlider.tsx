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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <section className='w-full max-w-2xl mx-auto px-4 sm:px-6'>
            <div className='mt-10'>
                <Slider {...settings}>
                    {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className='aspect-[4/3] sm:aspect-[16/9] rounded-lg p-2 sm:p-4'>
                            <div className='h-[70%] bg-soft-black rounded-t-lg'></div>
                            <div className='h-[30%] bg-soft-yelly rounded-b-lg'></div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
