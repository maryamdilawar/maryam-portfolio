"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function Section({
    children,
    className,
    delay = 0,
    ...props
}: SectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={cn("py-20 md:py-32 relative z-10", className)}
            {...props}
        >
            {children}
        </motion.section>
    );
}
