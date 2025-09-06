import ProjectSlider from './ProjectSlider';
import SectionTitle from './shared/SectionTitle';

export default function Projects() {
  return (
    <section className="md:min-h-[40rem] lg:min-h-[40rem] h-auto w-full bg-gold rounded-3xl md:rounded-b-[40rem] p-8 flex flex-col gap-6 md:gap-10">
      <SectionTitle title="Built Projects" color="pure-black" />
      <ProjectSlider />
    </section>
  );
}
