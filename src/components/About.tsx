"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const { t } = useLanguage();

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative min-h-screen bg-black text-white flex items-center justify-center p-6 md:p-12 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto w-full flex flex-col items-center">

                <motion.div style={{ y: y1, opacity }} className="text-center mb-24">
                    <h3 className="text-sm md:text-xl font-sans text-gray-400 tracking-[0.3em] uppercase mb-8">
                        {t("theVision")}
                    </h3>

                    <div className="text-3xl md:text-6xl lg:text-8xl font-syne font-bold leading-tight uppercase">
                        {t("transforming")} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
                            {t("ideas")}
                        </span> <br />
                        {t("intoReality")}
                    </div>

                    <p className="mt-12 text-lg md:text-2xl font-sans text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {t("aboutDesc")}
                    </p>
                </motion.div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mt-20">
                    {/* Personal Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/5"
                    >
                        <h4 className="text-xl md:text-2xl font-syne font-bold uppercase mb-8 border-b border-white/10 pb-4">
                            {t("personalTitle")}
                        </h4>
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl bg-zinc-800">
                                <img
                                    src="/bangga.jpeg"
                                    alt="Bangga Sumarna"
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="space-y-6 flex-1">
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-widest text-gray-500 mb-1">{t("fullName")}</span>
                                    <span className="text-lg font-sans text-white">Bangga Sumarna</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-widest text-gray-500 mb-1">{t("nationality")}</span>
                                    <span className="text-lg font-sans text-white">Indonesia</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-widest text-gray-500 mb-1">{t("languages")}</span>
                                    <span className="text-lg font-sans text-white">Indonesia (Native), English (Basic)</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-widest text-gray-500 mb-1">{t("location")}</span>
                                    <span className="text-lg font-sans text-white">Pangandaran, West Java</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/5"
                    >
                        <h4 className="text-xl md:text-2xl font-syne font-bold uppercase mb-8 border-b border-white/10 pb-4">
                            {t("educationTitle")}
                        </h4>
                        <div className="space-y-8">
                            <div className="relative pl-6 border-l border-white/10">
                                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-white" />
                                <span className="text-xs uppercase tracking-widest text-gray-500 mb-1 block">{t("edu1Year")}</span>
                                <h5 className="text-lg font-bold text-white leading-tight mb-1">{t("edu1Degree")}</h5>
                                <p className="text-sm text-gray-400">{t("edu1Univ")}</p>
                            </div>
                            <div className="relative pl-6 border-l border-white/10">
                                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-600" />
                                <span className="text-xs uppercase tracking-widest text-gray-500 mb-1 block">{t("edu2Year")}</span>
                                <h5 className="text-lg font-bold text-white leading-tight mb-1">{t("edu2Degree")}</h5>
                                <p className="text-sm text-gray-400">{t("edu2Univ")}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Experience Section */}
                <div className="w-full mt-32">
                    <motion.h4
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-syne font-bold uppercase mb-12 text-center"
                    >
                        {t("expTitle")}
                    </motion.h4>
                    <div className="space-y-12 max-w-4xl mx-auto">
                        {/* Job 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group relative grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 p-8 rounded-2xl hover:bg-white/5 transition-colors duration-500 border border-transparent hover:border-white/10"
                        >
                            <div className="flex flex-col">
                                <span className="text-sm font-sans text-gray-500 mb-2 uppercase tracking-widest">{t("exp1Date")}</span>
                                <h5 className="text-xl font-bold text-white uppercase">{t("exp1Company")}</h5>
                            </div>
                            <div className="flex flex-col">
                                <h6 className="text-lg font-syne font-bold text-gray-300 mb-4">{t("exp1Role")}</h6>
                                <p className="text-gray-400 font-sans leading-relaxed">
                                    {t("exp1Desc")}
                                </p>
                            </div>
                        </motion.div>

                        {/* Job 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group relative grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 p-8 rounded-2xl hover:bg-white/5 transition-colors duration-500 border border-transparent hover:border-white/10"
                        >
                            <div className="flex flex-col">
                                <span className="text-sm font-sans text-gray-500 mb-2 uppercase tracking-widest">{t("exp2Date")}</span>
                                <h5 className="text-xl font-bold text-white uppercase">{t("exp2Company")}</h5>
                            </div>
                            <div className="flex flex-col">
                                <h6 className="text-lg font-syne font-bold text-gray-300 mb-4">{t("exp2Role")}</h6>
                                <p className="text-gray-400 font-sans leading-relaxed">
                                    {t("exp2Desc")}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="w-full mt-32">
                    <motion.h4
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-syne font-bold uppercase mb-12 text-center"
                    >
                        {t("skillsTitle")}
                    </motion.h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5"
                        >
                            <h5 className="text-lg font-bold text-white mb-6 uppercase tracking-widest border-l-4 border-white pl-4">
                                {t("techStack")}
                            </h5>
                            <div className="flex flex-wrap gap-3">
                                {["HTML", "CSS", "PHP", "Bootstrap", "Laravel", "MySQL"].map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Design */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5"
                        >
                            <h5 className="text-lg font-bold text-white mb-6 uppercase tracking-widest border-l-4 border-gray-600 pl-4">
                                {t("designTools")}
                            </h5>
                            <div className="flex flex-wrap gap-3">
                                {["CorelDRAW", "Canva"].map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Soft Skills */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5"
                        >
                            <h5 className="text-lg font-bold text-white mb-6 uppercase tracking-widest border-l-4 border-gray-400 pl-4">
                                {t("softSkills")}
                            </h5>
                            <div className="flex flex-wrap gap-3">
                                {["Leadership", "Teamwork", "Public Speaking", "Communication"].map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="w-full mt-32">
                    <motion.h4
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-syne font-bold uppercase mb-12 text-center"
                    >
                        {t("certTitle")}
                    </motion.h4>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/30 border border-white/5 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-white/10 transition-colors"
                        >
                            <div className="flex flex-col">
                                <h5 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase">Sertifikat Bangga Sumarna</h5>
                                <p className="text-gray-400 font-sans tracking-wide">Professional Certification Bundle 2024</p>
                            </div>
                            <a
                                href="/Sertifikat_Bangga.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white text-black font-sans font-bold uppercase tracking-widest text-sm rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
                            >
                                {t("viewCertificate")} <ArrowUpRight size={18} />
                            </a>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
