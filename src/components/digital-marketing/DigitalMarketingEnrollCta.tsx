import React from 'react'
import Link from 'next/link'

export default function DigitalMarketingEnrollCta() {
  return (
    <div className="w-full py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto rounded-lg p-8 md:p-12 workspace text-white shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get Started Today</h2>

        <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
          Ready to take your digital marketing to the next level? Whether you're looking to build brand awareness,
          drive traffic, or increase sales, we've got the skills and tools to help you succeed.
        </p>

        <div className="flex justify-center">
          <Link
            href="/contact"
            className="red_gradient text-white font-bold py-3 px-8 rounded-full 
            text-lg transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Contact Us for a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}
