import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code, Database, Brain, Search, Briefcase, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDeviceCapabilities } from '@/hooks/use-mobile';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { prefersReducedMotion } = useDeviceCapabilities();

  const projects = [
    {
      title: "AI Scribe Smart App",
      description: "Advanced AI-powered transcription and note-taking application with smart summarization, speaker identification, and real-time collaboration features for professionals.",
      tech: ["React Native", "Python", "OpenAI API", "Node.js", "MongoDB"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      featured: true,
      image: "/scribe-smart.png",
      githubUrl: "https://github.com/SanjayRyuzaki/scribe-smart",
      demoUrl: "https://scribe-smart.onrender.com",
    },
    {
      title: "ATS Resume Scoring Website",
      description: "Intelligent resume analysis system using AI to help job seekers optimize their resumes for Applicant Tracking Systems. Features real-time scoring, keyword analysis, and improvement suggestions.",
      tech: ["React", "Python", "NLP", "Flask", "Machine Learning"],
      icon: Search,
      gradient: "from-blue-500 to-cyan-500",
      featured: true,
      image: "/ats.png",
      githubUrl: "https://github.com/yourusername/ats-resume-scoring",
      demoUrl: "https://ats-demo-phi.vercel.app/",
    },

    {
      title: "Invention Management System",
      description: "Comprehensive platform for managing intellectual property, patent applications, and innovation workflows with document management and collaboration tools.",
      tech: ["Vue.js", "Django", "PostgreSQL", "Redis", "Docker"],
      icon: Code,
      gradient: "from-orange-500 to-red-500",
      featured: false,
      image: "/placeholder.svg",
      githubUrl: "https://github.com/yourusername/invention-management",
      demoUrl: "https://invention-management.vercel.app",
    },
    {
      title: "YouTube Data Analysis",
      description: "Big data analytics platform built with Hadoop ecosystem for processing and analyzing YouTube video metadata, trends, and user engagement patterns.",
      tech: ["Hadoop", "Spark", "Python", "Kafka", "Tableau"],
      icon: Video,
      gradient: "from-indigo-500 to-purple-500",
      featured: false,
      image: "/placeholder.svg",
      githubUrl: "https://github.com/yourusername/youtube-analysis",
      demoUrl: "https://youtube-analysis.vercel.app",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with real-time updates, custom chart types, and export capabilities for business intelligence.",
      tech: ["D3.js", "React", "Node.js", "MongoDB", "WebSocket"],
      icon: Database,
      gradient: "from-yellow-500 to-orange-500",
      featured: false,
      image: "/placeholder.svg",
      githubUrl: "https://github.com/yourusername/data-viz-dashboard",
      demoUrl: "https://data-viz-dashboard.vercel.app",
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
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my technical skills and problem-solving approach through 
              diverse projects spanning web development, AI, and data analytics.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Highlighted Work</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={prefersReducedMotion ? {} : { y: -10, scale: 1.02 }}
                  className="glass-card p-8 rounded-2xl interactive-float group h-full"
                >
                  {/* Project Image with lazy loading */}
                  <div className="mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-48 object-cover rounded-xl mb-4"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>

                  <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300`}>
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-4 text-foreground group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="glass-button flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-gradient-primary flex-1"
                      onClick={() => window.open(project.demoUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={prefersReducedMotion ? {} : { y: -5 }}
                  className="glass-card p-6 rounded-xl interactive-float group"
                >
                  {/* Project Image with lazy loading */}
                  <div className="mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-32 object-cover rounded-lg mb-4"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>

                  <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-3 text-foreground group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-muted-foreground text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="p-2"
                      onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="p-2"
                      onClick={() => window.open(project.demoUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* View More */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-button"
              onClick={() => window.open("https://github.com/SanjayRyuzaki", '_blank', 'noopener,noreferrer')}
            >
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
