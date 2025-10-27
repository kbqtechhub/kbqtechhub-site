export default function NewsletterForm() {
  return (
    <section className="max-w-xl mx-auto w-full bg-gold rounded-3xl shadow-2xl p-10">
      <h2 className="text-2xl font-bold text-center text-white">Subscribe to our newsletter</h2>
      <p className="text-center text-white">
        Get the latest news, updates, and articles straight to your inbox.
      </p>
      <form className="flex flex-col gap-4 mt-4">
        <div className="flex gap-4 w-full">
          <input
            type="email"
            placeholder="Email"
            className="p-2 bg-white rounded-lg flex-1 text-darker-gray placeholder:text-dark-gray"
          />
          <input
            type="text"
            placeholder="Name"
            className="p-2 bg-white rounded-lg flex-1 text-darker-gray placeholder:text-dark-gray"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-white text-sm">
            By submitting this form you are signing up for relevant content nd news form KBQ
            TECH-HUB. You can unsubscribe from these communication at any time.
          </p>
          <button className="bg-[#fff] text-yelly rounded-lg p-2">Subscribe</button>
        </div>
      </form>
    </section>
  );
}
