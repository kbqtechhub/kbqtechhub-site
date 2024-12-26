import Hero from '@/components/Hero';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className="min-h-screen grid gap-10 mb-10">
      <Hero />
      <Services />
    </main>
  );
}
