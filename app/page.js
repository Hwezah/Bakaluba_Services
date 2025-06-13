import Hero from "./components/Hero"; // Import the shared Hero component
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Crafting Spaces. Inspiring Lives."
        image="/construction/heroBg.jpg" // Ensure construction.jpg is in your /public directory
        alt="Modern building architecture under a clear sky" // Provide a descriptive alt text
        subtitle="Construction & Speaking Services"
      />
      <section className="mx-auto text-center ">
        <p className="text-xl">
          Welcome! I offer expert construction services and life-changing
          motivational talks.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            href="/construction"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Explore Construction
          </Link>
          <Link
            href="/speaking"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
          >
            Explore Speaking
          </Link>
        </div>
      </section>
    </>
  );
}
