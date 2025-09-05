import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';
import { useDeviceCapabilities } from '@/hooks/use-mobile';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { prefersReducedMotion } = useDeviceCapabilities();

  const experiences = [
    {
      title: "Software Development Intern",
      company: "Infosys Springboard",
      location: "Remote, India",
      period: "Jul 2024",
      description: "Built a real-time disaster-tweet classifier using NLP and ML pipelines, and deployed a Streamlit web app with Twitter API integration for scalable, low-latency predictions.",
      skills: ["NLP", "Python", "Machine Learning", "AI"],
    },
    {
      title: "Cybersecurity Intern",
      company: "IBM",
      location: "Remote",
      period: "Summer 2024",
      description: "Developed a tool to securely hide and retrieve messages in images using efficient algorithms and a simple UI for secure communication.",
      skills: ["Cybersecurity", "Threat Analysis", "Security Protocols"],
    },

  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.3 : 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer with a strong foundation in full-stack development 
              and a vision to create technology that makes a meaningful impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Personal Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  My Journey
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As an aspiring Software Development Engineer, I'm driven by 
                    <span className="text-primary font-medium"> curiosity</span> and a passion for 
                    <span className="text-accent font-medium"> innovation</span>. 
                    My journey began with a fascination for how technology can solve 
                    complex real-world problems.
                  </p>
                  <p>
                    I thrive in collaborative environments where 
                    <span className="text-secondary font-medium"> creativity</span> meets 
                    <span className="text-primary font-medium"> technical excellence</span>. 
                    My goal is to contribute to impactful projects at leading tech companies 
                    like Amazon, where I can grow and make a difference.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, 
                    contributing to open-source projects, or learning about the latest 
                    developments in AI and machine learning.
                  </p>
                </div>

                {/* Key Traits */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Key Traits</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Creative', 'Hardworking', 'Adaptive', 'Curious', 'Collaborative'].map((trait) => (
                      <motion.span
                        key={trait}
                        whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                        className="px-4 py-2 glass-card rounded-full text-sm font-medium gradient-text-secondary"
                      >
                        {trait}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Experience Timeline */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">
                Experience
              </h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    variants={itemVariants}
                    whileHover={prefersReducedMotion ? {} : { y: -5 }}
                    className="glass-card p-6 rounded-2xl interactive-float group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                          {exp.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
