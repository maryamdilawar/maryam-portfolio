"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, Linkedin, Send, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send to API)
        console.log(formState);
        alert("Message sent! (This is a demo)");
    };

    return (
        <div className="container mx-auto px-6 py-20">
            <Section>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-glow">
                    Get in <span className="text-primary">Touch</span>
                </h1>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
                    Ready to elevate your content? Let's collaborate and create something extraordinary.
                </p>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="p-8 rounded-2xl bg-card border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <Link
                                    href="mailto:info.maryamdilawar8@gmail.com"
                                    className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email Me</p>
                                        <p className="font-medium">info.maryamdilawar8@gmail.com</p>
                                    </div>
                                </Link>

                                <Link
                                    href="https://github.com/maryamdilawar"
                                    target="_blank"
                                    className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Github className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Check my Code</p>
                                        <p className="font-medium">maryamdilawar</p>
                                    </div>
                                </Link>

                                <Link
                                    href="https://linkedin.com/in/maryamaiwriter"
                                    target="_blank"
                                    className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Linkedin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Connect on LinkedIn</p>
                                        <p className="font-medium">maryamaiwriter</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">Let's Build Your Brand</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Whether you need SEO-optimized blogs, technical documentation, or a complete content strategy, I'm here to help you succeed.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="p-8 rounded-2xl bg-card border border-white/10 space-y-6"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                placeholder="Your Name"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                placeholder="your@email.com"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                placeholder="How can I help you?"
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            />
                        </div>

                        <Button type="submit" className="w-full group">
                            Send Message
                            <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.form>
                </div>
            </Section>
        </div>
    );
}
