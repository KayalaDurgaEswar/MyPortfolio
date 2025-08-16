import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, scrollVariants, staggerVariants, itemVariants } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, controls } = useScrollAnimation();
  const stats = [
    { icon: GraduationCap, label: "CGPA", value: "8.9" },
    { icon: Code, label: "Projects", value: "3+" },
    { icon: Users, label: "Students Taught", value: "100+" },
    { icon: Award, label: "Experience", value: "2+ Years" },
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="section-container">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Passionate about technology, teaching, and creating impactful solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Content */}
          <motion.div className="space-y-6" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-text-primary">
                Computer Science Engineering Student
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Currently pursuing Bachelor of Technology in Computer Science Engineering at 
                Anil Neerkonda Institute Of Technology And Sciences with a strong CGPA of 8.9. 
                I specialize in MERN stack development, machine learning, and cloud technologies.
              </p>
              <p className="text-text-secondary leading-relaxed">
                My journey in technology is driven by curiosity and a desire to solve real-world 
                problems. I've worked on diverse projects ranging from full-stack web applications 
                to computer vision systems, always focusing on creating user-centric solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-text-primary">Key Highlights</h4>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Strong foundation in data structures, algorithms, and software engineering
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Hands-on experience with MERN stack and machine learning projects
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Teaching and mentoring experience with 100+ students
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Leadership role as Founder & Mentor of Prismatica Tech Club
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div className="grid grid-cols-2 gap-6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            {stats.map((stat, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card className="p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
                    <div className="text-sm text-text-secondary">{stat.label}</div>
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