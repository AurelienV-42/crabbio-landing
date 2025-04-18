"use client"

import { motion } from '@/lib/motion-wrapper';
import { Github, Linkedin, Twitter } from 'lucide-react';

const founders = [
  {
    name: "Alex Morgan",
    role: "CEO & Co-Founder",
    bio: "Former privacy advocate with 10+ years in cybersecurity. Passionate about creating technology that respects user rights.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Samantha Lee",
    role: "CTO & Co-Founder",
    bio: "AI researcher with background at MIT. Specializes in developing efficient algorithms for on-device machine learning.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Marcus Chen",
    role: "Head of Product",
    bio: "UX specialist who believes great design and privacy can coexist. Previously led design at several privacy-focused startups.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  }
];

export function Founders() {
  return (
    <section id="founders" className="section-padding bg-crabbio-blue relative">
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-crabbio-cream mb-4">Meet Our Team</h2>
          <p className="text-crabbio-light max-w-2xl mx-auto text-lg">
            Passionate experts committed to redefining the relationship between AI and privacy.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              className="founder-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative mb-6 overflow-hidden rounded-xl aspect-[4/3]">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <h3 className="text-crabbio-cream text-xl font-semibold">{founder.name}</h3>
              <p className="text-crabbio-accent mb-3">{founder.role}</p>
              <p className="text-crabbio-light mb-4 text-sm">{founder.bio}</p>
              
              <div className="flex space-x-4">
                <a href={founder.social.twitter} className="text-crabbio-light hover:text-crabbio-cream transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={founder.social.linkedin} className="text-crabbio-light hover:text-crabbio-cream transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={founder.social.github} className="text-crabbio-light hover:text-crabbio-cream transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}