import Faq from '@/components/Faq'
import Features from '@/components/Features'
import OurSeamlessProcess from '@/components/OurSeamlessProcess'
import Projects from '@/components/Projects'
import TrainingEnrollCta from '@/components/TrainingEnrollCta'
import React from 'react'

export default function ServicesPage() {
    return (
        <section className='flex flex-col gap-20 mb-20'>
            <Features />
            <OurSeamlessProcess />
            <Projects />
            <Faq />
            <TrainingEnrollCta />
        </section>
    )
}
