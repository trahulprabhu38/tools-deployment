"use client"

import { ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { containerVariants, springTransition } from "@/lib/animations"

interface Tool {
  id: number
  name: string
  url: string
  description: string
  category: string
  icon: string
}

interface ToolsGridProps {
  tools: Tool[]
}

export default function ToolsGrid({ tools }: ToolsGridProps) {
  const [highlightedCards, setHighlightedCards] = useState<Set<number>>(new Set())
  const [ripples, setRipples] = useState<{ [key: number]: { x: number; y: number; id: string }[] }>({})

  const toggleHighlight = (e: React.MouseEvent, toolId: number) => {
    e.preventDefault()
    e.stopPropagation()

    const newHighlighted = new Set(highlightedCards)
    if (newHighlighted.has(toolId)) {
      newHighlighted.delete(toolId)
    } else {
      newHighlighted.add(toolId)
    }
    setHighlightedCards(newHighlighted)

    // Create ripple effect
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rippleId = `${Date.now()}-${Math.random()}`

    setRipples(prev => ({
      ...prev,
      [toolId]: [...(prev[toolId] || []), { x, y, id: rippleId }]
    }))

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => ({
        ...prev,
        [toolId]: (prev[toolId] || []).filter(r => r.id !== rippleId)
      }))
    }, 800)
  }

  const openLink = (e: React.MouseEvent, url: string) => {
    if ((e.target as HTMLElement).tagName !== 'A') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence mode="popLayout">
        {tools.map((tool, index) => {
          const isHighlighted = highlightedCards.has(tool.id)
          return (
            <motion.div
              key={tool.id}
              className={`group glass rounded-xl p-6 flex flex-col h-full relative overflow-hidden cursor-pointer ${
                isHighlighted ? 'ring-2 ring-primary shadow-lg shadow-primary/30' : ''
              }`}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{
                y: -5,
                boxShadow: isHighlighted
                  ? "0px 0px 25px rgba(59, 130, 246, 0.5)"
                  : "0px 0px 20px rgba(59, 130, 246, 0.3)",
                scale: 1.02,
                rotateX: 2,
                rotateY: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              layout
              onClick={(e) => toggleHighlight(e, tool.id)}
            >
              {/* Ripple effects */}
              {(ripples[tool.id] || []).map((ripple) => (
                <span
                  key={ripple.id}
                  className="ripple-wave"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: '100px',
                    height: '100px',
                  }}
                />
              ))}

              <div className="flex items-start justify-between mb-4 relative z-10">
                <motion.div
                  className="text-4xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={springTransition}
                >
                  {tool.icon}
                </motion.div>
                <motion.a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1, x: 2, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </motion.a>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 relative z-10">{tool.name}</h3>
              <p className="text-sm text-muted-foreground flex-1 mb-4 relative z-10">{tool.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10">
                <span className="text-xs font-medium text-primary opacity-70">{tool.category}</span>
                <motion.a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs text-muted-foreground flex items-center gap-1"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  Open →
                </motion.a>
              </div>
            </motion.div>
          )
        })}
        {tools.length === 0 && (
          <motion.div
            className="col-span-full glass rounded-xl p-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-muted-foreground">No tools found matching your criteria</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
