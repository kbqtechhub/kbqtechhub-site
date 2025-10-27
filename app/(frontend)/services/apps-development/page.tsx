import AppDevelopmentSection from '@/components/AppDevelopmentSection';
import AppFeatures from '@/components/AppFeatures';
import AppProcess from '@/components/AppProcess';
import Faq from '@/components/Faq';
import Projects from '@/components/Projects';
import TrainingEnrollCta from '@/components/TrainingEnrollCta';

export default function AppsDevelopmentPage() {
  return (
    <section className="flex flex-col gap-20 mb-20">
      <AppDevelopmentSection />
      <AppFeatures />
      <AppProcess />
      <Projects />
      <Faq />
      <TrainingEnrollCta />
    </section>
  );
}
