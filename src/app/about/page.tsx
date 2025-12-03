"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { GraduationCap, BookOpen, Brain, PenTool } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 py-20">
            <Section>
                <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center text-glow">
                    About <span className="text-primary">Me</span>
                </h1>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="prose prose-invert prose-lg">
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Hi, I'm <span className="text-white font-semibold">Maryam Dilawar</span>,
                            an AI-Enhanced Content Writer who believes that technology should amplify human creativity,
                            not replace it. A graduate in English Language & Literature with a keen eye for digital trends,
                            I work as a content writer with experience in SEO writing, academic writing, blog writing,
                            and technical proposal writing.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            I enjoy writing content that is clear, useful, and easy to understand. During my studies
                            and internships, I worked on blogs, website content, research-based writing, proposals,
                            and client-focused content. I have also worked as a freelance academic writer, where I
                            learned how to manage deadlines, follow clear instructions, and deliver quality work.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            I believe in honest work, simple communication, and continuous learning. I am still growing
                            in my career. I ensure every word serves a purpose in content creation.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Along with writing, I also develop simple and clean websites. This helps me present content
                            in a better way and understand how writing and design work together. I enjoy building
                            writing-focused websites like portfolios, blogs, and personal sites.
                        </p>
                    </div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <img
                                src="/robot-writer.png"
                                alt="AI-Enhanced Content Writer - Robot and Human Collaboration"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </Section>

            <Section delay={0.2}>
                <h2 className="text-3xl font-bold mb-10 text-center">Education & Expertise</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Education Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-2xl bg-card border border-white/10 hover:border-primary/50 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-full bg-primary/20 text-primary">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Education</h3>
                                <p className="text-gray-400">Academic Background</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-white font-semibold">BS English (Language & Literature)</h4>
                                <p className="text-gray-400 text-sm">LCWU, Lahore • <span className="text-primary font-bold">CGPA 3.55</span></p>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Intermediate (ICS - Statistics)</h4>
                                <p className="text-gray-400 text-sm">LCWU, Lahore</p>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">O Levels</h4>
                                <p className="text-gray-400 text-sm">Adabistan-e-Sophia</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-2xl bg-card border border-white/10 hover:border-secondary/50 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-full bg-secondary/20 text-secondary">
                                <PenTool className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Core Competencies</h3>
                                <p className="text-gray-400">What I bring to the table</p>
                            </div>
                        </div>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                SEO Blog & Article Writing
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                Technical Proposal Writing
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                Academic & Research Writing
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                Humanizing AI-Generated Content
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
}
