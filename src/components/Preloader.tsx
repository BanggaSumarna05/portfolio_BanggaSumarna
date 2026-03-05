"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const { t } = useLanguage();

    useEffect(() => {
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += Math.floor(Math.random() * 10) + 1;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    setIsLoading(false);
                }, 500); // Wait half a second before hiding
            }
            setProgress(currentProgress);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
                >
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-4xl md:text-6xl font-syne font-bold uppercase tracking-widest text-center">
                            Bangga Sumarna
                        </h1>
                        <p className="text-sm md:text-lg font-sans tracking-[0.2em] text-gray-400 uppercase">
                            {t("webDeveloper")}
                        </p>
                    </div>

                    <div className="absolute bottom-10 right-10 text-6xl md:text-8xl font-syne font-bold overflow-hidden">
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="block"
                        >
                            {progress}%
                        </motion.span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
