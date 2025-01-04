import React from 'react'
import SectionTitle from './shared/SectionTitle'
import ProjectSlider from './ProjectSlider'

export default function Projects() {
    return (
        <section className='min-h-[30rem] md:min-h-[40rem] lg:min-h-[40rem] h-auto w-full bg-gold rounded-b-[40rem] p-8'>
            <SectionTitle title="Built Projects" color="black" />
            <ProjectSlider />
        </section>
    )
}
