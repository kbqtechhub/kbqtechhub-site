export default function ContactHero() {
  return (
    <section className="border-4 sm:border-8 border-white rounded-3xl min-h-[350px] h-auto py-8 sm:py-16 md:h-[60vh] md:min-h-[70vh] p-4 sm:p-8 contact_hero flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center mb-4 sm:mb-8 leading-tight tracking-tight">
        Your Digital
        <span className="block mt-1 sm:mt-2">Transformation Partner</span>
      </h1>
      <p className="text-white text-center max-w-xl mx-auto text-base sm:text-lg md:text-xl font-medium px-2">
        Ready to transform your business? Let's create something extraordinary together.
      </p>
    </section>
  );
}
