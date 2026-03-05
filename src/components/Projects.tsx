"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { projects } from "@/constants/projects";

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section id="projects" className="py-32 bg-black text-white px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-20 border-b border-gray-800 pb-8">
                    <h2 className="text-5xl md:text-8xl font-syne font-bold uppercase tracking-tight">
                        {t("selectedWorks")}
                    </h2>
                    <Link
                        href="/projects"
                        className="hidden md:flex items-center gap-2 text-xl font-sans uppercase tracking-widest hover:text-gray-400 transition-colors"
                    >
                        {t("seeAll")} <ArrowUpRight />
                    </Link>
                </div>

                <div className="flex flex-col">
                    {projects.map((project, idx) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="group relative border-b border-gray-800 py-12 cursor-pointer block"
                        >
                            {/* Hover Glow Effect */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${project.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                            />

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                                <div className="flex-1">
                                    <span className="text-sm font-sans tracking-widest text-gray-500 mb-2 block uppercase">
                                        {project.category}
                                    </span>
                                    <h3 className="text-4xl md:text-6xl font-syne font-bold uppercase group-hover:pl-4 transition-all duration-300">
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-8">
                                    <span className="text-xl font-sans text-gray-400">{project.year}</span>
                                    <div className="w-16 h-16 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 -rotate-45 group-hover:rotate-0">
                                        <ArrowUpRight size={32} />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
