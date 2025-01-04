import React from 'react'
import SectionTitle from './shared/SectionTitle'

const features = [
    {
        title: 'Next-Gen Native Mobile Apps',
        description: 'Elevate user experiences with cutting-edge native apps.',
        image: ''
    },
    {
        title: 'Versatile Cross-Platform Solutions',
        description: 'Seamlessly reach users across multiple devices.',
        image: ''
    },
    {
        title: 'Robust Enterprise Applications',
        description: 'Empower your business with scalable, high-performance solutions.',
        image: ''
    },
    {
        title: 'Continuous Maintenance & Updates',
        description: 'Stay ahead with ongoing support and enhancements.',
        image: ''
    },
]

export default function AppFeatures() {
    return (
        <section className="container mx-auto px-4 py-8 sm:py-12">
            <SectionTitle title='Our Experts' color='yellow' />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 max-w-4xl mx-auto">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="p-3 sm:p-4 border-2 border-graphite-gray rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className='h-32 sm:h-40 bg-gold rounded-lg'></div>
                        <div className='flex flex-col space-y-2 sm:space-y-4 mt-3 sm:mt-4'>
                            <h3 className='text-xl sm:text-xl font-bold text-gold'>{feature.title}</h3>
                            <p className='text-sm sm:text-base text-white'>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
