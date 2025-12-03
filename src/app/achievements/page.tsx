"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Trophy, Award, ThumbsUp, BookOpen, PenTool, Mic, Globe, Code, ExternalLink } from "lucide-react";
import Link from "next/link";

const achievements = [
    {
        icon: BookOpen,
        title: "BS Thesis",
        description: "Aesthetic Violence and Posthumanism in Han Kang's The Vegetarian.",
        color: "text-primary",
    },
    {
        icon: Trophy,
        title: "Creative Writing Portfolio",
        description: "'Petals in Chains' — 2nd Place, LCWU.",
        color: "text-yellow-400",
    },
    {
        icon: PenTool,
        title: "Poems Featured",
        description: "Creative Portfolio Exhibition at Alkhidmat Foundation.",
        color: "text-secondary",
    },
    {
        icon: Award,
        title: "Editor Certificate",
        description: "Talent for Creative Writing, LCWU.",
        color: "text-purple-400",
    },
    {
        icon: Mic,
        title: "International Conference",
        description: "Participated in International Conference on Narrative Resilience and Trauma in Literature.",
        color: "text-pink-400",
    },
    {
        icon: Globe,
        title: "Published Author",
        description: "Blogs published on Integriti Studio website.",
        color: "text-blue-400",
    },
    {
        icon: Code,
        title: "ML Web Application",
        description: "Created and deployed a web app for YouTube trending video prediction in USA using Machine Learning models.",
        color: "text-cyan-400",
        link: "https://youtube-trending-predictor.onrender.com/",
    },
    {
        icon: ThumbsUp,
        title: "100% Client Satisfaction",
        description: "Maintained a 5-star rating across all freelance platforms.",
        color: "text-green-400",
    },
];

export default function AchievementsPage() {
    return (
        <div className="container mx-auto px-6 py-20">
            <Section>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-glow">
                    My <span className="text-primary">Achievements</span>
                </h1>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
                    Milestones that mark my journey of excellence and dedication.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((achievement, index) => {
                        const CardContent = (
                            <div className="h-full p-6 rounded-2xl bg-card border border-white/10 hover:border-primary/50 transition-all duration-300 text-center group relative overflow-hidden">
                                <div className={`w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-center gap-2">
                                    {achievement.title}
                                    {achievement.link && <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {achievement.description}
                                </p>

                                {achievement.link && (
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                )}
                            </div>
                        );

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="h-full"
                            >
                                {achievement.link ? (
                                    <Link href={achievement.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                                        {CardContent}
                                    </Link>
                                ) : (
                                    CardContent
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </Section>
        </div>
    );
}
