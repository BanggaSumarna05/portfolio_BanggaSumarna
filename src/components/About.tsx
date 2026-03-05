"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

                <motion.div style={{ y: y1, opacity }} className="text-center">
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

            </div>
        </section>
    );
}
