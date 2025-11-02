"use client"

import { Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface SearchFilterProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedCategory: string
  onCategoryChange: (category: string) => void
  categories: string[]
}

export default function SearchFilter({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: SearchFilterProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-4">
        <motion.div
          className="glass p-4 rounded-lg flex items-center gap-3"
          animate={{
            scale: isFocused ? 1.02 : 1,
            boxShadow: isFocused
              ? "0 0 0 3px rgba(59,130,246,0.2)"
              : "0 0 0 0px rgba(59,130,246,0)",
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={{
              scale: isFocused ? 1.1 : 1,
              color: isFocused ? "rgb(59, 130, 246)" : undefined,
            }}
            transition={{ duration: 0.2 }}
          >
            <Search className="w-5 h-5 text-muted-foreground" />
          </motion.div>
          <input
            type="text"
            placeholder="Search tools by name or description..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder-muted-foreground"
          />
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-2"
          layout
          transition={{ duration: 0.3, type: "spring" }}
        >
          <AnimatePresence mode="popLayout">
            {categories.map((category, index) => {
              const isActive = selectedCategory === category
              return (
                <motion.button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`relative px-4 py-2 rounded-lg capitalize font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  whileHover={{
                    scale: isActive ? 1.02 : 1.05,
                    y: -2,
                    boxShadow: isActive
                      ? "0 6px 16px rgba(59, 130, 246, 0.4)"
                      : "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.03,
                  }}
                  layout
                >
                  {category}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white dark:bg-white rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}
