import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 md:px-0 py-12 max-w-3xl flex-grow">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
           <h1 className="text-4xl font-bold mb-8 text-gray-900">About Nomad Insights</h1>

           <div className="prose prose-lg text-gray-700">
             <p className="mb-6">
               Hi, I'm Alex. I started <strong>Nomad Insights</strong> in 2024 with a simple mission: to prove that you don't need to sacrifice productivity to see the world. As a former software engineer turned digital nomad, I've spent the last few years iterating on the perfect travel setup, from Noise-Canceling headphones to finding the best WiFi in Bali.
             </p>
             <p className="mb-6">
               This blog acts as my public notebook. I share everything I learn about maintaining focus in chaotic environments, the gear that actually survives the journey, and the philosophy of minimizing possessions to maximize experiences. I believe that deep work is possible anywhere—if you have the right systems in place.
             </p>

             <h2 className="text-2xl font-bold mb-4 mt-8">Our Philosophy</h2>
             <ul className="list-disc pl-5 space-y-2 mb-6">
               <li><strong>Minimalism:</strong> Less stuff, more freedom.</li>
               <li><strong>Discipline:</strong> Freedom requires structure.</li>
               <li><strong>Connection:</strong> We are not islands, even when we travel alone.</li>
             </ul>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
