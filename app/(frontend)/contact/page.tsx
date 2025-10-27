import ContactHero from '@/components/ContactHero';
import ContactSection from '@/components/ContactSection';
import Faq from '@/components/Faq';
import TrainingEnrollCta from '@/components/TrainingEnrollCta';

export default function ContactPage() {
  return (
    <section className="flex flex-col gap-20 mb-20">
      <ContactHero />
      <ContactSection />
      <Faq />
      <TrainingEnrollCta />
    </section>
  );
}
