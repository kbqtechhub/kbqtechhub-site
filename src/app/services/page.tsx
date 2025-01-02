import Faq from '@/components/Faq'
import OurSeamlessProcess from '@/components/OurSeamlessProcess'
import Projects from '@/components/Projects'
import TrainingEnrollCta from '@/components/TrainingEnrollCta'
import React from 'react'

export default function ServicesPage() {
    return (
        <section className='flex flex-col gap-20 mb-20'>
            <OurSeamlessProcess />
            <Projects />
            <Faq />
            <TrainingEnrollCta />
        </section>
    )
}
