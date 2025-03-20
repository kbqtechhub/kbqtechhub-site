import React from 'react'
import DigitalMarketingHero from '@/components/digital-marketing/DigitalMarketingHero'
import DigitalMarketingServices from '@/components/digital-marketing/DigitalMarketingServices'
import DigitalMarketingProcess from '@/components/digital-marketing/DigitalMarketingProcess'
import DigitalMarketingProjects from '@/components/digital-marketing/DigitalMarketingProjects'
import DigitalMarketingFaq from '@/components/digital-marketing/DigitalMarketingFaq'
import DigitalMarketingEnrollCta from '@/components/digital-marketing/DigitalMarketingEnrollCta'

export default function DigitalMarketingPage() {
    return (
        <section>
            <DigitalMarketingHero />
            <DigitalMarketingServices />
            <DigitalMarketingProcess />
            <DigitalMarketingProjects />
            <DigitalMarketingFaq />
            <DigitalMarketingEnrollCta />
        </section>
    )
}
