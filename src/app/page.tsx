"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-300">
              AI-Enhanced Content Writer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-glow"
            style={{
              textShadow: '0 0 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)',
              transform: 'perspective(1000px) rotateX(2deg)',
            }}
          >
            Crafting Words That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary animate-gradient inline-block transform hover:scale-105 transition-transform duration-300">
              Feel Human
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Blending research, critical thinking, and AI enhancement to create content that
            ranks, converts, and resonates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/blogs">
              <Button size="lg" className="group">
                Read My Articles
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1T7UFDnTczg4a_-0JhV6aTGxb8_ZZTzUk/view?usp=drivesdk"
              target="_blank"
            >
              <Button variant="ghost" size="lg" className="text-gray-400 hover:text-white">
                Download CV <ArrowRight className="ml-2 w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Teaser */}
      <Section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl rounded-full" />
            <div className="relative bg-card border border-white/10 p-8 rounded-2xl box-glow">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Why AI-Enhanced?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                In a world flooded with generic AI text, I bring the human touch.
                I use AI as a tool for research and structure, but the voice,
                emotion, and strategy are 100% human. The result? Content that
                is efficient, scalable, and deeply engaging.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              More Than Just <span className="text-primary">Words</span>
            </h2>
            <p className="text-gray-400 mb-6 text-lg">
              I am Maryam Dilawar, a content writer based in Lahore, Pakistan.
              With a background in English Literature and a passion for technology,
              I bridge the gap between technical precision and creative storytelling.
            </p>
            <Link href="/about">
              <Button variant="ghost" className="pl-0 hover:pl-4 transition-all">
                Read More About Me <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
