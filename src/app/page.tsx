import Clients from '@/components/Clients';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className='flex flex-col gap-20 mb-20'>
      <Hero />
      <Services />
      <Projects />
      <Clients />
      <Testimonials />
    </main>
  );
}
