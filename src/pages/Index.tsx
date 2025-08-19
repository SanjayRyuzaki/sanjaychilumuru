import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import BlogSection from '@/components/BlogSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <BlogSection />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Sanjay Chilumuru. Built with passion using React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
