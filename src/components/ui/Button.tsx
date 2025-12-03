import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
                    {
                        "bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]":
                            variant === "primary",
                        "border border-primary text-primary hover:bg-primary/10":
                            variant === "outline",
                        "text-gray-400 hover:text-white hover:bg-white/5":
                            variant === "ghost",
                        "h-9 px-4 text-sm": size === "sm",
                        "h-11 px-8 text-base": size === "md",
                        "h-14 px-10 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };
