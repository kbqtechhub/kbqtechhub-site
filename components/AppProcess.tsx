import SectionTitle from './shared/SectionTitle';
import { Button } from './ui/button';

const process = [
  'Idea Validation',
  'Wireframing & Prototype',
  'Agile Development',
  'Testing & Quality Assurance',
  'Launch & Continuous Support',
];

export default function AppProcess() {
  return (
    <section className="max-w-4xl mx-auto w-[90%] process_section p-10 min-h-[50vh] flex flex-col md:flex-row justify-between gap-10 md:gap-10">
      <div className="w-full md:w-[45%] self-center flex items-start flex-col gap-8">
        <SectionTitle title="Our Process" color="yellow" />
        <h3 className="text-2xl md:text-4xl text-graphite-gray font-black leading-tight">
          Unlock Your App's Potential with Our Proven Process!
        </h3>
        <Button className="rounded-3xl self-center md:self-start px-10 py-6 red_gradient text-white shadow-2xl text-lg">
          Discuss Your App Idea
        </Button>
      </div>
      <div className="w-full md:w-[55%] flex justify-end">
        <ul className="flex flex-col gap-8 w-full md:w-[95%] relative">
          {process.map((item, index) => (
            <li
              key={index}
              className={`bg-yelly text-soft-black p-4 rounded-lg flex items-center gap-4 relative
                            ${index % 2 === 0 ? 'mr-0' : 'mr-20'}
                            ${index < process.length - 1 ? 'after:content-[""] after:absolute after:w-4 after:h-8 after:bg-yelly after:rotate-45 after:-bottom-4 after:right-12' : ''}
                        `}
            >
              <span className="w-8 h-8 bg-soft-black text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold">{item}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
