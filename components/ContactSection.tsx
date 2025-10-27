import Link from 'next/link';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';
import { SocialIcons } from '@/data';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className="flex flex-col md:flex-row gap-10 md:px-10">
      <div className="flex-1 h-full flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-medium">Contact Us</h3>
          <p className="text-graphite-gray">
            Welcome to KBQ TECH-HUB, where endless digital possibilities await! We're here to help
            you navigate your digital journey. Whether you have questions, need support, or want to
            share your feedback, don't hesitate to reach out.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <p className="text-center text-white">Get in Touch</p>
          <div className="flex-1 flex justify-center w-full">
            <div className="w-full border-2 rounded-2xl border-white relative">
              <div className="flex gap-2 md:gap-3 justify-center absolute -top-5 mx-auto w-full flex-wrap px-2">
                {SocialIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="flex border-2 border-white rounded-full justify-center items-center h-8 w-8 md:h-10 md:w-10 bg-soft-black"
                  >
                    <Link href={icon.link}>
                      <icon.icon className="text-xl md:text-2xl hover:scale-80 text-gold hover:text-white" />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 text-gold p-6 md:p-12">
                <a
                  className="flex gap-4 items-center text-sm md:text-base"
                  href="mailto:kbqtechworld@gmail.com"
                >
                  <div className="border-2 border-gold h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-lg md:text-xl" />
                  </div>
                  <p>kbqtechhub@gmail.com</p>
                </a>
                <a
                  className="flex gap-4 items-center text-sm md:text-base"
                  href="tel:+233207974511"
                >
                  <div className="border-2 border-gold h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center">
                    <FaPhone className="text-lg md:text-xl" />
                  </div>
                  <p>+233 20 797 4511</p>
                </a>
              </div>
              <div className="absolute -bottom-5 w-full flex justify-center">
                <p className="text-center px-4 py-1 text-gold border-2 flex border-white rounded-2xl bg-soft-black w-fit text-sm md:text-base">
                  @kbqtechhub
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit w-full md:h-auto flex-1">
        <ContactForm />
      </div>
    </section>
  );
}
