import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-auto">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="font-bold text-lg mb-4 text-blue-600">Nomad<span className="text-gray-900">Insights</span></div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Empowering remote workers and digital nomads with productivity tips and lifestyle guides since 2024.
          </p>
        </div>

        {/* Categories - Mock Links */}
        <div>
          <h4 className="font-bold mb-4 text-gray-900">Explore</h4>
          <ul className="text-sm text-gray-500 space-y-2">
            <li><Link href="/" className="hover:text-blue-600 transition">Productivity</Link></li>
            <li><Link href="/" className="hover:text-blue-600 transition">Remote Work</Link></li>
            <li><Link href="/" className="hover:text-blue-600 transition">Lifestyle</Link></li>
          </ul>
        </div>

        {/* Legal & Company */}
        <div>
          <h4 className="font-bold mb-4 text-gray-900">Company</h4>
          <ul className="text-sm text-gray-500 space-y-2">
            <li><Link href="/about" className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-bold mb-4 text-gray-900">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition" aria-label="Facebook">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition" aria-label="Twitter">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition" aria-label="Instagram">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-500">
          © 2026 Nomad Insights - All rights reserved.
        </div>
        <div className="flex items-center space-x-2 mt-4 md:mt-0 text-sm text-gray-400">
             {/* Mock safe favicon/badge */}
             <span className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Secure Connection</span>
        </div>
      </div>
    </footer>
  );
}
