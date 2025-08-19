import { motion } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDeviceCapabilities } from '@/hooks/use-mobile';

const BLOG_URL = 'https://sanjayblogs.netlify.app/';

const BlogSection = () => {
  const ref = useRef(null);
  const { prefersReducedMotion } = useDeviceCapabilities();

  const handleBlogClick = () => {
    window.open(BLOG_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              My Blog & Publications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Explore my latest articles, technical blogs, and research publications. Dive deeper into my thoughts on software engineering, AI, and more!
            </p>
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 interactive-scale"
              onClick={handleBlogClick}
            >
              Visit Blog
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
