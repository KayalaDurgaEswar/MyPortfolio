import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
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
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a tech conversation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-text-primary">
                Let's Start a Conversation
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I'm always excited to connect with fellow developers, potential collaborators, 
                and anyone interested in technology. Whether you have a project in mind, 
                want to discuss the latest in web development and ML, or are looking for 
                mentorship, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                  <a 
                    href={contact.href}
                    className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors"
                  >
                    <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary">{contact.label}</p>
                      <p className="text-sm truncate">{contact.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-text-primary">
                Open to Opportunities
              </h4>
              <div className="space-y-2 text-text-secondary">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Full-time Software Development Roles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Internship Opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Freelance Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Collaboration on Open Source</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <Card className="p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Send a Quick Message
                </h3>
                <p className="text-text-secondary">
                  Drop me a line and I'll get back to you soon
                </p>
              </div>

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="p-4 bg-success/10 border border-success/20 rounded-lg flex items-center gap-3 text-success">
                  <CheckCircle className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm">I'll get back to you soon.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-3 text-destructive">
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
                </div>
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

                <div className="flex gap-3">
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="flex-1 group"
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
                  
                  {submitStatus === "success" && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg"
                      onClick={resetForm}
                    >
                      Send Another
                    </Button>
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
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-xs">
                  <p className="font-medium mb-1">⚠️ EmailJS Setup Required</p>
                  <p>Check EMAILJS_SETUP.md for configuration instructions.</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;