"use client"

import { motion } from "framer-motion"
import { buttonRippleVariants } from "@/lib/animations"
import { ArrowRight } from "lucide-react"

interface AnimatedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "ghost"
  showArrow?: boolean
  disabled?: boolean
  className?: string
  type?: "button" | "submit" | "reset"
}

export default function AnimatedButton({
  children,
  onClick,
  variant = "primary",
  showArrow = false,
  disabled = false,
  className = "",
  type = "button",
}: AnimatedButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium relative overflow-hidden flex items-center gap-2"

  const variantStyles = {
    primary: "bg-primary text-primary-foreground",
    secondary: "glass text-foreground",
    ghost: "bg-transparent text-foreground hover:bg-white/10",
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      whileHover={{
        scale: disabled ? 1 : 1.05,
        boxShadow: disabled ? undefined : "0 8px 16px rgba(0,0,0,0.2)",
      }}
      whileTap={disabled ? undefined : variants.tap}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        initial={{ x: 0 }}
        whileHover={{ x: showArrow ? -2 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      {showArrow && (
        <motion.div
          initial={{ x: 0, opacity: 0.7 }}
          whileHover={{ x: 3, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      )}
      <motion.div
        className="absolute inset-0 bg-white/10"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 2, opacity: [0, 0.3, 0] }}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  )
}

const variants = buttonRippleVariants
