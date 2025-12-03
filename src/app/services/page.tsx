"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Search, FileText, Book, Sparkles, ArrowRight, Code } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Search,
        title: "SEO Blog & Article Writing",
        description:
            "High-quality, keyword-optimized content designed to rank on Google while keeping readers engaged. I blend SEO best practices with compelling storytelling.",
        color: "text-primary",
        bg: "bg-primary/10",
        border: "hover:border-primary/50",
    },
    {
        icon: FileText,
        title: "Technical Proposal Writing",
        description:
            "Persuasive and precise technical proposals for software houses. I translate complex technical concepts into clear value propositions for clients.",
        color: "text-secondary",
        bg: "bg-secondary/10",
        border: "hover:border-secondary/50",
    },
    {
        icon: Book,
        title: "Academic & Research Writing",
        description:
            "Well-researched, structured, and cited academic papers. My background in literature ensures critical depth and flawless grammar.",
        color: "text-accent",
        bg: "bg-accent/10",
        border: "hover:border-accent/50",
    },
    {
        icon: Sparkles,
        title: "AI Content Editing & Humanization",
        description:
            "Transforming robotic AI drafts into natural, human-sounding text. I inject personality, emotion, and flow into AI-generated content.",
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "hover:border-purple-400/50",
    },
    {
        icon: Code,
        title: "Machine Learning & Web Development",
        description:
            "Building ML models for predictions and developing clean portfolio websites. I create simple, functional web solutions that showcase content effectively.",
        color: "text-cyan-400",
        bg: "bg-cyan-400/10",
        border: "hover:border-cyan-400/50",
    },
];

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-6 py-20">
            <Section>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-glow">
                    My <span className="text-primary">Services</span>
                </h1>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
                    I offer a range of writing services tailored to your needs. From technical documentation to creative storytelling, I've got you covered.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`p-8 rounded-2xl bg-card border border-white/10 transition-all duration-300 ${service.border} group`}
                        >
                            <div className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <Link href="/contact" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-white transition-colors">
                                Let's Discuss <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
