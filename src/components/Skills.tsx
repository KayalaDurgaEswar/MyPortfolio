import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Brain, Wrench, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, scrollVariants, staggerVariants, itemVariants } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref, controls } = useScrollAnimation();
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["C/C++", "Python", "JavaScript", "Java", "HTML5", "CSS3"],
      color: "text-blue-500"
    },
    {
      icon: Database,
      title: "Web Technologies",
      skills: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "RESTful APIs", "Responsive Design"],
      color: "text-green-500"
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      skills: ["scikit-learn", "KNN", "Computer Vision", "OpenCV", "MediaPipe", "NumPy", "pandas"],
      color: "text-purple-500"
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "AWS (Learning)", "Git", "GitHub"],
      color: "text-orange-500"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Firebase", "Database Design", "Query Optimization"],
      color: "text-red-500"
    },
    {
      icon: Wrench,
      title: "Development Tools",
      skills: ["VSCode", "Git", "GitHub", "Jupyter Notebook", "React.js", "Express.js", "Node.js"],
      color: "text-indigo-500"
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Team Leadership", 
    "Technical Communication",
    "Adaptability",
    "Self-Learning"
  ];

  const interests = [
    "Full-Stack Development",
    "Machine Learning",
    "Cloud Computing",
    "DevOps",
    "Compiler Design"
  ];

  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="section-container">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Comprehensive expertise across modern technologies and frameworks
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.05 }}>
              <Card className="p-6 hover:shadow-md transition-all duration-300 group">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-accent-muted text-accent-foreground hover:bg-accent transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills & Interests */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate={controls}
          variants={staggerVariants}
        >
          {/* Soft Skills */}
          <motion.div variants={itemVariants}>
            <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Users className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-text-primary">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            </Card>
          </motion.div>

          {/* Areas of Interest */}
          <motion.div variants={itemVariants}>
            <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Brain className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-text-primary">Areas of Interest</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;