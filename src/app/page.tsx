import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className='flex flex-col gap-10 mb-20'>
      <Hero />
      <Services />
      <Projects />
    </main>
  );
}
