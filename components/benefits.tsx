"use client";

import { motion } from "@/lib/motion-wrapper";
import { Brain, Lock, Shield, Speech as Speed } from "lucide-react";
import { useTranslation } from "next-i18next";

const benefitIcons = {
  privacy: Shield,
  brain: Brain,
  lock: Lock,
  speed: Speed,
};

export function Benefits() {
  const { t } = useTranslation("common");

  const benefits = [
    {
      title: t("benefits.accessControl.title"),
      description: t("benefits.accessControl.description"),
      icon: benefitIcons.brain,
    },
    {
      title: t("benefits.protection.title"),
      description: t("benefits.protection.description"),
      icon: benefitIcons.lock,
    },
    {
      title: t("benefits.monitoring.title"),
      description: t("benefits.monitoring.description"),
      icon: benefitIcons.speed,
    },
    {
      title: t("benefits.privacy.title"),
      description: t("benefits.privacy.description"),
      icon: benefitIcons.privacy,
    },
  ];

  return (
    <section
      id="benefits"
      className="section-padding bg-crabbio-primary relative overflow-hidden"
    >
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-crabbio-cream mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("benefits.title")}
          </motion.h2>
          <motion.p
            className="text-crabbio-light max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("benefits.intro")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6 p-4 inline-flex items-center justify-center rounded-full bg-crabbio-blue/50">
                <benefit.icon className="h-8 w-8 text-crabbio-accent" />
              </div>
              <h3 className="text-crabbio-cream text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-crabbio-light">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-20 pt-6 border-t border-crabbio-light/20 text-center">
          <motion.p 
            className="text-crabbio-cream font-medium text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trusted by over <span className="text-crabbio-accent">5,000</span> privacy-conscious users
          </motion.p>
        </div> */}
      </div>
    </section>
  );
}
