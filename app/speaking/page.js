// src/app/speaking/page.js
import Hero from "../components/Hero";

export default function SpeakingPage() {
  return (
    <>
      <Hero
        title="Motivational Speaking"
        subtitle="Inspiring others to unlock their potential."
        image="/speaking.jpg"
      />
      <section className="max-w-3xl mx-auto p-6 space-y-4">
        <p>
          I speak at conferences, schools, and churches — sharing personal
          stories of overcoming hardship and motivating people to live with
          purpose, discipline, and hope.
        </p>
        <ul className="list-disc list-inside">
          <li>Faith-based Events</li>
          <li>Youth Motivation</li>
          <li>Business & Leadership Talks</li>
          <li>School Visits</li>
        </ul>
      </section>
    </>
  );
}
