import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, scrollVariants, staggerVariants, itemVariants, fadeInUpVariants, fadeInLeftVariants, fadeInRightVariants } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, controls } = useScrollAnimation();
  const stats = [
    { icon: GraduationCap, label: "CGPA", value: "8.9" },
    { icon: Code, label: "Projects", value: "3+" },
    { icon: Users, label: "Students Taught", value: "100+" },
    { icon: Award, label: "Experience", value: "2+ Years" },
  ];

  const statVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-16 lg:py-20 bg-surface">
      <div className="section-container">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            Passionate about technology, teaching, and creating impactful solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Content */}
          <motion.div 
            className="space-y-6 lg:space-y-8" 
            variants={fadeInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-4 lg:space-y-6">
              <motion.h3 
                className="text-xl sm:text-2xl font-semibold text-text-primary"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Computer Science Engineering Student
              </motion.h3>
              <motion.p 
                className="text-text-secondary leading-relaxed text-sm sm:text-base text-engaging"
                variants={listItemVariants}
              >
                Currently pursuing Bachelor of Technology in Computer Science Engineering at 
                Anil Neerkonda Institute Of Technology And Sciences with a strong CGPA of 8.9. 
                I specialize in MERN stack development, machine learning, and cloud technologies.
              </motion.p>
              <motion.p 
                className="text-text-secondary leading-relaxed text-sm sm:text-base text-engaging"
                variants={listItemVariants}
              >
                My journey in technology is driven by curiosity and a desire to solve real-world 
                problems. I've worked on diverse projects ranging from full-stack web applications 
                to computer vision systems, always focusing on creating user-centric solutions.
              </motion.p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <motion.h4 
                className="text-lg font-semibold text-text-primary"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Key Highlights
              </motion.h4>
              <ul className="space-y-3 text-text-secondary">
                {[
                  "Strong foundation in data structures, algorithms, and software engineering",
                  "Hands-on experience with MERN stack and machine learning projects",
                  "Teaching and mentoring experience with 100+ students",
                  "Leadership role as Founder & Mentor of Prismatica Tech Club"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3 text-sm sm:text-base"
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-engaging">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-4 lg:gap-6" 
            variants={fadeInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Card className="p-4 lg:p-6 text-center card-hover border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col items-center space-y-3">
                    <motion.div 
                      className="p-3 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <stat.icon className="h-5 w-5 lg:h-6 lg:w-6 text-primary-foreground" />
                    </motion.div>
                    <div>
                      <motion.div 
                        className="text-xl lg:text-2xl font-bold text-text-primary"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-xs lg:text-sm text-text-secondary text-engaging-muted">{stat.label}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;