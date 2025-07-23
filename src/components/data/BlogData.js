// import { BlogPost, BlogCategory } from './../ui/types/Blg';

export const blogPosts = [
  {
    id: '1',
    title: 'Building Scalable React Applications with Modern Architecture',
    excerpt: 'Learn how to structure React applications for maximum scalability and maintainability using modern patterns and best practices.',
    content: 'Full content here...',
    author: 'Indra Pangestu',
    publishedAt: '2024-12-15',
    readTime: '8 min read',
    category: 'React',
    tags: ['React', 'Architecture', 'Scalability'],
    imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '2',
    title: 'Mastering TypeScript: Advanced Types and Patterns',
    excerpt: 'Dive deep into TypeScript\'s advanced type system and learn patterns that will make your code more robust and maintainable.',
    content: 'Full content here...',
    author: 'Indra Pangestu',
    publishedAt: '2024-12-10',
    readTime: '12 min read',
    category: 'TypeScript',
    tags: ['TypeScript', 'Advanced', 'Patterns'],
    imageUrl: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the emerging trends and technologies that will shape the future of web development in the coming years.',
    content: 'Full content here...',
    author: 'Indra Pangestu',
    publishedAt: '2024-12-05',
    readTime: '6 min read',
    category: 'Web Development',
    tags: ['Trends', 'Future', 'Technology'],
    imageUrl: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Optimizing Performance in Next.js Applications',
    excerpt: 'Learn practical techniques to optimize your Next.js applications for better performance and user experience.',
    content: 'Full content here...',
    author: 'Indra Pangestu',
    publishedAt: '2024-11-28',
    readTime: '10 min read',
    category: 'Next.js',
    tags: ['Next.js', 'Performance', 'Optimization'],
    imageUrl: 'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'CSS Grid vs Flexbox: When to Use Which',
    excerpt: 'Understanding the differences between CSS Grid and Flexbox, and knowing when to use each layout method effectively.',
    content: 'Full content here...',
    author: 'Indra Pangestu',
    publishedAt: '2024-11-20',
    readTime: '7 min read',
    category: 'CSS',
    tags: ['CSS', 'Grid', 'Flexbox', 'Layout'],
    imageUrl: 'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'Building RESTful APIs with Node.js and Express',
    excerpt: 'A comprehensive guide to building robust and scalable RESTful APIs using Node.js and Express framework.',
    content: 'Full content here...',
    author: 'Indra Pangestu',
    publishedAt: '2024-11-15',
    readTime: '15 min read',
    category: 'Backend',
    tags: ['Node.js', 'Express', 'API', 'REST'],
    imageUrl: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const blogCategories = [
  { id: 'all', name: 'All Posts', count: blogPosts.length },
  { id: 'react', name: 'React', count: blogPosts.filter(post => post.category === 'React').length },
  { id: 'typescript', name: 'TypeScript', count: blogPosts.filter(post => post.category === 'TypeScript').length },
  { id: 'web-development', name: 'Web Development', count: blogPosts.filter(post => post.category === 'Web Development').length },
  { id: 'next-js', name: 'Next.js', count: blogPosts.filter(post => post.category === 'Next.js').length },
  { id: 'css', name: 'CSS', count: blogPosts.filter(post => post.category === 'CSS').length },
  { id: 'backend', name: 'Backend', count: blogPosts.filter(post => post.category === 'Backend').length }
];