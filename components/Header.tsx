import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl tracking-tight text-blue-600 hover:text-blue-700 transition">
          Nomad<span className="text-gray-900">Insights</span>
        </Link>
        <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
          <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1">Contact</Link>
        </nav>
        {/* Mobile menu button could go here */}
      </div>
    </header>
  );
}
