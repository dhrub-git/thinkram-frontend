"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const gradientButtonVariants = cva(
  [
    "gradient-button",
    "inline-flex items-center justify-center",
    "rounded-[11px] min-w-[132px] px-9 py-4", // Adjusted padding to py-3 to match general site button height
    "text-base leading-[19px] font-[500] text-white",
    // "font-sans font-bold", // font-family is handled by inter-font or geist-font globally
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    "transition-all duration-300 ease-in-out", // Added base transition for smoothness
    "transform hover:scale-105", // Added subtle hover scale
  ],
  {
    variants: {
      variant: {
        default: "", // Default uses the first set of CSS variables
        variant: "gradient-button-variant", // Variant uses the second set
      },
      size: {
        default: "px-9 py-3", // Standard size
        sm: "px-6 py-2.5 text-sm",
        lg: "px-10 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(gradientButtonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
GradientButton.displayName = "GradientButton"

export { GradientButton, gradientButtonVariants }
