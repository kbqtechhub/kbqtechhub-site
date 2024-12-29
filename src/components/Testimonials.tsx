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
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,

    };

    return (
        <section className='bg-gold min-h-[80vh] p-20 flex flex-col gap-10 rounded-3xl shadow-2xl'>
            <h3 className='text-background text-lg text-center'>Client Testimonials</h3>
            <Slider {...settings}>
                <div className='bg-soft-black relative border-[10px] border-background rounded-3xl p-10 text-white w-[400px] h-[400px]'>
                    <p>Working with KBQ TECH-HUB was a game-changer. Their team developed a sleek, responsive website for us that perfectly represents our brand. We’ve seen a 40% increase in client inquiries!</p>
                    <div>
                        {/* <img src='' alt='client' /> */}
                        <h4>John Doe</h4>
                        <p>CEO, XYZ Company</p>
                    </div>
                    <div className='h-[80px] w-[80px] border-8 border-gold rounded-full -translate-x-10 translate-y-6 absolute bg-winny bottom-0 left-0'></div>
                </div>
                <div className='bg-soft-black relative border-[10px] border-background rounded-3xl p-10 text-white w-[400px] h-[400px]'>
                    <p>Working with KBQ TECH-HUB was a game-changer. Their team developed a sleek, responsive website for us that perfectly represents our brand. We’ve seen a 40% increase in client inquiries!</p>
                    <div>
                        {/* <img src='' alt='client' /> */}
                        <h4>John Doe</h4>
                        <p>CEO, XYZ Company</p>
                    </div>
                    <div className='h-[80px] w-[80px] border-8 border-gold rounded-full -translate-x-10 translate-y-6 absolute bg-winny bottom-0 left-0'></div>
                </div>
            </Slider>
        </section>
    )
}
