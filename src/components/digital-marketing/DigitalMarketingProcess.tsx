import React from 'react';
import { FaRegComments, FaChartLine, FaCogs, FaRocket, FaChartBar } from 'react-icons/fa';

interface ProcessStep {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

export default function DigitalMarketingProcess() {
    const processSteps: ProcessStep[] = [
        {
            id: 1,
            title: "Consultation",
            description: "We start with understanding your business, goals, and target audience.",
            icon: <FaRegComments size={32} />
        },
        {
            id: 2,
            title: "Strategy Development",
            description: "We develop a tailored strategy designed to help you achieve your objectives.",
            icon: <FaChartLine size={32} />
        },
        {
            id: 3,
            title: "Execution",
            description: "We implement the strategy with attention to detail and creativity.",
            icon: <FaRocket size={32} />
        },
        {
            id: 4,
            title: "Optimization",
            description: "We continuously optimize campaigns to improve results and ensure you get the best return on investment.",
            icon: <FaCogs size={32} />
        },
        {
            id: 5,
            title: "Reporting & Feedback",
            description: "We provide you with regular reports and analyze performance to make data-driven decisions.",
            icon: <FaChartBar size={32} />
        },
    ];

  return (
      <section className="w-full py-16 px-4 md:px-8 bg-pure-black rounded-b-2xl">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-14">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text mx-auto w-fit bg-gradient-to-r from-yelly to-winny">
                      Proven Process for Digital Success
                  </h2>
                  <p className="text-lg md:text-xl text-graphite-gray max-w-3xl mx-auto px-2">
                      We follow a strategic, data-driven approach designed to maximize your ROI and deliver
                      exceptional results across all digital marketing channels.
                  </p>
              </div>

              <div className="process_section p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                      {processSteps.map((step, index) => (
                          <div
                              key={step.id}
                              className="relative flex flex-col items-center group"
                          >
                              <div className="circle_gradient flex items-center justify-center w-16 h-16 rounded-full mb-5 transform transition-transform group-hover:scale-110 relative z-10">
                                  {step.icon}
                              </div>

                              {/* Line connecting steps */}
                              {index < processSteps.length - 1 && (
                                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-1 bg-gradient-to-r from-yelly to-winny"></div>
                              )}

                              <div className="text-center w-full">
                                  <h3 className="text-xl font-semibold mb-2 text-color-yelly">{step.title}</h3>
                                  <p className="text-base text-gray-300 px-2 lg:px-1 xl:px-3 mx-auto">
                                      {step.description}
                                  </p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>
  );
}
