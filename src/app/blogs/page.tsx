"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

const blogs = [
    {
        title: "Essential Plugins Every Website Needs",
        link: "https://1drv.ms/w/c/d16a75c9364b1249/IQAOUYXgWcrrTa8phQEnFjMuAatvdw45vcbQ39Q7WXaj6rE",
        description: "A comprehensive guide to the must-have plugins that enhance functionality, security, and performance for any website.",
        category: "Web Development",
    },
    {
        title: "Migration to Shopify: What Businesses Should Know Before Making the Move",
        link: "https://1drv.ms/w/c/d16a75c9364b1249/IQAYa6tDP5gaTa3FAkJsDkV4ARYNX71VKG4_rC5EY4IEbbM",
        description: "Key considerations and strategic insights for businesses planning to migrate their e-commerce operations to Shopify.",
        category: "E-commerce",
    },
    {
        title: "Is Webflow the future of no code development",
        link: "https://1drv.ms/w/c/d16a75c9364b1249/IQBwGcviy_0qTrejDHZSKrkJAWqRSSNNT_rpTFHm6ZzrT00",
        description: "Exploring the capabilities of Webflow and its potential to revolutionize the way we build websites without code.",
        category: "Web Development",
    },
    {
        title: "Shopify Speed Optimization: How to Improve Your Store Load Time",
        link: "https://1drv.ms/w/c/d16a75c9364b1249/IQCkL2Ivu4c9Rr7aW1Xb9TQeAaNiE2b58RmX8FolAyyMeew",
        description: "Actionable tips and techniques to boost your Shopify store's performance and reduce bounce rates.",
        category: "Shopify",
    },
    {
        title: "How to Create a Seamless Checkout Experience on Shopify",
        link: "https://1drv.ms/w/c/d16a75c9364b1249/IQBy7RPRjtlfRqpbw0RpTmgQAQU160_kLF2YOu_RCuPE_JE",
        description: "Best practices for designing a frictionless checkout process that maximizes conversions and customer satisfaction.",
        category: "UX/UI Design",
    },
    {
        title: "Storytelling in the Digital Age",
        link: "https://1drv.ms/w/c/d16a75c9364b1249/IQCtvaZ4Ya-TRrsAFIL5zB9ZAbLQuXMpPD4OmdycwPvKVWU",
        description: "How to use narrative techniques to connect with your audience and build a memorable brand identity.",
        category: "Content Strategy",
    },
    {
        title: "Cyber Insurance for Digital Businesses",
        link: "https://1drv.ms/w/c/d16a75c9364b1249/IQCb4kz_wdvsQJQgerT63SLWAdnf9EIdE3Tas88OyvcTw5Q",
        description: "Understanding the importance of cyber insurance in protecting your digital assets and mitigating risks.",
        category: "Business Security",
    },
    {
        title: "Top 10 AI Tools for Businesses & Startups in 2025",
        link: "https://docs.google.com/document/d/1HWUTy3Y6VN3wECGdMzw03vijdpuWlLPI/edit?usp=sharing&ouid=111483199904110803469&rtpof=true&sd=true",
        description: "A curated list of the most impactful AI tools that can streamline operations and drive growth for startups.",
        category: "AI & Tech",
    },
    {
        title: "AI powered Personalized Marketing: How AI is Changing Customer Excitement in 2025",
        link: "https://docs.google.com/document/d/1Zb4RO2DTMJLSQWbZQWOTKvyU_ikXBdF5/edit?usp=drivesdk&ouid=111483199904110803469&rtpof=true&sd=true",
        description: "Discover how AI is revolutionizing marketing strategies to create hyper-personalized experiences that delight customers.",
        category: "Marketing & AI",
    },
    {
        title: "The Psychology Behind High-Converting Shopify Stores in 2025",
        link: "https://1drv.ms/w/c/d16a75c9364b1249/IQC0xGrj_ZfoSI9SL5mPuUV8AYgMmgYGskWY74jkkwnEGVg",
        description: "Uncover the psychological triggers and design principles that drive customer behavior and boost sales on Shopify.",
        category: "E-commerce Strategy",
    },
    {
        title: "How to Make Your WordPress Site User Friendly in 2025",
        link: "https://1drv.ms/w/c/d16a75c9364b1249/IQBa88E4gaABRpiT0Zn1_DyCAeoHYRgyLUFMh-lyqyGyvpk",
        description: "Essential tips and best practices for optimizing your WordPress site's usability, accessibility, and overall user experience.",
        category: "WordPress & UX",
    },
];

export default function BlogsPage() {
    return (
        <div className="container mx-auto px-6 py-20">
            <Section>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-glow">
                    Blogs & <span className="text-primary">Articles</span>
                </h1>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
                    Insights, guides, and industry trends. Read my latest articles on web development, e-commerce, and content strategy.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-card border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors flex flex-col"
                        >
                            <div className="p-8 flex flex-col h-full">
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                                        {blog.category}
                                    </span>
                                    <FileText className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                                    <Link href={blog.link} target="_blank" className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {blog.title}
                                    </Link>
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {blog.description}
                                </p>

                                <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-white transition-colors mt-auto">
                                    Read Article <ExternalLink className="ml-2 w-4 h-4" />
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
