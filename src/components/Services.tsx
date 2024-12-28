import Image from 'next/image'
import HorizontalScrollCarousel from "./shared/HorizontalScrollCarousel";

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

export default function Services() {
    return (
        <>
            <HorizontalScrollCarousel>
                <section className='flex gap-10'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='bg-darker-gray flex-shrink-0 grid gap-10 w-[800px] rounded-2xl rounded-tr-[10rem] px-8 py-10'
                        >
                            <div className='flex flex-col gap-4 md:flex-row justify-between items-center'>
                                <h2 className='text-yelly text-3xl'>{service.title}</h2>
                                <div className='h-40 w-40 flex items-center justify-center bg-soft-yelly rounded-full border-8 border-white'>
                                    {service.icon}
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
                                <p className='text-white text-lg w-full md:w-[20rem] font-extralight'>{service.description}</p>
                                <button className="w-full md:w-fit bg-gradient-to-r from-muted-wine to-muted-yelly text-white px-6 py-2 rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-sm hover:bg-gradient-to-r hover:from-soft-wine hover:to-soft-yelly shadow-md hover:shadow-sm">
                                    {service.button}
                                </button>
                            </div>
                        </div>
                    ))}
                </section>
            </HorizontalScrollCarousel>
        </>

    )
}
