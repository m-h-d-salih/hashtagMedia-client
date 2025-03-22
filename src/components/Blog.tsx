import swatches from '../assets/craft.png';
import MERCHANDISING from '../assets/merchantising.png';
import PROFESSIONAL from '../assets/professionnalcare.png';
import BlogCard from './ui/BlogCard';

const Blog = () => {
  const blogPosts = [
    {
      title: 'FREE SWATCHES',
      description: 'Swatches let customers shop confidently.',
      img: swatches,
      size: '243 × 48',
      buttonText: 'READ MORE'
    },
    {
      title: 'MERCHANDISING GUIDE',
      description: 'Tips from a pro for your retail space.',
      img: MERCHANDISING,
      buttonText: 'READ MORE'
    },
    {
      title: 'PROFESSIONAL CARE',
      description: 'Care advice for keeping products at their best.',
      img: PROFESSIONAL,
      buttonText: 'READ MORE'
    }
  ];

  return (
    <div className="py-20 px-4 w-full text-center bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-2">
          <div className="h-px bg-gray-400 w-24"></div>
          <h2 className="text-2xl font-bold mx-4 text-[#2C3B7C]">LATEST FROM BLOG</h2>
          <div className="h-px bg-gray-400 w-24"></div>
        </div>
        <p className="text-gray-600 text-sm mb-12">The freshest and most exciting news</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
            <BlogCard 
              key={index}
              title={post.title}
              description={post.description}
              img={post.img}
              size={post.size}
              buttonText={post.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
