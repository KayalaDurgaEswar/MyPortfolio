import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUpVariants, fadeInLeftVariants, fadeInRightVariants } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { ref, controls } = useScrollAnimation();
  const experiences = [
    {
      title: "Founder & Mentor",
      company: "Prismatica Student-led Tech Club",
      location: "Institute",
      period: "2025 - Present",
      type: "Leadership",
      description: "Established and lead a student-led tech club mentoring 100+ students in programming and emerging technologies.",
      achievements: [
        "Mentored 100+ students in Python, Java, Web Development, and AI",
        "Organized workshops and coding sessions for skill development",
        "Connected theory with practice to enhance problem-solving capabilities",
        "Promoted leadership development and collaborative learning"
      ],
      skills: ["Leadership", "Mentoring", "Python", "Java", "Web Development", "AI"]
    },
    {
      title: "Programming Tutor",
      company: "Data Pro Institute",
      location: "Teaching Assistant Role",
      period: "August 2024 - November 2024",
      type: "Teaching",
      description: "Provided comprehensive programming instruction and mentoring to students, improving their coding proficiency significantly.",
      achievements: [
        "Taught programming fundamentals to 20+ students",
        "Improved students' coding proficiency by 40%",
        "Developed comprehensive instructional materials for Python, Java, and data structures",
        "Provided personalized one-on-one mentoring with adaptive teaching methods"
      ],
      skills: ["Teaching", "Python", "Java", "Data Structures", "Communication", "Mentoring"]
    }
  ];

  const education = {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Anil Neerkonda Institute Of Technology And Sciences",
    period: "2023-27",
    cgpa: "8.9",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems", 
      "DBMS",
      "Software Engineering",
      "Compiler Design"
    ]
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
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
    <section id="experience" className="py-16 lg:py-20">
      <div className="section-container">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            Building expertise through hands-on experience and academic excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 mb-12">
          {/* Professional Experience */}
          <motion.div 
            className="space-y-6"
            variants={fadeInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-text-primary mb-6"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Professional Experience
            </motion.h3>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="p-6 lg:p-8 card-hover border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="space-y-2">
                        <motion.h4 
                          className="text-lg lg:text-xl font-semibold text-text-primary group-hover:text-primary transition-colors"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {exp.title}
                        </motion.h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-text-secondary text-sm">
                          <span className="font-medium text-engaging">{exp.company}</span>
                          <span className="hidden sm:block">•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-engaging">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2">
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Badge variant="outline" className="border-primary text-primary text-xs">
                            <Calendar className="mr-1 h-3 w-3" />
                            {exp.period}
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Badge variant="secondary" className="text-xs">
                            {exp.type}
                          </Badge>
                        </motion.div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed text-sm lg:text-base text-engaging">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <motion.h5 
                        className="font-semibold text-text-primary mb-3 flex items-center gap-2 text-sm lg:text-base"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Award className="h-4 w-4" />
                        Key Achievements
                      </motion.h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.li 
                            key={achievementIndex} 
                            className="flex items-start gap-3 text-text-secondary"
                            variants={listItemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: achievementIndex * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div 
                              className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"
                              whileHover={{ scale: 1.5 }}
                              transition={{ duration: 0.2 }}
                            />
                            <span className="text-sm text-engaging">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <motion.h5 
                        className="font-semibold text-text-primary mb-3 text-sm lg:text-base"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Skills Applied
                      </motion.h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="badge-secondary text-xs"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <motion.div 
          className="space-y-6"
          variants={fadeInRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            className="text-2xl font-semibold text-text-primary mb-6"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Education
          </motion.h3>
          
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group"
          >
            <Card className="p-6 lg:p-8 card-hover border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <motion.h4 
                      className="text-lg lg:text-xl font-semibold text-text-primary"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {education.degree}
                    </motion.h4>
                    <p className="text-text-secondary font-medium text-sm lg:text-base text-engaging">{education.institution}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Badge variant="outline" className="border-success text-success text-xs">
                        CGPA: {education.cgpa}
                      </Badge>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Badge variant="secondary" className="text-xs">
                        <Calendar className="mr-1 h-3 w-3" />
                        {education.period}
                      </Badge>
                    </motion.div>
                  </div>
                </div>

                <div>
                  <motion.h5 
                    className="font-semibold text-text-primary mb-3 text-sm lg:text-base"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Relevant Coursework
                  </motion.h5>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="badge-secondary text-xs"
                        >
                          {course}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;