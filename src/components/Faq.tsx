'use client'

import { motion, AnimatePresence } from "motion/react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        question: "What types of websites do you develop?",
        answer: "We develop a wide range of websites, including corporate sites, e-commerce platforms, portfolios, blogs, and custom solutions tailored to meet your specific business needs. All our websites are responsive and optimized for performance.",
    },
    {
        question: "How long does it typically take to complete a website?",
        answer: "Project timelines vary depending on complexity and requirements. A simple website might take 2-4 weeks, while more complex projects can take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
        question: "Do you provide website maintenance services?",
        answer: "Yes, we offer comprehensive maintenance packages that include regular updates, security patches, content updates, backup management, and technical support to keep your website running smoothly.",
    },
    // {
    //     question: "What technologies do you use for development?",
    //     answer: "We use modern technologies like React, Next.js, TypeScript, and TailwindCSS for frontend development. For backend, we work with Node.js, Python, and various databases. We also integrate AI capabilities using technologies like OpenAI's GPT models and TensorFlow. We choose the best tech stack based on project requirements.",
    // },
    // {
    //     question: "Do you offer AI integration services?",
    //     answer: "Yes, we specialize in integrating AI capabilities into websites and applications. This includes chatbots, content generation, image recognition, recommendation systems, and custom AI solutions tailored to your business needs.",
    // },
    {
        question: "Do you offer SEO services with website development?",
        answer: "Yes, we implement SEO best practices during development and offer additional SEO services including keyword research, on-page optimization, technical SEO, and performance optimization to improve your site's visibility.",
    },
    {
        question: "Can you help with website redesign projects?",
        answer: "Absolutely! We specialize in website redesigns, helping businesses modernize their online presence while maintaining their brand identity and improving user experience and functionality.",
    },
    {
        question: "Do you provide custom integrations with third-party services?",
        answer: "Yes, we can integrate your website with various third-party services including CRM systems, payment gateways, marketing tools, analytics platforms, AI services, and any other APIs or services your business requires.",
    }
]

export default function Faq() {
    return (
        <div className="faq_section p-8 max-w-4xl w-[90%] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-yellow-500 text-lg font-medium">FAQs</h3>
                <h2 className="text-zinc-400 text-4xl font-semibold mb-8">Questions & Answers</h2>

                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <AccordionItem
                                value={`item-${index}`}
                                className="border-none rounded-xl bg-light-black overflow-hidden"
                            >
                                <AccordionTrigger className="px-6 py-4 text-lg text-white hover:no-underline [&[data-state=open]>div]:rotate-45">
                                    {faq.question}
                                </AccordionTrigger>
                                <AnimatePresence>
                                    <AccordionContent className="px-6 py-4">
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-gold text-base"
                                        >
                                            {faq.answer}
                                        </motion.p>
                                    </AccordionContent>
                                </AnimatePresence>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </Accordion>
            </motion.div>
        </div>
    )
}

