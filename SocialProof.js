export default function SocialProof() {
  const testimonials = [
    { name: "Alice", text: "This landing page boosted our conversions by 40%!" },
    { name: "Bob", text: "Super easy to set up and deploy." },
    { name: "Charlie", text: "Tailwind + Next.js is a game changer." },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">What People Say</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 italic">"{t.text}"</p>
            <footer className="mt-4 text-indigo-600 font-semibold">— {t.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
