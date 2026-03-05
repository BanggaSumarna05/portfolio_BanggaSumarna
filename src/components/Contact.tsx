"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-32 bg-[#0a0a0a] text-white px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

                <div className="flex-1">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl lg:text-9xl font-syne font-bold uppercase leading-none"
                    >
                        {t("lets")} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-700">
                            {t("talk")}
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl font-sans text-gray-400 mt-8 max-w-md leading-relaxed"
                    >
                        {t("contactDesc")}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full flex justify-center md:justify-end"
                >
                    <a
                        href="https://wa.me/6283116937631"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center w-64 h-64 md:w-80 md:h-80 bg-white rounded-full text-black hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
                    >
                        <div className="absolute inset-0 bg-gray-200 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
                        <div className="relative z-10 flex flex-col items-center gap-4">
                            <span className="text-2xl md:text-3xl font-syne font-bold uppercase tracking-widest text-center">
                                {t("sayHello")}
                            </span>
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white group-hover:-rotate-45 transition-transform duration-300">
                                <MoveRight />
                            </div>
                        </div>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
