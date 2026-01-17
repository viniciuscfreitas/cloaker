import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 md:px-0 py-12 max-w-3xl flex-grow">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
           <h1 className="text-3xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
           <p className="text-gray-500 mb-6 text-sm">Last Updated: January 01, 2026</p>

           <div className="prose prose-sm text-gray-600">
             <p>Nomad Insights ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Nomad Insights.</p>

             <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Information We Collect</h3>
             <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
             <ul className="list-disc pl-5 space-y-1 mb-4">
               <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
               <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
             </ul>

             <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Use of Your Information</h3>
             <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
             <ul className="list-disc pl-5 space-y-1 mb-4">
               <li>Assist law enforcement and respond to subpoena.</li>
               <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
               <li>Send you a newsletter.</li>
             </ul>

             <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. Disclosure of Your Information</h3>
             <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
             <ul className="list-disc pl-5 space-y-1 mb-4">
               <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
             </ul>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
