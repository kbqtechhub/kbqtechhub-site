import React from 'react'
import SectionTitle from './shared/SectionTitle'
import ProjectSlider from './ProjectSlider'

export default function Projects() {
    return (
        <section className='h-[45rem] w-full bg-yelly rounded-b-[40rem] p-8'>
            <SectionTitle title="Built Projects" color="black" />
            <ProjectSlider />
        </section>
    )
}
