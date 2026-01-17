"use client";

import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-blue-600">
            NomadLife<span className="text-gray-900">.io</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-blue-600">Start Here</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">Destinations</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">Gear</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">About</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-0 py-12 max-w-3xl flex-grow">
        <article className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          {/* Metadata */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Productivity</span>
            <span>•</span>
            <span>January 10, 2026</span>
            <span>•</span>
            <span>5 min read</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            10 Ways to Maintain Work-Life Balance as a Digital Nomad
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Traveling the world while working is a dream for many, but burnout is real. Here is how I managed to stay productive while exploring 15 countries last year.
          </p>

          <div className="prose prose-lg text-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Stick to a Routine</h2>
            <p className="mb-6">
              Just because you are in a new time zone doesn't mean your body knows it yet. Waking up at the same time every day helps regulate your circadian rhythm and boosts morning focus.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Define Your Workspace</h2>
            <p className="mb-6">
              Working from bed is tempting, but it kills productivity. Find a local co-working space or a quiet café. Associating a specific physical space with "work mode" triggers deep focus.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
              <p className="italic font-medium text-blue-900">
                "The freedom to roam is not the freedom to slack off. Discipline is the bridge between goals and accomplishment."
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. The Power of "No"</h2>
            <p className="mb-6">
              When you're in a hostel or community, there's always a party or a day trip happening. Learning to say no during your work hours is the most valuable skill you can develop.
            </p>
          </div>

          {/* Newsletter / CTA */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="bg-gray-900 rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">Join our Weekly Newsletter</h3>
              <p className="text-gray-400 mb-6">Get remote work tips delivered straight to your inbox. No spam, ever.</p>
              <form className="flex flex-col md:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-bold transition">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 mt-12">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-lg mb-4">NomadLife.io</div>
            <p className="text-gray-500 text-sm">Empowering remote workers since 2024.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="text-sm text-gray-500 space-y-2">
              <li><Link href="#">Tech Gear</Link></li>
              <li><Link href="#">Travel Insurance</Link></li>
              <li><Link href="#">Co-working</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="text-sm text-gray-500 space-y-2">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
          © 2026 NomadLife.io. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
