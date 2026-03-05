"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
    const { t } = useLanguage();

    const testimonials = [
        {
            quote: t("test1Quote"),
            author: "Iqbal Fajar",
            role: t("test1Role"),
        },
        {
            quote: t("test2Quote"),
            author: "Sidik Faturahman",
            role: t("test2Role"),
        },
        {
            quote: t("test3Quote"),
            author: "Elin Marlina",
            role: t("test3Role"),
        },
    ];

    return (
        <section id="testimonials" className="py-32 bg-black text-white px-6 md:px-12 border-t border-gray-900">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl font-syne font-bold uppercase tracking-tight mb-20 text-center">
                    {t("whatTheySay")}
                </h2>

                <div className="flex flex-col gap-16 md:gap-32 w-full">
                    {testimonials.map((testial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16"
                        >
                            <div className="text-3xl md:text-5xl lg:text-6xl font-syne font-medium leading-tight max-w-4xl opacity-90">
                                &quot;{testial.quote}&quot;
                            </div>
                            <div className="flex flex-col items-start md:items-end text-left md:text-right shrink-0">
                                <p className="text-lg md:text-2xl font-sans font-bold uppercase tracking-widest text-white">
                                    {testial.author}
                                </p>
                                <p className="text-sm md:text-base font-sans text-gray-500 uppercase mt-2">
                                    {testial.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
