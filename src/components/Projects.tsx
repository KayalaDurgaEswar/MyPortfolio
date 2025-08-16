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

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Showcasing my technical expertise through innovative solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-1 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Info */}
                  <div className="flex-1 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-text-muted">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{project.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-text-primary mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3 text-text-secondary">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-text-primary mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-accent-muted text-accent-foreground hover:bg-accent">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="group"
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
                      )}
                      {project.sourceUrl && project.sourceUrl !== "#" && (
                        <Button 
                          variant="outline-primary" 
                          size="sm" 
                          className="group"
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
                      )}
                    </div>
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