"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    const navLinks = [
        { href: "/#about", label: t("navAbout") },
        { href: "/#projects", label: t("navProjects") },
        { href: "/#services", label: t("navServices") },
        { href: "/#testimonials", label: t("navTestimonials") },
        { href: "/#contact", label: t("navContact") },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 flex items-center justify-between pointer-events-none"
            >
                <Link
                    href="/"
                    className="font-syne font-bold text-xl uppercase tracking-widest text-white mix-blend-difference pointer-events-auto hover:opacity-70 transition-opacity"
                >
                    BS.
                </Link>

                <div className="flex items-center gap-6 pointer-events-auto">
                    <button
                        onClick={toggleLanguage}
                        className="text-white mix-blend-difference font-sans font-bold uppercase tracking-widest hover:opacity-70 transition-opacity text-sm md:text-base border border-white/20 rounded-full px-4 py-2"
                        aria-label="Toggle Language"
                    >
                        {language === "en" ? "EN" : "ID"}
                    </button>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-white mix-blend-difference hover:opacity-70 transition-opacity"
                        aria-label="Open Menu"
                    >
                        <Menu size={32} />
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 100% 0)" }}
                        animate={{ clipPath: "circle(150% at 100% 0)" }}
                        exit={{ clipPath: "circle(0% at 100% 0)" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-50 bg-[#111111] text-white flex flex-col justify-center items-center"
                    >
                        <div className="absolute top-6 right-6 md:right-12">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:opacity-70 transition-opacity"
                                aria-label="Close Menu"
                            >
                                <X size={40} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-8 text-center items-center">
                            {navLinks.map((link, idx) => (
                                <div key={idx} className="overflow-hidden">
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: "0%" }}
                                        exit={{ y: "100%" }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.2 + idx * 0.1,
                                            ease: [0.76, 0, 0.24, 1],
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="font-syne text-5xl md:text-7xl font-bold uppercase tracking-widest hover:text-gray-400 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                </div>
                            ))}

                            <div className="overflow-hidden mt-8">
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{ y: "0%" }}
                                    exit={{ y: "100%" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2 + navLinks.length * 0.1,
                                        ease: [0.76, 0, 0.24, 1],
                                    }}
                                >
                                    <a
                                        href="/cv.pdf"
                                        download="CV_BanggaSumarna.pdf"
                                        onClick={() => setIsOpen(false)}
                                        className="inline-block px-8 py-3 bg-white text-black font-syne font-bold uppercase tracking-widest rounded-full hover:bg-gray-200 transition-colors text-xl md:text-2xl"
                                    >
                                        {t("downloadCV")}
                                    </a>
                                </motion.div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-10 left-0 w-full text-center font-sans tracking-widest text-sm text-gray-500 uppercase"
                        >
                            Bangga Sumarna &copy; {new Date().getFullYear()}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
