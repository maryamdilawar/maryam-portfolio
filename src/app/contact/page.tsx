"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, Linkedin, Send, Github } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
        type: null,
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: null, message: "" });

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                {
                    from_name: formState.name,
                    from_email: formState.email,
                    message: formState.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            );

            setStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            });
            setFormState({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus({
                type: "error",
                message: "Failed to send message. Please try again later or email me directly.",
            });
        } finally {
            setIsLoading(false);
        }
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
                        {status.message && (
                            <div
                                className={`p-4 rounded-lg ${status.type === "success"
                                    ? "bg-green-500/10 text-green-500 border border-green-500/20"
                                    : "bg-red-500/10 text-red-500 border border-red-500/20"
                                    }`}
                            >
                                {status.message}
                            </div>
                        )}

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
                                disabled={isLoading}
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
                                disabled={isLoading}
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
                                disabled={isLoading}
                            />
                        </div>

                        <Button type="submit" className="w-full group" disabled={isLoading}>
                            {isLoading ? "Sending..." : "Send Message"}
                            {!isLoading && <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
                        </Button>
                    </motion.form>
                </div>
            </Section>
        </div>
    );
}
