import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 md:px-0 py-12 max-w-3xl flex-grow">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
           <h1 className="text-3xl font-bold mb-8 text-gray-900">Terms of Service</h1>
           <p className="text-gray-500 mb-6 text-sm">Last Updated: January 01, 2026</p>

           <div className="prose prose-sm text-gray-600">
             <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Agreement to Terms</h3>
             <p className="mb-4">These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Nomad Insights ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).</p>

             <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Intellectual Property Rights</h3>
             <p className="mb-4">Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>

             <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. User Representations</h3>
             <p className="mb-4">By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Use; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</p>

             <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">4. Prohibited Activities</h3>
             <p className="mb-4">You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
