import React from 'react'

export default function ContactForm() {
    return (
        <div className='border-2 border-white rounded-2xl p-6'>
            <form className='flex flex-col gap-4'>
                <input className='outline-none px-4 py-2 bg-light-black rounded-md' type="text" placeholder='Name*' />
                <input className='outline-none px-4 py-2 bg-light-black rounded-md' type="email" placeholder='Email*' />
                <input className='outline-none px-4 py-2 bg-light-black rounded-md' type="tel" placeholder='Phone' />
                <input className='outline-none px-4 py-2 bg-light-black rounded-md' type="text" placeholder='Company' />
                <textarea className='outline-none px-4 py-2 bg-light-black rounded-md' rows={4} placeholder='Message'></textarea>
                <button className='bg-white px-6 w-fit self-end text-soft-black font-medium py-2 rounded-sm hover:bg-graphite-gray rounded-tl-3xl rounded-br-3xl'>Send Message</button>
            </form>
        </div>
    )
}
