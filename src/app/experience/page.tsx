"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [

    {
        role: "SEO Content Writing Intern",
        company: "Smart Digital Fix LLC (Remote)",
        period: "September 2025 – October 2025",
        description: "Write social media posts for LinkedIn, Instagram, and Facebook focused on digital marketing. Create website blogs covering digital marketing trends and AI in digital marketing.",
        certificatePdf: "/certificates/seo-content-writing-intern.pdf",
    },
    {
        role: "Technical Proposal Writer Intern",
        company: "Integriti Software House (Remote)",
        period: "October 2025 – November 2025",
        description:
            "Write RFPs and response proposals. Create engaging blogs for Integriti Studio to showcase technical expertise and services.",
    },
    {
        role: "Freelance Academic Writer",
        company: "Online",
        period: "2024",
        description:
            "Write essays and assignments for students, ensuring high-quality academic standards and adherence to guidelines.",
    },
    {
        role: "Product Description Writer",
        company: "Fiverr",
        period: "2023",
        description:
            "Wrote persuasive product descriptions for organic skin care brands, highlighting key benefits to drive sales and customer engagement.",
    },
    {
        role: "Volunteer as English Tutor",
        company: "Lahore",
        period: "2024",
        description:
            "Teaching underprivileged students, helping them improve their English language skills and building confidence for their future.",
    },
];

export default function ExperiencePage() {
    return (
        <div className="container mx-auto px-6 py-20">
            <Section>
                <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center text-glow">
                    My <span className="text-primary">Journey</span>
                </h1>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative mb-12 md:mb-20 ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                                }`}
                        >
                            <div
                                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)] z-10" />

                                {/* Content */}
                                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-10">
                                    <div
                                        className={`p-6 rounded-2xl bg-card border border-white/10 hover:border-primary/30 transition-colors relative group ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                                            }`}
                                    >
                                        <div
                                            className={`flex items-center gap-2 text-sm text-primary mb-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                                                }`}
                                        >
                                            <Calendar className="w-4 h-4" />
                                            {exp.period}
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h3>
                                        <div className={`flex items-center gap-2 text-gray-400 mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                                            }`}>
                                            <Briefcase className="w-4 h-4" />
                                            {exp.company}
                                        </div>

                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {/* @ts-ignore */}
                                        {exp.certificatePdf && (
                                            <a
                                                href={exp.certificatePdf}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:text-white transition-colors bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-full"
                                            >
                                                <Briefcase className="w-3 h-3" />
                                                View Certificate
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
