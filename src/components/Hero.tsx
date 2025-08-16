import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, scrollVariants } from "@/hooks/useScrollAnimation";
import ParticleBackground from "@/components/ParticleBackground";

const Hero = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <ParticleBackground />
      <div className="section-container relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text">Kayala Durga</span>
                <br />
                <span className="text-text-primary">Eswar</span>
              </h1>
              <p className="text-xl lg:text-2xl text-text-secondary font-medium">
                Computer Science Engineering Student
              </p>
              <p className="text-lg text-text-muted max-w-lg leading-relaxed">
                MERN Stack Developer & Machine Learning Enthusiast passionate about creating 
                innovative solutions and teaching technology to the next generation.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="#projects">
                  View My Work
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline-primary" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a 
                href="mailto:kdurgaeswarcse@gmail.com" 
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-md group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kayaladurgaeswar/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-md group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://github.com/KayalaDurgaEswar" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-md group"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4 text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                kdurgaeswarcse@gmail.com
              </span>
              <span>•</span>
              <span>+91-9392218390</span>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <img 
                src="/uploads/6e847607-3404-4168-ab4e-86006bf0cda0.png"
                alt="Kayala Durga Eswar - Portfolio Profile"
                className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 animate-float"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;