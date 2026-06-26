export default function Features() {
  const features = [
    { title: "Fast Performance", desc: "Optimized with Next.js and Turbopack." },
    { title: "Responsive Design", desc: "Tailwind ensures mobile‑first layouts." },
    { title: "Easy Deployment", desc: "Deploy instantly with Vercel." },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
