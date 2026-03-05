"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-12 overflow-hidden border-t border-gray-900 border-[0.5px]">
            <div className="max-w-screen-2xl mx-auto flex flex-col">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
                    <ul className="flex flex-col gap-4 font-sans text-lg text-gray-400 uppercase tracking-widest">
                        <li><a href="https://www.linkedin.com/in/bangga-sumarna" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                        <li><a href="https://github.com/BanggaSumarna05" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                        <li><a href="https://www.instagram.com/bangsurrrrrrr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                    </ul>

                    <div className="text-left md:text-right font-sans text-gray-500 uppercase tracking-widest text-sm max-w-xs">
                        <p>{t("basedIn")}</p>
                        <p className="mt-2">{t("availableFor")}</p>
                    </div>
                </div>

                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "50px" }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                >
                    <h1 className="text-[12vw] font-syne font-bold uppercase leading-none tracking-tighter text-center md:text-left text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
                        BANGGA
                    </h1>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t border-gray-900 text-xs md:text-sm font-sans text-gray-600 uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} Bangga Sumarna. {t("allRightsReserved")}</p>
                    <p className="mt-4 md:mt-0">{t("craftedWith")}</p>
                </div>

            </div>
        </footer>
    );
}
