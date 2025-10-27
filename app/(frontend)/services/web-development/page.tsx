import Faq from '@/components/Faq';
import Features from '@/components/Features';
import OurSeamlessProcess from '@/components/OurSeamlessProcess';
import Projects from '@/components/Projects';
import ServiceSection from '@/components/ServiceSection';
import TrainingEnrollCta from '@/components/TrainingEnrollCta';

export default function page() {
  return (
    <section className="flex flex-col gap-20 mb-20">
      <ServiceSection />
      <Features />
      <OurSeamlessProcess />
      <Projects />
      <Faq />
      <TrainingEnrollCta />
    </section>
  );
}
