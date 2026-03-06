"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Set initial volume
        audio.volume = 0.4;

        // Try to play immediately if browser allows
        audio.play().catch(() => {
            // If blocked by browser (common), it will wait for interaction
            setIsPlaying(false);
        });

        const handleFirstInteraction = () => {
            if (audio.paused) {
                audio.play().then(() => {
                    setIsPlaying(true);
                }).catch((err) => {
                    console.log("Autoplay failed:", err);
                });
            }
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("scroll", handleFirstInteraction);
            window.removeEventListener("touchstart", handleFirstInteraction);
        };

        window.addEventListener("click", handleFirstInteraction);
        window.addEventListener("scroll", handleFirstInteraction);
        window.addEventListener("touchstart", handleFirstInteraction);

        return () => {
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("scroll", handleFirstInteraction);
            window.removeEventListener("touchstart", handleFirstInteraction);
        };
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[100]">
            <audio ref={audioRef} src="/Timeless (Instrumental).mp3" loop />

            <button
                onClick={togglePlay}
                className="group flex items-center gap-3 bg-black/20 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl"
            >
                <div className="flex items-end gap-[3px] h-3.5 w-4 pointer-events-none">
                    {[1, 2, 3, 4].map((i) => (
                        <motion.span
                            key={i}
                            initial={{ height: 2 }}
                            animate={{
                                height: isPlaying ? [4, 14, 6, 12][(i - 1) % 4] : 2,
                            }}
                            transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                repeatType: "mirror",
                                delay: i * 0.15,
                                ease: "easeInOut",
                            }}
                            className="w-[2.5px] bg-white/80 rounded-full"
                        />
                    ))}
                </div>

                <span className="text-[10px] md:text-[11px] font-syne font-bold uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">
                    {isPlaying ? "Music On" : "Music Off"}
                </span>

                <div className="text-white/40 group-hover:text-white/80 transition-colors">
                    {isPlaying ? <Volume2 size={14} /> : <VolumeX size={14} />}
                </div>
            </button>
        </div>
    );
}
