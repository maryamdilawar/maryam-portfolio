"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { BookOpen, Calendar, CheckCircle, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Course {
    title: string;
    provider: string;
    date?: string;
    duration?: string;
    status: string;
    description: string;
    link?: string;
    certificatePdf?: string;
}

const courses: Course[] = [
    {
        title: "Artificial Intelligence",
        provider: "NAVTTC",
        date: "2025",
        duration: "3 Months",
        status: "Completed",
        description: "Comprehensive training in AI technologies and applications.",
    },
    {
        title: "Social Media Marketing",
        provider: "NS Training",
        duration: "1 Month",
        status: "Completed",
        description: "Strategic social media management and marketing techniques.",
        certificatePdf: "/certificates/social-media-marketing.pdf",
    },
    {
        title: "Spoken English and Communication Skills",
        provider: "NS Training",
        duration: "1 Month",
        status: "Completed",
        description: "Advanced communication skills and spoken English proficiency.",
        certificatePdf: "/certificates/spoken-english-communication.pdf",
    },
    {
        title: "Winning with Communication",
        provider: "Alison",
        status: "Completed",
        description: "Mastering effective communication strategies for professional success.",
        certificatePdf: "/certificates/winning-with-communication.pdf",
    },
];

export default function CoursesPage() {
    return (
        <div className="container mx-auto px-6 py-20">
            <Section>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-glow">
                    My <span className="text-primary">Courses</span>
                </h1>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
                    Continuous learning and professional development.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => {
                        const isCompleted = course.status === "Completed";

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full p-6 rounded-2xl bg-card border border-white/10 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 rounded-full bg-white/5 text-primary">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 ${isCompleted
                                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                        : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                                        }`}>
                                        {isCompleted ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                                        {course.status}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {course.title}
                                </h3>

                                <div className="text-sm text-gray-500 mb-4 flex flex-wrap items-center gap-3">
                                    <span className="font-medium text-gray-400">{course.provider}</span>
                                    {course.duration && (
                                        <>
                                            <span className="hidden md:inline">•</span>
                                            <span className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded text-xs">
                                                <Clock className="w-3 h-3" />
                                                {course.duration}
                                            </span>
                                        </>
                                    )}
                                    {course.date && (
                                        <>
                                            <span className="hidden md:inline">•</span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {course.date}
                                            </span>
                                        </>
                                    )}
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {course.description}
                                </p>

                                {course.link && course.link !== "#" && (
                                    <Link
                                        href={course.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors mt-auto"
                                    >
                                        View Course <ExternalLink className="w-4 h-4" />
                                    </Link>
                                )}

                                {course.certificatePdf && (
                                    <Link
                                        href={course.certificatePdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors mt-auto"
                                    >
                                        View Certificate <ExternalLink className="w-4 h-4" />
                                    </Link>
                                )}

                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </Section>
        </div>
    );
}
