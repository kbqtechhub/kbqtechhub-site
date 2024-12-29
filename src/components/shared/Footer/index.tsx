import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaSnapchat, FaSquareXTwitter, FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa6";
import Link from 'next/link';

const SocialIcons = [
    {
        name: 'Facebook',
        icon: FaFacebook,
        link: 'https://facebook.com'
    },
    {
        name: 'Instagram',
        icon: FaInstagram,
        link: 'https://instagram.com'
    },
    {
        name: 'Snapchat',
        icon: FaSnapchat,
        link: 'https://snapchat.com'
    },
    {
        name: 'Twitter',
        icon: FaSquareXTwitter,
        link: 'https://twitter.com'
    },
    {
        name: 'Telegram',
        icon: FaTelegram,
        link: 'https://telegram.com'
    },
    {
        name: 'Tiktok',
        icon: FaTiktok,
        link: 'https://tiktok.com'
    },
    {
        name: 'Youtube',
        icon: FaYoutube,
        link: 'https://youtube.com'
    },
]

export default function Footer() {
    return (
        <section className='border-t border-pure-black'>
            <section className='mx-2 md:mx-4'>
                <footer className={` min-h-[50vh] w-full border-2 border-graphite-gray rounded-3xl border-dashed p-10 max-w-7xl mx-auto my-8 flex flex-col gap-8`}>
                    <div className='flex items-center justify-between'>
                        <div className='flex-1'>
                            <h2 className='text-5xl text-graphite-gray font-black'>One Hub, Endless Digital Possibilities.</h2>
                            <form>
                                <input type="email" placeholder="Enter your email address" className='w-1/2 p-2 my-4' />
                                <button type="submit" className='bg-pure-black text-white p-2'>Subscribe</button>
                            </form>
                        </div>
                        <div className='flex-1 flex justify-end'>
                            <div className='w-3/4 border-2 rounded-2xl border-white relative'>
                                <div className='flex gap-3 justify-center absolute -top-5 mx-auto w-full'>
                                    {SocialIcons.map((icon, index) => <div key={index} className='flex border-2 border-white rounded-full justify-center items-center h-10 w-10 bg-soft-black'>
                                        <Link href={icon.link}>
                                            <icon.icon className='text-2xl hover:scale-80 text-gold hover:text-white' />
                                        </Link>
                                    </div>)}
                                </div>
                                <div className='flex flex-col gap-4 text-gold p-12'>
                                    <a className='flex gap-4 items-center' href='mailto:kbqtechworld@gmail.com'>
                                        <div className='border-2 border-gold h-10 w-10 rounded-full flex items-center justify-center'>
                                            <FaEnvelope className='text-xl' />
                                        </div>
                                        <p>kbqtechhub@gmail.com</p>
                                    </a>
                                    <a className='flex gap-4 items-center' href='tel:+233207974511'>
                                        <div className='border-2 border-gold h-10 w-10 rounded-full flex items-center justify-center'>
                                            <FaPhone className='text-xl' />
                                        </div>
                                        <p>+233 20 797 4511</p>
                                    </a>
                                </div>
                                <div className='absolute -bottom-5 w-full flex justify-center'>
                                    <p className='text-center px-4 py-1 text-gold border-2 flex  border-white rounded-2xl bg-soft-black w-fit'>@kbqtechhub</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <h1 className='text-[8rem] font-black text-gold'>KBQ TECH-HUB</h1>
                        <div className='text-center'>
                            <p className='text-center text-graphite-gray'>© {new Date().getFullYear()}. All Rights Reserved.</p>
                        </div>
                    </div>
                </footer>
            </section>
        </section>
    )
}
