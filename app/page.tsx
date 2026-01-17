"use client";

import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts } from '../lib/blog-data';

export default function Home() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-4 block">Productivity & Lifestyle</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Design Your Life, <br/>Work From Anywhere.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Nomad Insights is the premier resource for digital nomads looking to balance productivity, travel, and well-being.
              </p>
              <div className="flex space-x-4">
                <Link href={`/posts/${featuredPost.slug}`} className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
                  Read Latest Post
                </Link>
                <Link href="/about" className="px-8 py-4 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-gray-200 transition">
                  About Us
                </Link>
              </div>
            </div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for Hero Image - will replace with generated image */}
               <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400">
                  <img src="/hero-image.png" alt="Workspace with coffee" className="object-cover w-full h-full" />
               </div>
            </div>
          </div>
        </section>

        {/* Featured Post Teaser (First Post) */}
        <section className="container mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Insights</h2>
            <Link href="/" className="text-blue-600 font-medium hover:underline">View All</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 overflow-hidden flex flex-col focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
                <div className="h-48 bg-gray-200 relative">
                   <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                   />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 leading-snug">
                    <Link href={`/posts/${post.slug}`} className="hover:text-blue-600 transition focus:outline-none after:absolute after:inset-0">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between relative z-10">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-blue-600 text-sm font-semibold group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-gray-900 text-white py-20 mt-12">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Join 15,000+ Nomads</h2>
            <p className="text-gray-400 mb-8">Get the latest productivity tips and travel guides delivered to your inbox every Tuesday.</p>
            <form className="flex flex-col md:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-lg font-bold transition shadow-lg">
                  Subscribe Free
                </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">We care about your data in our <Link href="/privacy" className="underline hover:text-gray-300">privacy policy</Link>.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
