import TextGradient from './shared/TextGradient';

export default function AboutSection() {
  return (
    <section className="bg-[#fff] shadow-2xl min-h-[350px] h-auto py-8 sm:py-16 md:h-[60vh] md:min-h-[70vh] rounded-3xl relative flex flex-col items-center justify-center overflow-hidden px-3 sm:px-4">
      <div className="h-32 w-32 sm:h-40 sm:w-40 md:h-60 md:w-60 bg-gold rounded-full absolute -top-8 -right-8 sm:-top-10 sm:-right-10 md:-top-20 md:-right-20"></div>
      <div className="hidden md:flex size-[400px] absolute -top-50 left-0  -translate-x-60 circle_gradient rounded-full items-center justify-center">
        <div className="size-[380px] bg-[#fff] rounded-full"></div>
      </div>
      <div className="max-w-2xl mx-auto w-full z-10 px-2 sm:px-4">
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-soft-black font-bold text-center leading-tight tracking-tight mb-4 sm:mb-6">
          Your <TextGradient text="Digital" /> <br className="block sm:hidden" />
          <TextGradient text="Transformation" /> <TextGradient text="Partner" />
        </h2>
        <p className="text-center mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-xl mx-auto">
          Crafting innovative solutions for a smarter, more efficient future.
        </p>
      </div>
      <div className="flex absolute bottom-0 translate-y-[50%] max-w-2xl w-full justify-around px-2 sm:px-4">
        <div className="size-[60px] sm:size-[100px] md:size-[150px] bg-winny rounded-full"></div>
        <div className="size-[60px] sm:size-[100px] md:size-[150px] bg-winny rounded-full"></div>
        <div className="size-[60px] sm:size-[100px] md:size-[150px] bg-winny rounded-full"></div>
      </div>
    </section>
  );
}
