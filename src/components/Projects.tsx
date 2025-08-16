import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, scrollVariants, staggerVariants, itemVariants } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, controls } = useScrollAnimation();
  const projects = [
    {
      title: "Upadhi - MERN Stack Web Application",
      description: "Full-stack web application built using MongoDB, Express.js, React.js, and Node.js with responsive frontend design and robust backend APIs for seamless data management.",
      date: "March 2025",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "HTML", "CSS"],
      features: [
        "Complete full-stack architecture with MERN stack",
        "Responsive frontend with modern UI/UX design principles",
        "Robust backend APIs for data management",
        "MongoDB integration with user authentication"
      ],
      liveUrl: "https://github.com/KayalaDurgaEswar/Upadhi",
      sourceUrl: "https://github.com/KayalaDurgaEswar/Upadhi"
    },
    {
      title: "Face Detection Machine Learning System",
      description: "Computer vision project implementing face detection using machine learning algorithms with high accuracy through optimized model training.",
      date: "June 2025",
      technologies: ["Python", "scikit-learn", "KNN", "OpenCV", "NumPy", "pandas"],
      features: [
        "Face detection using K-Nearest Neighbors algorithm",
        "Image preprocessing and feature extraction",
        "High accuracy face recognition system",
        "Optimized machine learning model training"
      ],
      liveUrl: "https://github.com/KayalaDurgaEswar/Face_Recognition_Project",
      sourceUrl: "https://github.com/KayalaDurgaEswar/Face_Recognition_Project"
    },
    {
      title: "Gesture Controller System",
      description: "Computer vision-based control system using hand gesture recognition for intuitive human-computer interaction applications.",
      date: "September 2024",
      technologies: ["Python", "OpenCV", "MediaPipe", "Machine Learning", "Computer Vision"],
      features: [
        "Real-time hand gesture recognition",
        "Computer vision algorithms for hand tracking",
        "Intuitive user interface design",
        "Seamless human-computer interaction"
      ],
      liveUrl: "#",
      sourceUrl: "#"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-16 lg:py-20">
      <div className="section-container">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            Showcasing my technical expertise through innovative solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="overflow-hidden card-hover border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-6 lg:p-8">
                  <div className="space-y-6 lg:space-y-8">
                    {/* Project Header */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-text-muted">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm text-engaging-muted">{project.date}</span>
                      </div>
                      <motion.h3 
                        className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-text-secondary leading-relaxed text-sm sm:text-base text-engaging">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-text-primary mb-3 text-sm sm:text-base">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-start gap-3 text-text-secondary"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                            <span className="text-sm text-engaging">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-text-primary mb-3 text-sm sm:text-base">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            variants={badgeVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: techIndex * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="badge-secondary text-xs font-medium"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            variant="default" 
                            size="sm" 
                            className="group btn-hover w-full sm:w-auto"
                            asChild
                          >
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                              View Project
                            </a>
                          </Button>
                        </motion.div>
                      )}
                      {project.sourceUrl && project.sourceUrl !== "#" && (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            variant="outline-primary" 
                            size="sm" 
                            className="group btn-hover w-full sm:w-auto"
                            asChild
                          >
                            <a 
                              href={project.sourceUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                              Source Code
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;