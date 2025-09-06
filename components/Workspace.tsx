export default function Workspace() {
  return (
    <section className="bg-darker-gray p-4 sm:p-6 md:p-10 flex items-center justify-center min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] rounded-3xl shadow-sm">
      <div className="size-[300px] sm:size-[400px] md:size-[500px] rounded-full flex items-center justify-center workspace">
        <div className="bg-white size-10/12 rounded-full flex items-center justify-center shadow-2xl">
          <h2 className="max-w-[15rem] sm:max-w-[18rem] md:max-w-[20rem] text-sm sm:text-base md:text-lg text-center w-full text-soft-black font-bold">
            Where <span className="text-blue-500">innovation</span> meets{' '}
            <span className="text-purple-500">creativity</span>. Our{' '}
            <span className="text-green-500">tech-driven</span>,{' '}
            <span className="text-orange-500">diverse</span> team turns{' '}
            <span className="text-cyan-500">ideas</span> into{' '}
            <span className="text-red-500">reality</span>, one{' '}
            <span className="text-indigo-500">solution</span> at a time.
          </h2>
        </div>
      </div>
    </section>
  );
}
