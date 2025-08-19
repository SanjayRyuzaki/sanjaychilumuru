import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDeviceCapabilities } from '@/hooks/use-mobile';

const Hero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { prefersReducedMotion, isLowPower } = useDeviceCapabilities();

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1aqf0r21Zq1hwqVeGuj6BUcK8kYiPStiY/view?usp=sharing', '_blank', 'noopener,noreferrer');
  };
  const handleblog = () => {
    window.open('https://sanjayblogs.netlify.app/', '_blank', 'noopener,noreferrer');
  };

  // Reduce particle count on low-power devices
  const particleCount = isLowPower ? 8 : 15;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" ref={containerRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted -z-10" />
      
      {/* Floating particles effect - optimized for performance */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 -z-10">
          {[...Array(particleCount)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary/15 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={isInView ? {
                opacity: [0.2, 0.6, 0.2],
                y: [0, -15, 0],
              } : { opacity: 0, y: 0 }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: isInView ? Infinity : 0,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Hi, I'm
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
          >
            Sanjay Chilumuru
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-foreground"
          >
            Aspiring Software Development Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            <span className="gradient-text-secondary font-semibold">Creative</span>, 
            <span className="gradient-text-secondary font-semibold"> Curious</span>, and 
            <span className="gradient-text-secondary font-semibold"> Adaptive</span> developer 
            passionate about solving real-world problems with impactful technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 interactive-scale"
              onClick={() => scrollToNext()}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass-button"
              onClick={handleDownloadResume}
            >
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass-button"
              onClick={handleblog}
            >
              Paper Publications
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com/SanjayRyuzaki', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/sanjay-chilumuru-43200722b/', label: 'LinkedIn' },
              { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sanjaychilumuru@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass-card rounded-full hover:bg-primary/10 transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
              >
                <social.icon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={isInView && !prefersReducedMotion ? { y: [0, 8, 0] } : { y: 0 }}
            transition={{ duration: 2, repeat: isInView ? Infinity : 0 }}
            className="cursor-pointer"
            onClick={scrollToNext}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
