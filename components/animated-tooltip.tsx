"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { tooltipVariants } from "@/lib/animations"

interface AnimatedTooltipProps {
  children: React.ReactNode
  content: string
  position?: "top" | "bottom" | "left" | "right"
}

export default function AnimatedTooltip({
  children,
  content,
  position = "top",
}: AnimatedTooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  const positionStyles = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`absolute ${positionStyles[position]} z-50 px-3 py-2 text-xs font-medium text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg whitespace-nowrap`}
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
          >
            {content}
            <div
              className={`absolute w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45 ${
                position === "top"
                  ? "bottom-[-4px] left-1/2 -translate-x-1/2"
                  : position === "bottom"
                    ? "top-[-4px] left-1/2 -translate-x-1/2"
                    : position === "left"
                      ? "right-[-4px] top-1/2 -translate-y-1/2"
                      : "left-[-4px] top-1/2 -translate-y-1/2"
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
