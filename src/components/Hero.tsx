import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, scrollVariants } from "@/hooks/useScrollAnimation";
import ParticleBackground from "@/components/ParticleBackground";

const Hero = () => {
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <ParticleBackground />
      <div className="section-container relative z-10 pt-20">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]"
        >
          {/* Text Content */}
          <motion.div 
            className="space-y-6 lg:space-y-8"
            variants={itemVariants}
          >
            <div className="space-y-4 lg:space-y-6">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
                variants={itemVariants}
              >
                <span className="gradient-text text-reveal">
                  <span>Kayala Durga</span>
                </span>
                <br />
                <span className="text-text-primary text-reveal">
                  <span>Eswar</span>
                </span>
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-text-secondary font-medium"
                variants={itemVariants}
              >
                Computer Science Engineering Student
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg text-text-muted max-w-lg leading-relaxed"
                variants={itemVariants}
              >
                MERN Stack Developer & Machine Learning Enthusiast passionate about creating 
                innovative solutions and teaching technology to the next generation.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="hero" size="lg" className="group btn-hover w-full sm:w-auto" asChild>
                  <a href="#projects">
                    View My Work
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline-primary" size="lg" className="btn-hover w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-4 lg:gap-6 pt-4"
              variants={itemVariants}
            >
              <motion.a 
                href="mailto:kdurgaeswarcse@gmail.com" 
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-md group hover-lift"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/kayaladurgaeswar/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-md group hover-lift"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a 
                href="https://github.com/KayalaDurgaEswar" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-md group hover-lift"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-4 text-text-secondary text-sm lg:text-base"
              variants={itemVariants}
            >
              <span className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                kdurgaeswarcse@gmail.com
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hover:text-primary transition-colors">+91-9392218390</span>
            </motion.div>
          </motion.div>

          {/* Profile Image - Adjusted position */}
          <motion.div 
            className="flex justify-center lg:justify-end order-first lg:order-last pt-8 lg:pt-12"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.img 
                src="/uploads/6e847607-3404-4168-ab4e-86006bf0cda0.png"
                alt="Kayala Durga Eswar - Portfolio Profile"
                className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-accent rounded-full opacity-20"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full opacity-30"
                animate={{ 
                  y: [0, 10, 0],
                  scale: [1, 0.9, 1]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-accent/10 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 0.8, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
};

export default Hero;