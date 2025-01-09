import React from 'react'
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import Link from 'next/link';
import { SocialIcons } from '@/data/services';

export default function Footer() {
    return (
        <section className='border-t border-pure-black'>
            <section className='mx-2 md:mx-4'>
                <footer className={`min-h-[50vh] w-full border-2 border-graphite-gray rounded-3xl border-dashed p-4 md:p-10 max-w-7xl mx-auto my-8 flex flex-col gap-8`}>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-16 md:gap-0'>
                        <div className='flex-1 w-full'>
                            <h2 className='text-3xl md:text-5xl text-graphite-gray font-black'>One Hub, Endless Digital Possibilities.</h2>
                            <form className='flex flex-col md:flex-row gap-3 items-start md:items-center'>
                                <input type="email" placeholder="Enter your email address" className='w-full md:w-1/2 px-3 text-white py-2 my-4 bg-light-black outline-none rounded-lg hover:bg-darker-gray placeholder:italic' />
                                <button type="submit" className='bg-gold font-medium text-white py-2 px-6 rounded-lg hover:bg-muted-yelly w-full md:w-auto'>Subscribe</button>
                            </form>
                        </div>
                        <div className='flex-1 flex justify-center md:justify-end w-full'>
                            <div className='w-full md:w-3/4 border-2 rounded-2xl border-white relative'>
                                <div className='flex gap-2 md:gap-3 justify-center absolute -top-5 mx-auto w-full flex-wrap px-2'>
                                    {SocialIcons.map((icon, index) => <div key={index} className='flex border-2 border-white rounded-full justify-center items-center h-8 w-8 md:h-10 md:w-10 bg-soft-black'>
                                        <Link href={icon.link}>
                                            <icon.icon className='text-xl md:text-2xl hover:scale-80 text-gold hover:text-white' />
                                        </Link>
                                    </div>)}
                                </div>
                                <div className='flex flex-col gap-4 text-gold p-6 md:p-12'>
                                    <a className='flex gap-4 items-center text-sm md:text-base' href='mailto:kbqtechworld@gmail.com'>
                                        <div className='border-2 border-gold h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center'>
                                            <FaEnvelope className='text-lg md:text-xl' />
                                        </div>
                                        <p>kbqtechhub@gmail.com</p>
                                    </a>
                                    <a className='flex gap-4 items-center text-sm md:text-base' href='tel:+233207974511'>
                                        <div className='border-2 border-gold h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center'>
                                            <FaPhone className='text-lg md:text-xl' />
                                        </div>
                                        <p>+233 20 797 4511</p>
                                    </a>
                                </div>
                                <div className='absolute -bottom-5 w-full flex justify-center'>
                                    <p className='text-center px-4 py-1 text-gold border-2 flex border-white rounded-2xl bg-soft-black w-fit text-sm md:text-base'>@kbqtechhub</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center gap-10 justify-center'>
                        <h1 className='text-5xl md:text-[8rem] font-black text-gold text-center'>KBQ TECH-HUB</h1>
                        <div className='text-center'>
                            <p className='text-center text-graphite-gray text-sm md:text-base'>© {new Date().getFullYear()}. All Rights Reserved.</p>
                        </div>
                    </div>
                </footer>
            </section>
        </section>
    )
}
