import { BiDevices } from 'react-icons/bi';
import { FaBolt, FaSearchDollar } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import SectionTitle from './shared/SectionTitle';

const features = [
  {
    icon: <MdDesignServices size={24} className="text-winny" />,
    title: 'Bespoke Custom Designs',
    description: "Crafted to reflect your brand's unique identity.",
  },
  {
    icon: <FaSearchDollar size={24} className="text-winny" />,
    title: 'SEO Powerhouse',
    description: 'Engineered to rank high and attract organic traffic effortlessly.',
  },
  {
    icon: <FaBolt size={24} className="text-winny" />,
    title: 'Lightning-Fast Loading Speeds',
    description: 'Keep visitors engaged and reduce bounce rates.',
  },
  {
    icon: <BiDevices size={24} className="text-winny" />,
    title: 'Seamlessly Mobile-Responsive',
    description:
      'Perfectly optimized for all devices, ensuring a flawless user experience on the go.',
  },
];

export default function Features() {
  return (
    <section className="max-w-4xl mx-auto w-full flex flex-col gap-6 sm:gap-10 px-3 sm:px-4 md:px-6 py-4 sm:py-6">
      <SectionTitle title="Our features" color="yellow" />
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
        <div className="bg-gradient-to-br from-yelly to-winny h-32 sm:h-48 md:h-auto md:w-80 rounded-tl-3xl rounded-br-3xl"></div>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-3 sm:gap-4">
              <div className="flex items-center justify-center text-gold shrink-0 mt-1">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl text-gold font-medium">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-graphite-gray">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
