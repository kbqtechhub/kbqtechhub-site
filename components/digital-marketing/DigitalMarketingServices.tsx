import {
  FaAdversal,
  FaBullhorn,
  FaEnvelope,
  FaFileAlt,
  FaHashtag,
  FaSearchengin,
} from 'react-icons/fa';

export default function DigitalMarketingServices() {
  const services = [
    {
      title: 'Social Media Marketing',
      description:
        "Expand your brand's reach with data-driven social media strategies. We manage your social media channels, curate engaging content, and connect with your audience to boost engagement.",
      details: 'Platforms: Facebook, Instagram, Twitter, LinkedIn, TikTok, and more.',
      icon: <FaHashtag className="text-4xl" />,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description: "Improve your website's visibility on search engines and drive organic traffic.",
      details:
        'On-page SEO, off-page SEO, and technical SEO to help you rank higher and reach your target audience.',
      icon: <FaSearchengin className="text-4xl" />,
    },
    {
      title: 'Pay-Per-Click (PPC) Advertising',
      description: 'Generate immediate traffic and leads through effective PPC campaigns.',
      details:
        'We create and manage Google Ads, Bing Ads, and social media ads to ensure your budget works for you.',
      icon: <FaAdversal className="text-4xl" />,
    },
    {
      title: 'Content Marketing',
      description: 'High-quality content that educates, engages, and converts.',
      details:
        "Blog posts, infographics, videos, and email campaigns that reflect your brand's voice and build long-term relationships with your audience.",
      icon: <FaFileAlt className="text-4xl" />,
    },
    {
      title: 'Email Marketing',
      description: 'Nurture relationships with your customers through targeted email campaigns.',
      details:
        'From newsletters to product promotions, we help you deliver the right message at the right time.',
      icon: <FaEnvelope className="text-4xl" />,
    },
    {
      title: 'Brand Strategy and Consulting',
      description:
        'Develop a strong brand identity and messaging that resonates with your audience.',
      details:
        'We work with you to understand your goals, audience, and competitors to create an actionable digital marketing plan.',
      icon: <FaBullhorn className="text-4xl" />,
    },
  ];

  return (
    <section className="py-10 md:py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text mx-auto w-fit bg-gradient-to-r from-yelly to-winny">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-graphite-gray max-w-3xl mx-auto px-2">
            Comprehensive digital marketing solutions tailored to grow your online presence and
            drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg p-5 md:p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center bg-gradient-to-b from-darker-gray to-off-black border border-transparent hover:border-yelly/30 hover:translate-y-[-5px]"
            >
              <div className="circle_gradient flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full mb-4 md:mb-6 text-pure-black">
                <span className="text-3xl md:text-4xl">{service.icon}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-yelly">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-white mb-2 md:mb-4">{service.description}</p>
              <p className="text-xs md:text-sm text-graphite-gray italic mb-4 md:mb-6">
                {service.details}
              </p>
              {/* <button className="mt-auto py-1.5 md:py-2 px-4 md:px-6 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-yelly/20 to-winny/20 hover:from-yelly/40 hover:to-winny/40 border border-yelly/30 transition-all duration-300">
                Learn More
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
