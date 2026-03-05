"use client";

import { motion } from "framer-motion";

const skills = [
    "HTML", "CSS", "PHP", "Laravel", "Bootsrap", "MySql", "Creative Development",
    "HTML", "CSS", "PHP", "Laravel", "Bootsrap", "MySql", "Creative Development",
];

export default function Marquee() {
    return (
        <section className="py-20 bg-black overflow-hidden border-y border-gray-900 pointer-events-none select-none">
            <div className="relative flex whitespace-nowrap">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                    className="flex whitespace-nowrap gap-12 text-6xl md:text-8xl font-syne font-bold uppercase text-transparent tracking-wider"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
                >
                    {skills.map((skill, idx) => (
                        <span key={idx} className="shrink-0">{skill}</span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
