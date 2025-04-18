"use client";

import { motion } from "@/lib/motion-wrapper";
import { Linkedin, Mail } from "lucide-react";
import { useTranslation } from "next-i18next";

export function Founders() {
  const { t } = useTranslation("common");

  const founders = t("founders.list", { returnObjects: true }) as Array<{
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin: string;
    email: string;
  }>;

  return (
    <section
      id="founders"
      className="section-padding bg-crabbio-secondary relative"
    >
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-crabbio-cream mb-4">{t("founders.title")}</h2>
          <p className="text-crabbio-light max-w-2xl mx-auto text-lg">
            {t("founders.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              className="founder-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative mb-6 overflow-hidden rounded-xl aspect-square">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-crabbio-cream text-xl font-semibold">
                {founder.name}
              </h3>
              <p className="text-crabbio-accent mb-3">{founder.role}</p>
              <p className="text-crabbio-light mb-4 text-sm h-10">
                {founder.bio}
              </p>

              <div className="flex space-x-4">
                <a
                  href={founder.linkedin}
                  className="text-crabbio-light hover:text-crabbio-cream transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${founder.email}`}
                  className="text-crabbio-light hover:text-crabbio-cream transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
