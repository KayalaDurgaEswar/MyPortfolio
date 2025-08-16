import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Award } from "lucide-react";

const Experience = () => {
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

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Building expertise through hands-on experience and academic excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 mb-12">
          {/* Professional Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">Professional Experience</h3>
            
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors">
                        {exp.title}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-text-secondary">
                        <span className="font-medium">{exp.company}</span>
                        <span className="hidden sm:block">•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Badge variant="outline" className="border-primary text-primary">
                        <Calendar className="mr-1 h-3 w-3" />
                        {exp.period}
                      </Badge>
                      <Badge variant="secondary">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h5 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3 text-text-secondary">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h5 className="font-semibold text-text-primary mb-3">Skills Applied</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-accent-muted text-accent-foreground">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-text-primary mb-6">Education</h3>
          
          <Card className="p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-text-primary">
                    {education.degree}
                  </h4>
                  <p className="text-text-secondary font-medium">{education.institution}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Badge variant="outline" className="border-success text-success">
                    CGPA: {education.cgpa}
                  </Badge>
                  <Badge variant="secondary">
                    <Calendar className="mr-1 h-3 w-3" />
                    {education.period}
                  </Badge>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-text-primary mb-3">Relevant Coursework</h5>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, index) => (
                    <Badge key={index} variant="secondary" className="bg-accent-muted text-accent-foreground">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;