"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { projects } from "@/constants/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
    const { t } = useLanguage();

    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />

            <section className="pt-40 pb-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase tracking-widest font-sans text-sm"
                    >
                        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
                        {t("backToHome")}
                    </Link>

                    <div className="mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-9xl font-syne font-bold uppercase tracking-tighter mb-8"
                        >
                            {t("allProjectsTitle")}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-400 max-w-2xl font-sans leading-relaxed"
                        >
                            {t("projectGalleryDesc")}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {projects.map((project, idx) => (
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group relative aspect-[16/10] overflow-hidden bg-zinc-900 border border-white/5 rounded-2xl flex flex-col justify-end p-8 md:p-12 hover:border-white/20 transition-all shadow-2xl"
                            >
                                {/* Background Image */}
                                {project.image && (
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${project.image}')` }}
                                    >
                                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                                    </div>
                                )}

                                {/* Hover Gradient fallback */}
                                {!project.image && (
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                                )}

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-sm font-sans tracking-widest text-gray-400 uppercase">
                                            {project.category} — {project.year}
                                        </span>
                                        <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                            <ArrowUpRight size={24} />
                                        </div>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-syne font-bold uppercase leading-tight">
                                        {project.title}
                                    </h2>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
