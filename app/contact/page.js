// src/app/contact/page.js
import Hero from "../components/Hero";

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Me"
        subtitle="Let's build something or inspire someone."
        image="/construction.jpg"
      />
      <section className=" mx-auto p-6 space-y-4">
        <p>
          Interested in working together or inviting me to speak? Send a message
          below.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
