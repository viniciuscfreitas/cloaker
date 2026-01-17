"use client";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 md:px-0 py-12 max-w-3xl flex-grow">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
           <h1 className="text-4xl font-bold mb-8 text-gray-900">Contact Us</h1>
           <p className="text-gray-600 mb-8">Have a question about a tool we reviewed? Or just want to say hi? Fill out the form below and we'll get back to you as soon as we land.</p>

           <form className="space-y-6" onSubmit={(e) => {e.preventDefault(); alert("Thanks for your message!");}}>
             <div>
               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Your Name"
               />
             </div>

             <div>
               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="you@example.com"
               />
             </div>

             <div>
               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
               <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="How can we help?"
               ></textarea>
             </div>

             <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition w-full md:w-auto">
               Send Message
             </button>
           </form>

           <div className="mt-12 pt-8 border-t border-gray-100 text-center">
             <p className="text-gray-500">Alternatively, email us directly at <a href="mailto:hello@nomadinsights.io" className="text-blue-600 hover:underline">hello@nomadinsights.io</a></p>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
