import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUpVariants, fadeInLeftVariants, fadeInRightVariants } from "@/hooks/useScrollAnimation";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { ref, controls } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_xxxxxxx";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_xxxxxxx";
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "public_key_xxxxxxx";

  useEffect(() => {
    // Initialize EmailJS
    if (EMAILJS_PUBLIC_KEY !== "public_key_xxxxxxx") {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, [EMAILJS_PUBLIC_KEY]);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kdurgaeswarcse@gmail.com",
      href: "mailto:kdurgaeswarcse@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9392218390",
      href: "tel:+919392218390",
      color: "text-green-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/kayaladurgaeswar/",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "GitHub Profile",
      href: "https://github.com/KayalaDurgaEswar",
      color: "text-gray-600"
    }
  ];

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

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Check if EmailJS is properly configured
    if (EMAILJS_SERVICE_ID === "service_xxxxxxx" || 
        EMAILJS_TEMPLATE_ID === "template_xxxxxxx" || 
        EMAILJS_PUBLIC_KEY === "public_key_xxxxxxx") {
      setSubmitStatus("error");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "kdurgaeswarcse@gmail.com",
        reply_to: formData.email
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" });
          setSubmitStatus("idle");
        }, 3000);
      } else {
        throw new Error("Failed to send email");
      }
      
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitStatus("idle");
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-gradient-hero">
      <div className="section-container">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a tech conversation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={fadeInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              <motion.h3 
                className="text-2xl font-semibold text-text-primary"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Let's Start a Conversation
              </motion.h3>
              <p className="text-text-secondary leading-relaxed text-sm lg:text-base">
                I'm always excited to connect with fellow developers, potential collaborators, 
                and anyone interested in technology. Whether you have a project in mind, 
                want to discuss the latest in web development and ML, or are looking for 
                mentorship, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card className="p-4 card-hover border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <a 
                      href={contact.href}
                      className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors"
                    >
                      <motion.div 
                        className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <contact.icon className="h-5 w-5 text-primary-foreground" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-text-primary">{contact.label}</p>
                        <p className="text-sm truncate">{contact.value}</p>
                      </div>
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <motion.h4 
                className="text-lg font-semibold text-text-primary"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Open to Opportunities
              </motion.h4>
              <div className="space-y-2 text-text-secondary">
                {[
                  "Full-time Software Development Roles",
                  "Internship Opportunities",
                  "Freelance Projects",
                  "Collaboration on Open Source"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-success rounded-full"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            variants={fadeInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="p-6 lg:p-8 card-hover border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div className="text-center">
                  <motion.h3 
                    className="text-xl font-semibold text-text-primary mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Send a Quick Message
                  </motion.h3>
                  <p className="text-text-secondary text-sm lg:text-base">
                    Drop me a line and I'll get back to you soon
                  </p>
                </div>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-success/10 border border-success/20 rounded-lg flex items-center gap-3 text-success"
                  >
                    <CheckCircle className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm">I'll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-3 text-destructive"
                  >
                    <AlertCircle className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Failed to send message</p>
                      <p className="text-sm">
                        {EMAILJS_SERVICE_ID === "service_xxxxxxx" 
                          ? "EmailJS not configured. Please contact me directly via email or phone."
                          : "Please try again or contact me directly via email."
                        }
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Your Name <span className="text-destructive">*</span>
                    </label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.name ? "border-destructive focus:ring-destructive" : "border-border"
                      }`}
                      placeholder="Enter your name"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.email ? "border-destructive focus:ring-destructive" : "border-border"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-colors ${
                        errors.message ? "border-destructive focus:ring-destructive" : "border-border"
                      }`}
                      placeholder="Tell me about your project or just say hi!"
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1"
                    >
                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        className="group btn-hover w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                    
                    {submitStatus === "success" && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="lg"
                          onClick={resetForm}
                          className="w-full sm:w-auto"
                        >
                          Send Another
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </form>

                <div className="text-center text-sm text-text-muted">
                  Or reach out directly via email or phone above
                </div>
                
                {/* Setup Notice - Remove this after EmailJS is configured */}
                {(EMAILJS_SERVICE_ID === "service_xxxxxxx" || 
                  EMAILJS_TEMPLATE_ID === "template_xxxxxxx" || 
                  EMAILJS_PUBLIC_KEY === "public_key_xxxxxxx") && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-xs"
                  >
                    <p className="font-medium mb-1">⚠️ EmailJS Setup Required</p>
                    <p>Check EMAILJS_SETUP.md for configuration instructions.</p>
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;