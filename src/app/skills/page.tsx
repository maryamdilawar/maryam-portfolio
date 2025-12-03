"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { PenTool, Code, Zap } from "lucide-react";

const skillCategories = [
    {
        title: "Writing & Content",
        icon: PenTool,
        skills: [
            "Academic Writing",
            "Creative Writing",
            "SEO Content Writing",
            "Blog Writing",
            "Technical Proposal Writing",
            "Humanizing AI Content",
        ],
        color: "text-primary",
    },
    {
        title: "Research & Tools",
        icon: Code,
        skills: [
            "Research & Skimming",
            "Canva (Presentations design)",
            "Social Media Basics",
            "Microsoft Office Suite",
            "AI Tools Proficiency",
        ],
        color: "text-secondary",
    },
    {
        title: "Professional Skills",
        icon: Zap,
        skills: [
            "Communication Skills",
            "Client Communication",
            "Time Management",
            "Adaptability",
            "Critical Thinking",
        ],
        color: "text-yellow-400",
    },
];

export default function SkillsPage() {
    return (
        <div className="container mx-auto px-6 py-20">
            <Section>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-glow">
                    My <span className="text-primary">Skills</span>
                </h1>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
                    A blend of creative flair, technical precision, and strategic thinking.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform`}>
                                    <category.icon className={`w-8 h-8 ${category.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            <ul className="space-y-3">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                                        <div className={`w-1.5 h-1.5 rounded-full ${category.color.replace('text-', 'bg-')}`} />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Context */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">Why AI-Enhanced?</h3>
                    <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        I leverage advanced AI tools to accelerate research and structure ideas, but the
                        <span className="text-primary font-semibold"> soul</span> of the content remains human.
                        My expertise lies in refining AI-generated drafts into engaging, empathetic, and
                        brand-aligned narratives that resonate with real people.
                    </p>
                </motion.div>
            </Section>
        </div>
    );
}
