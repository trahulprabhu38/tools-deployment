"use client"

import { motion } from "framer-motion"
import { notificationPulseVariants } from "@/lib/animations"

interface NotificationBadgeProps {
  count?: number
  show?: boolean
  children?: React.ReactNode
  pulseOnUpdate?: boolean
}

export default function NotificationBadge({
  count = 0,
  show = true,
  children,
  pulseOnUpdate = true,
}: NotificationBadgeProps) {
  if (!show || count === 0) return <>{children}</>

  return (
    <div className="relative inline-block">
      {children}
      <motion.div
        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5"
        key={count}
        variants={pulseOnUpdate ? notificationPulseVariants : undefined}
        animate={pulseOnUpdate ? "animate" : undefined}
        transition={{ duration: 0.6, repeat: 2 }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
      >
        {count > 99 ? "99+" : count}
      </motion.div>
    </div>
  )
}
