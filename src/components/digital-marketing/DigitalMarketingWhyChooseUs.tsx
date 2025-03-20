"use client";
import React, { useState } from 'react'
import { BiCustomize } from 'react-icons/bi'
import { IoStatsChartSharp } from 'react-icons/io5'
import { FaUsers, FaChartLine } from 'react-icons/fa'
import { motion } from 'motion/react'

export default function DigitalMarketingWhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const reasons = [
    {
      icon: <BiCustomize className="w-10 h-10 text-yelly" />,
      title: "Customized Solutions",
      description: "We understand that every business is unique. Our solutions are tailored to fit your specific needs and goals."
    },
    {
      icon: <IoStatsChartSharp className="w-10 h-10 text-winny" />,
      title: "Proven Results",
      description: "We focus on delivering measurable results. From increasing traffic to improving conversion rates, we'll show you the impact of our work."
    },
    {
      icon: <FaUsers className="w-10 h-10 text-yelly" />,
      title: "Experienced Team",
      description: "Our team of digital marketing experts has years of experience helping businesses succeed online."
    },
    {
      icon: <FaChartLine className="w-10 h-10 text-winny" />,
      title: "Transparent Reporting",
      description: "Stay informed about the performance of your campaigns with detailed and transparent reports."
    }
  ]

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background decorative elements - simplified */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-yelly blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-winny blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 inline-block relative">
            <span className="bg-clip-text text-transparent text_gradient">Why Choose Us?</span>
            <div className="h-1 w-1/3 bg-gradient-to-r from-yelly to-winny mx-auto mt-2 rounded-full"></div>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
            Partner with us for digital marketing services that deliver real business growth and transform your online presence
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-stretch gap-8 mx-auto">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className={`relative bg-soft-black p-8 rounded-lg border-2 border-transparent 
                        w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-1.5rem)] flex flex-col
                        transition-all duration-200 ${hoveredIndex === index ? 'z-20' : 'z-10'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: index % 2 === 0 ? 0 : 16
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Simplified border effect */}
              <div className="absolute inset-0 rounded-lg process_section -z-10"></div>
              
              {/* Content with minimal icon animation */}
              <div className="mb-6">
                <motion.div
                  animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {reason.icon}
                </motion.div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-yelly">{reason.title}</h3>
              <p className="text-white leading-relaxed flex-grow">{reason.description}</p>
              
              {/* Simple indicator on hover */}
              {hoveredIndex === index && (
                <div className="absolute bottom-4 right-4 text-yelly">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
