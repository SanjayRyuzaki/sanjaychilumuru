import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Brain, 
  GitBranch,
  Server,
  Cpu,
  Layers,
  Palette
} from 'lucide-react';
import { useDeviceCapabilities } from '@/hooks/use-mobile';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { prefersReducedMotion } = useDeviceCapabilities();

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "Tailwind CSS" },
        { name: "Next.js" },
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Python" },
        { name: "Django" },
        { name: "Flask" },
        { name: "REST APIs" },
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "Firebase" },
        { name: "Supabase" },
      ]
    },
    {
      title: "Programming Languages",
      icon: Code2,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "JavaScript" },
        { name: "Python" },
        { name: "TypeScript" },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Machine Learning" },
        { name: "Deep Learning", learning: true },
        { name: "NLP" },
        { name: "TensorFlow", learning: true },
        { name: "PyTorch", learning: true },
        { name: "OpenAI API" },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Layers,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Git & GitHub" },
        { name: "Docker" },
        { name: "AWS" },
        { name: "Vercel" },
        { name: "Webpack" },
        { name: "Vite" },
      ]
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1
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
    <section id="skills" className="py-20 relative overflow-hidden">
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
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit built through hands-on experience, continuous learning, 
              and real-world project development.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={prefersReducedMotion ? {} : { y: -5 }}
                className="glass-card p-6 rounded-2xl interactive-float group"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:shadow-glow transition-all duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: prefersReducedMotion ? 0 : categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: prefersReducedMotion ? 0.2 : 0.5 
                      }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-foreground font-medium flex items-center gap-2">
                        {skill.name}
                        {skill.learning && (
                          <span className="text-xs bg-gradient-primary text-primary-foreground px-2 py-0.5 rounded-full">
                            Learning
                          </span>
                        )}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Currently Learning Section */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Currently Exploring
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm passionate about staying current with emerging technologies and 
                continuously expanding my skill set.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Deep Learning",
                  "Computer Vision",
                  "GraphQL",
                  "Kubernetes",
                  "Rust",
                  "Web3",
                  "Blockchain",
                  "Microservices"
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                    className="px-4 py-2 glass-card rounded-full text-sm font-medium gradient-text-secondary cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;