import Link from "next/link";
import { Linkedin, Mail, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black/50 border-t border-white/10 py-12 mt-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Maryam Dilawar</h3>
                    <p className="text-gray-400 text-sm">
                        AI-Enhanced Content Writer crafting words that feel human.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        href="https://github.com/maryamdilawar"
                        target="_blank"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <Github className="w-6 h-6" />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/maryamaiwriter"
                        target="_blank"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <Linkedin className="w-6 h-6" />
                    </Link>
                    <Link
                        href="mailto:info.maryamdilawar8@gmail.com"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <Mail className="w-6 h-6" />
                    </Link>
                </div>

                <div className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Maryam Dilawar. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
