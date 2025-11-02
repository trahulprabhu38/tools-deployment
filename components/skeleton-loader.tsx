"use client"

import { motion } from "framer-motion"

interface SkeletonLoaderProps {
  width?: string
  height?: string
  rounded?: "sm" | "md" | "lg" | "full"
  className?: string
}

export default function SkeletonLoader({
  width = "100%",
  height = "20px",
  rounded = "md",
  className = "",
}: SkeletonLoaderProps) {
  const roundedStyles = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  }

  return (
    <motion.div
      className={`relative overflow-hidden bg-gray-200 dark:bg-gray-700 ${roundedStyles[rounded]} ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  )
}

// Card skeleton preset
export function CardSkeleton() {
  return (
    <div className="glass rounded-xl p-6 space-y-4">
      <div className="flex justify-between items-start">
        <SkeletonLoader width="48px" height="48px" rounded="lg" />
        <SkeletonLoader width="24px" height="24px" rounded="sm" />
      </div>
      <SkeletonLoader width="60%" height="24px" rounded="sm" />
      <SkeletonLoader width="100%" height="16px" rounded="sm" />
      <SkeletonLoader width="80%" height="16px" rounded="sm" />
      <div className="flex justify-between pt-4">
        <SkeletonLoader width="80px" height="16px" rounded="sm" />
        <SkeletonLoader width="60px" height="16px" rounded="sm" />
      </div>
    </div>
  )
}
