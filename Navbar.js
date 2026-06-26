export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600">AI Landing Page</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
          <li><a href="#pricing" className="hover:text-indigo-600">Pricing</a></li>
          <li><a href="#socialproof" className="hover:text-indigo-600">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
