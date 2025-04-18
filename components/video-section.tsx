"use client"

import { motion } from '@/lib/motion-wrapper';

export function VideoSection() {
  return (
    <section id="video-section" className="section-padding bg-crabbio-secondary relative">
      <div className="container-padding max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-crabbio-cream mb-4">See Crabbio in Action</h2>
          <p className="text-crabbio-light max-w-2xl mx-auto text-lg">
            Watch how Crabbio protects your privacy while delivering powerful AI capabilities
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-xl bg-crabbio-blue/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="aspect-w-16 aspect-h-9">
            <video
              className="w-full h-full object-cover"
              controls
              poster="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg"
              aria-label="Demonstration of Crabbio's privacy-focused AI capabilities"
            >
              <source
                src="https://player.vimeo.com/external/449759940.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=165&oauth2_token_id=57447761"
                type="video/mp4"
              />
              Your browser does not support the video tag. You can download the video
              <a href="https://player.vimeo.com/external/449759940.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=165&oauth2_token_id=57447761" 
                className="text-crabbio-accent hover:underline ml-1">
                here
              </a>.
            </video>
          </div>
        </motion.div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-crabbio-light text-sm">
            Experience the future of privacy-focused AI technology
          </p>
        </motion.div>
      </div>
    </section>
  );
}