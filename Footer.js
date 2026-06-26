export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} AI Landing Page. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
