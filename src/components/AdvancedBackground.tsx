"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AdvancedBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#0f0518]">
            {/* High-quality 3D Background Image */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{
                    scale: [1.1, 1.15, 1.1],
                    opacity: 1
                }}
                transition={{
                    scale: {
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    },
                    opacity: { duration: 1.5 }
                }}
            >
                <Image
                    src="/bg-3d.png"
                    alt="3D Abstract Background"
                    fill
                    priority
                    className="object-cover opacity-60"
                    quality={100}
                />
            </motion.div>

            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0518]/80 via-[#0f0518]/50 to-[#0f0518]/90" />

            {/* Subtle animated grain/noise for texture (optional, keeps it premium) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            {/* Floating accent orbs for extra depth */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]"
                animate={{
                    x: [0, -40, 0],
                    y: [0, -60, 0],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
