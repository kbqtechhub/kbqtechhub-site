import React from 'react'
import Image from 'next/image'
import SectionTitle from './shared/SectionTitle'

const services = [
    {
        title: 'WEB DEVELOPMENT',
        description: 'Design responsive, visually stunning websites that enhance your brand, engage audiences and drive results. We deliver customized digital solutions to make your online presence stand out.',
        icon: <Image src="/images/Website Coding.svg" alt="Web Development" width={80} height={80} priority />,
        button: 'Get a Custom Website'
    },
    {
        title: 'APP DEVELOPMENT',
        description: 'Build innovative mobile and web applications tailored to your business needs. Our apps priotize functionality, user experience and modern design to keep your business ahead in the digital age.',
        icon: <Image src="/images/Responsive Design.svg" alt="App Development" width={80} height={80} priority />,
        button: 'Start your App Project'
    },
    {
        title: 'Digital Marketing',
        description: 'Boost your branch with tailored digital marketing strategies, including SEO, social media, email marketing and more. Connect with your audience, increase visibility and achieve measurable growth in the online marketplace.',
        icon: <Image src="/images/Digital Marketing.svg" alt="Digital Marketing" width={80} height={80} />,
        button: 'Boost Your Brand'
    },
    {
        title: 'IT Training',
        description: 'Gain essential IT skills with expert-led training programs. We offer practical learning for individuals and teams, empowering success in today’s competitive, tech-driven world.',
        icon: <Image src="/images/Training.svg" alt="IT Training" width={80} height={80} />,
        button: 'Enroll in a Course'
    },
    {
        title: 'Photography',
        description: 'Capture impactful visuals for brands, events, or personal moments. Our professional photography delivers high-quality, creative images that leave lasting impressions and elevate your story.',
        icon: <Image src="/images/Action Camera.svg" alt="Photography" width={80} height={80} />,
        button: 'Book a Photoshoot'
    },
    {
        title: 'Online Store',
        description: 'Shop the latest laptops, accessories, and gadgets in our online store. Discover high-quality tech essentials designed to keep you connected, productive, and ahead in the digital world.',
        icon: <Image src="/images/online store.svg" alt="Online Store" width={80} height={80} />,
        button: 'Shop Now'
    }
]
export default function ServiceMobileView() {
    return (
        <section className='md:hidden px-4 flex flex-col gap-10'>
            <SectionTitle title='Our Services' color='yellow' />
            <div className='grid gap-8'>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className='bg-darker-gray transform transition-all duration-300 hover:scale-[1.02] grid gap-6 rounded-2xl rounded-tr-[3.5rem] px-6 py-8 shadow-lg hover:shadow-xl border border-gray-800'
                    >
                        <div className='flex flex-col gap-5 items-center'>
                            <div className='h-24 w-24 flex items-center justify-center bg-soft-yelly rounded-full border-4 border-white shadow-lg transform transition-transform duration-300 hover:rotate-3'>
                                {service.icon}
                            </div>
                            <h2 className='text-yelly text-2xl font-semibold text-center tracking-wide'>
                                {service.title}
                            </h2>
                        </div>
                        <div className="flex flex-col gap-5 items-center">
                            <p className='text-gray-300 text-base leading-relaxed text-center'>
                                {service.description}
                            </p>
                            <button className="w-full bg-gradient-to-r from-muted-wine to-muted-yelly text-white px-6 py-3 rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-sm hover:bg-gradient-to-r hover:from-soft-wine hover:to-soft-yelly transition-all duration-300 shadow-md hover:shadow-xl text-base font-medium">
                                {service.button}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
