// src/app/construction/page.js
import Hero from "../components/Hero";

export default function ConstructionPage() {
  return (
    <>
      <Hero
        title="Construction Services"
        subtitle="Quality craftsmanship. Reliable service."
        image="/construction/heroBg.jpg"
      />
      <section className=" mx-auto space-y-4">
        <p>
          I specialize in residential and commercial construction, including
          renovations, new builds, and structural improvements. Every project is
          delivered with attention to detail and integrity.
        </p>
        <ul className="list-disc list-inside flex justify-between">
          <li>Home Renovations</li>
          <li>New Building Projects</li>
          <li>Electrical & Plumbing</li>
          <li>Painting & Interior Finishing</li>
        </ul>
      </section>
    </>
  );
}
