"use client";

import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import { Trophy, Award, BookOpen, PenTool, Mic, Globe, Code, ExternalLink, FileText, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const achievements = [
    {
        icon: BookOpen,
        title: "BS Thesis: Aesthetic Violence and Posthumanism",
        description: "My thesis looks at Han Kang's 'The Vegetarian' and how Yeong-hye's body becomes something everyone else gets to define, her husband, her brother-in-law who literally paints her, the doctors. I'm arguing that her transformation into a plant isn't her going crazy; it's her only way out of being constantly watched, judged, and turned into art without her consent. Most scholars read this as trauma or mental illness, but I think she's actually refusing to let them keep using her body as their canvas. I'm using feminist theory and posthumanism to show how the male gaze doesn't just objectify women, it erases them entirely through the pretense of beauty and creativity. What sparks my interest is how the male gaze objectifies women in the name of art.",
        color: "text-primary",
    },
    {
        icon: Trophy,
        title: "Creative Writing Portfolio",
        description: "This creative portfolio features my novel 'Whispers of the Forgotten', a narrative that reimagines real-world scenarios through an imaginative lens. The story follows Grace, a protagonist trapped in her subconscious. The collection is deeply personal, housing memoirs, short stories, and poems. Specifically, 'Abandon Home' and 'Beloved Death' received praise from the Chief Guest at Alkhidmat Foundation and are part of my creative writing subject portfolio.",
        color: "text-yellow-400",
        certificates: [
            { name: "Certificate", path: "/certificates/creative-writing-certificate.pdf" },
            { name: "Abandoned Home", path: "/poems/abandoned-home.pdf" },
            { name: "Beloved Death", path: "/poems/beloved-death.pdf" }
        ],
    },
    {
        icon: Sparkles,
        title: "The Whispers of Forgotten",
        description: "Painted by my friend based on my imagination, these scenes bring my novel to life. When Grace plays her mother's childhood music box, she enters her subconscious, a realm of suppressed emotions and taunts. The artwork captures these zones, where her childhood self can be seen sitting in the portrait.",
        images: [
            "/images/whispers-project.jpg",
            "/images/whispers-detail-1.jpg",
            "/images/whispers-detail-2.jpg",
            "/images/whispers-detail-3.jpg",
            "/images/whispers-detail-4.jpg"
        ],
        color: "text-rose-400",
    },
    {
        icon: PenTool,
        title: "Poems Featured",
        description: "Creative Portfolio Exhibition at Alkhidmat Foundation.",
        image: "/images/creative-art-exhibition.jpg",
        color: "text-secondary",
        certificates: [
            { name: "Exhibition Cert", path: "/certificates/portfolio-exhibition-certificate.pdf" },
            { name: "Art Exhibition", path: "/certificates/creative-art-exhibition-portfolio.pdf" },
            { name: "Art Portfolio", path: "/certificates/creative-art-portfolio.pdf" }
        ],
    },
    {
        icon: Award,
        title: "Editor Certificate",
        description: "Talent for Creative Writing, LCWU.",
        color: "text-purple-400",
        certificates: [
            { name: "Certificate", path: "/certificates/talent-for-creative-writing-certificate.pdf" }
        ],
    },
    {
        icon: Mic,
        title: "Conference Volunteer",
        description: "Attended the 'New Materialism' conference at Punjab University as a delegate from LCWU. I actively participated by taking notes and asking questions during the student play performance and panel discussions on new materialist concepts.",
        color: "text-green-400",
    },
    {
        icon: Mic,
        title: "International Conference",
        description: "I participated in an International literature conference on 'Narratives of Resilience: Exploring Resurgence in Global Literature' at Lahore College for Women University where academic speakers dealt with resilience in world literature. I got involved in organizing the event, took notes throughout sessions, and asked speakers questions related to their work. Listening to representatives from different nations talk about trauma and identity books I had not yet read made me realize that literature is closely linked with real-world issues we are facing, even as individual beings.",
        color: "text-pink-400",
        certificates: [
            { name: "Participation", path: "/certificates/international-conference-participation.pdf" }
        ],
    },
    {
        icon: Globe,
        title: "Published Author",
        description: "10 Blogs published on Integriti Studio website.",
        color: "text-blue-400",
        link: "https://www.integritistudio.com/",
    },
    {
        icon: Code,
        title: "ML Web Application",
        description: "Created and deployed a web app for YouTube trending video prediction in USA using Machine Learning models as part of my AI course project.",
        color: "text-cyan-400",
        link: "https://youtube-trending-predictor.onrender.com/",
    },
];

const AchievementCard = ({ achievement, index }: { achievement: any, index: number }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const hasCertificates = achievement.certificates && achievement.certificates.length > 0;
    const hasLink = !!achievement.link;
    const hasImages = achievement.images && achievement.images.length > 0;

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (hasImages) {
            setCurrentImageIndex((prev) => (prev + 1) % achievement.images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (hasImages) {
            setCurrentImageIndex((prev) => (prev - 1 + achievement.images.length) % achievement.images.length);
        }
    };

    const CardContent = (
        <div className="h-full p-6 rounded-2xl bg-card border border-white/10 hover:border-primary/50 transition-all duration-300 text-center group relative overflow-hidden flex flex-col">
            <div className={`w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
            </div>

            <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-center gap-2">
                {achievement.title}
                {hasLink && <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow max-h-[150px] overflow-y-auto pr-2 custom-scrollbar">
                {achievement.description}
            </p>

            {/* Single Image */}
            {achievement.image && !hasImages && (
                <div className="w-full relative h-64 mb-4 rounded-lg overflow-hidden shrink-0 border border-white/10 group-hover:border-primary/50 transition-colors bg-black/50">
                    <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            )}

            {/* Carousel Images */}
            {hasImages && (
                <div className="w-full relative h-64 mb-4 rounded-lg overflow-hidden shrink-0 border border-white/10 group-hover:border-primary/50 transition-colors group/carousel bg-black/50">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={achievement.images[currentImageIndex]}
                                alt={`${achievement.title} ${currentImageIndex + 1}`}
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/60 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/80 z-10"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/60 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/80 z-10"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                        {achievement.images.map((_: any, idx: number) => (
                            <div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? "bg-white" : "bg-white/40"}`}
                            />
                        ))}
                    </div>
                </div>
            )}

            {hasCertificates && (
                <div className="flex flex-wrap justify-center gap-2 mt-auto relative z-10">
                    {achievement.certificates!.map((cert: any, i: number) => (
                        <Link
                            key={i}
                            href={cert.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs bg-white/5 hover:bg-primary/20 text-primary/80 hover:text-primary px-3 py-1.5 rounded-full transition-colors border border-white/5 hover:border-primary/30"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FileText className="w-3 h-3" />
                            {cert.name}
                        </Link>
                    ))}
                </div>
            )}

            {hasLink && (
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            )}
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="h-full"
        >
            {hasLink ? (
                <Link href={achievement.link!} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {CardContent}
                </Link>
            ) : (
                CardContent
            )}
        </motion.div>
    );
};

export default function AchievementsPage() {
    return (
        <div className="container mx-auto px-6 py-20">
            <Section>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-glow">
                    My <span className="text-primary">Academic Achievements</span>
                </h1>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
                    Milestones that mark my journey of excellence and dedication.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((achievement, index) => (
                        <AchievementCard key={index} achievement={achievement} index={index} />
                    ))}
                </div>
            </Section>
        </div>
    );
}
