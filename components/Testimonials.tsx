"use client";

import React, { useEffect, useState } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: "0",
                }
            }
        ]
    };

    return (
        <section className='bg-gold h-fit md:min-h-[80vh] px-8 py-16 md:p-16 flex flex-col gap-10 rounded-3xl shadow-2xl'>
            <h3 className='text-white text-xl md:text-2xl font-semibold text-center'>Client Testimonials</h3>
            <Slider {...settings}>
                {Array(4).fill(0).map((_, index) => <div key={index} className='bg-soft-black max-w-[25rem] mx-auto relative border-[6px] md:border-[10px] border-background rounded-tl-[10%] rounded-tr-[10%] rounded-br-[10%] p-6 md:p-10 md:my-10 text-white'>
                    <div className='flex flex-col gap-4 md:gap-6'>
                        <p className='text-base md:text-lg leading-relaxed'>
                            Working with KBQ TECH-HUB was a game-changer. Their team developed a sleek, responsive website for us that perfectly represents our brand. We've seen a 40% increase in client inquiries!
                        </p>
                        {isMobile ? (
                            <div className='flex items-center gap-4 mt-6'>
                                <div
                                    style={{ backgroundImage: `url('/images/profile.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    className='h-[60px] w-[60px] border-4 border-gold rounded-full flex-shrink-0'
                                ></div>
                                <div>
                                    <h4 className='text-lg font-semibold mb-1'>John Doe</h4>
                                    <p className='text-gold'>CEO, XYZ Company</p>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className='mt-auto mb-16'>
                                    <h4 className='text-xl font-semibold mb-1'>John Doe</h4>
                                    <p className='text-gold'>CEO, XYZ Company</p>
                                </div>
                                    <div
                                        style={{ backgroundImage: `url('/images/profile.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    className='h-[80px] w-[80px] border-8 border-gold rounded-full -translate-x-10 translate-y-6 absolute bg-winny bottom-0 left-0'
                                ></div>
                            </>
                        )}
                    </div>
                </div>)}
            </Slider>
        </section>
    )
}
