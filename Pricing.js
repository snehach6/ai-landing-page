export default function Pricing() {
  const plans = [
    { name: "Starter", price: "$9/mo", features: ["Basic AI tools", "Email support"] },
    { name: "Pro", price: "$29/mo", features: ["Advanced AI tools", "Priority support", "Analytics"] },
    { name: "Enterprise", price: "$99/mo", features: ["Custom solutions", "Dedicated support", "Unlimited usage"] },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((p, i) => (
          <div key={i} className="border rounded-lg p-6 text-center hover:shadow-lg">
            <h3 className="text-2xl font-semibold">{p.name}</h3>
            <p className="text-indigo-600 text-xl font-bold mt-2">{p.price}</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              {p.features.map((f, j) => <li key={j}>✔ {f}</li>)}
            </ul>
            <button className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
