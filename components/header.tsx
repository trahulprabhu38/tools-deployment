"use client"

import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { themeToggleVariants, logoPulseVariants } from "@/lib/animations"

interface HeaderProps {
  darkMode: boolean
  onToggleDarkMode: (value: boolean) => void
}

export default function Header({ darkMode, onToggleDarkMode }: HeaderProps) {
  return (
    <motion.header
      className="glass border-b sticky top-0 z-50 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="px-6 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <motion.div
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold"
              key={darkMode ? "dark" : "light"}
              variants={logoPulseVariants}
              animate="animate"
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.95 }}
            >
              T
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-foreground">T Rahul Prabhu</h1>
              <p className="text-xs text-muted-foreground">DevOps Portal</p>
            </div>
          </motion.div>
          <motion.button
            onClick={() => onToggleDarkMode(!darkMode)}
            className="glass p-2 rounded-lg relative overflow-hidden"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.9, rotate: 15 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {darkMode ? (
                <motion.div
                  key="sun"
                  variants={themeToggleVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                >
                  <Sun className="w-5 h-5 text-yellow-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  variants={themeToggleVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                >
                  <Moon className="w-5 h-5 text-slate-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}
