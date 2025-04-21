"use client";

import { motion } from "@/lib/motion-wrapper";
import { useTranslation } from "next-i18next";

export function WhyItMatters() {
  const { t } = useTranslation("common");

  const dataPoints = [
    {
      stat: "27%",
      description: t("whyItMatters.dataPoints.sensitive.description"),
    },
    {
      stat: "80%",
      description: t("whyItMatters.dataPoints.bypass.description"),
    },
    {
      stat: "156%",
      description: t("whyItMatters.dataPoints.jump.description"),
    },
  ];

  return (
    <section
      id="why-it-matters"
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
            {t("whyItMatters.title")}
          </motion.h2>
          <motion.p
            className="text-crabbio-light max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("whyItMatters.description")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataPoints.map((point, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-crabbio-accent text-4xl font-bold mb-3">
                {point.stat}
              </h3>
              <p className="text-crabbio-light">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
