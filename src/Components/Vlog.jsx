import React from 'react';
import FullBlogPost from './FullBlogPost';
import Footer from './Footer';

const Vlog = () => {
  const blogPosts = [
    {
      title: 'Benefits of Property Investment',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      excerpt: 'Discover why property investment remains one of the most stable and lucrative opportunities for wealth creation. Learn about the long-term financial benefits and how owning real estate can diversify your portfolio.',
      link: '#',
    },
    {
      title: 'Why You Should Invest in Villas',
      image: 'https://images.unsplash.com/photo-1719299225324-301bad5c333c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      excerpt: 'Villas offer luxurious living spaces, excellent privacy, and higher market value over time. Find out why investing in a villa can provide both lifestyle and financial rewards.',
      link: '#',
    },
    {
      title: 'Understanding the Value of Farmhouses',
      image: 'https://images.unsplash.com/photo-1708359611115-f68c4fa20294?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      excerpt: 'Farmhouses aren’t just retreats; they are valuable real estate assets with growing demand. Discover how owning a farmhouse can provide long-term financial security and a peaceful lifestyle.',
      link: '#',
    },
    {
      title: 'Bungalows: A Smart Investment',
      image: 'https://images.unsplash.com/photo-1632398414290-15262b0ec12d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      excerpt: 'Bungalows provide a unique charm and have become increasingly popular for families and retirees alike. Learn how investing in a bungalow can be both practical and profitable.',
      link: '#',
    },
    {
      title: 'Key Benefits of Purchasing a House',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      excerpt: 'Purchasing a home offers financial security, tax advantages, and a sense of stability. Explore the key reasons why buying a house remains a great long-term investment.',
      link: '#',
    },
  ];

  return (
    <>
    <FullBlogPost/>
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Property Investment Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {post.title}
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              {post.excerpt}
            </p>
            <a
              href={post.link}
              className="text-yellow-600 hover:underline hover:text-yellow-500 transition-all duration-300"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  <Footer/>
    </>
  );
};

export default Vlog;
