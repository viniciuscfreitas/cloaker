import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { blogPosts } from '../../../lib/blog-data';

// Add generateStaticParams for static export optimization if needed
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 md:px-0 py-12 max-w-3xl flex-grow">
        <article className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
             <Link href="/" className="hover:text-blue-600">Home</Link> &gt; <span className="text-gray-900">{post.title}</span>
          </div>

          {/* Metadata */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
            {post.title}
          </h1>

          <div
             className="prose prose-lg text-gray-700 max-w-none"
             dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-100">
             <Link href="/" className="text-blue-600 hover:text-blue-800 font-bold">
               ← Back to all posts
             </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
