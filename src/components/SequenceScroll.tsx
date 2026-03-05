"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const FRAME_COUNT = 240;

export default function SequenceScroll() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { t } = useLanguage();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            // ezgif-frame-001.jpg
            const paddedIndex = i.toString().padStart(3, "0");
            img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
    }, []);

    // Use state to track current frame to trigger re-render
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor(latest * FRAME_COUNT)
            );
            setCurrentFrame(frameIndex);
        });
    }, [scrollYProgress]);

    // Draw on canvas
    useEffect(() => {
        if (!isLoaded || images.length === 0 || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const render = () => {
            // Set canvas dimensions to window size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const img = images[currentFrame];
            if (!img) return;

            // Handle object-fit: cover logic
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);

            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                img,
                0, 0, img.width, img.height,
                centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
            );
        };

        render();

        // Setup resize listener
        window.addEventListener('resize', render);
        return () => window.removeEventListener('resize', render);
    }, [currentFrame, isLoaded, images]);

    // Text Animation Opacities based on scroll segment
    const text1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
    const text2Opacity = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
    const text3Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.8, 0.85], [0, 1, 1, 0]);
    const text4Opacity = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);

    // Translate Y animations
    const text1Y = useTransform(scrollYProgress, [0, 0.05, 0.2], [50, 0, -50]);
    const text2Y = useTransform(scrollYProgress, [0.25, 0.3, 0.5], [50, 0, -50]);
    const text3Y = useTransform(scrollYProgress, [0.55, 0.6, 0.85], [50, 0, -50]);
    const text4Y = useTransform(scrollYProgress, [0.85, 0.9], [50, 0]);

    return (
        <div ref={containerRef} className="relative h-[800vh] w-full bg-black">
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover opacity-60" />

                {/* Text Overlays */}
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12 z-10 pointer-events-none">

                    <motion.div
                        style={{ opacity: text1Opacity, y: text1Y }}
                        className="absolute text-center"
                    >
                        <h2 className="text-4xl md:text-7xl font-syne font-bold text-white uppercase tracking-wider mb-4">
                            Bangga Sumarna
                        </h2>
                        <p className="text-lg md:text-2xl font-sans text-gray-300 tracking-widest uppercase">
                            {t("webDeveloper")}
                        </p>
                    </motion.div>

                    <motion.div
                        style={{ opacity: text2Opacity, y: text2Y }}
                        className="absolute text-center max-w-4xl"
                    >
                        <h2 className="text-3xl md:text-6xl font-syne font-bold text-white uppercase leading-tight">
                            {t("heroLine1Part1")}
                            <br className="hidden md:block" /> {t("heroLine1Part2")}
                        </h2>
                    </motion.div>

                    <motion.div
                        style={{ opacity: text3Opacity, y: text3Y }}
                        className="absolute text-center max-w-4xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-syne font-semibold text-white uppercase leading-snug">
                            {t("heroLine2Part1")}
                            <br /> {t("heroLine2Part2")}
                        </h2>
                    </motion.div>

                    <motion.div
                        style={{ opacity: text4Opacity, y: text4Y }}
                        className="absolute text-center max-w-3xl flex flex-col items-center pointer-events-auto"
                    >
                        <h2 className="text-4xl md:text-7xl font-syne font-bold text-white uppercase mb-8">
                            {t("heroLine3")}
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <a
                                href="#contact"
                                className="inline-block px-10 py-4 bg-white text-black font-syne font-bold uppercase tracking-widest rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300"
                            >
                                {t("getInTouch")}
                            </a>
                            <a
                                href="/cv.pdf"
                                download="CV_BanggaSumarna.pdf"
                                className="inline-block px-10 py-4 bg-transparent border border-white text-white font-syne font-bold uppercase tracking-widest rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300"
                            >
                                {t("downloadCV")}
                            </a>
                        </div>
                    </motion.div>

                </div>

                {/* Grain Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
                {/* Soft gradient at bottom to blend into next section */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
            </div>
        </div>
    );
}
