"use client";

import { motion } from "framer-motion";
import { Code2, MonitorPlay, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
    const { t } = useLanguage();

    const services = [
        {
            icon: <MonitorPlay size={48} strokeWidth={1} />,
            title: t("service1Title"),
            desc: t("service1Desc"),
        },
        {
            icon: <Sparkles size={48} strokeWidth={1} />,
            title: t("service2Title"),
            desc: t("service2Desc"),
        },
        {
            icon: <Code2 size={48} strokeWidth={1} />,
            title: t("service3Title"),
            desc: t("service3Desc"),
        },
    ];

    return (
        <section id="services" className="py-32 bg-black text-white px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-8xl font-syne font-bold uppercase tracking-tight mb-20 text-center">
                    {t("expertise")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-10 flex flex-col items-start gap-6 group hover:border-gray-500 transition-colors"
                        >
                            <div className="text-gray-400 group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-3xl font-syne font-bold uppercase">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 font-sans leading-relaxed text-lg">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
