"use client"

import { LayoutGrid, FileText, Lock } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Tools")

  const navItems = [
    { icon: LayoutGrid, label: "Tools", href: "#", external: false },
    { icon: FileText, label: "Blogs", href: "https://medium.com/@trahulprabhu38", external: true },
    { icon: Lock, label: "Portfolio", href: "https://trahulprabhu.work", external: true },
  ]

  return (
    <motion.aside
      className="hidden md:flex flex-col w-64 glass border-r min-h-screen sticky top-16 backdrop-blur-md"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <nav className="flex-1 p-6 space-y-2">
        {navItems.map((item, index) => {
          const isActive = activeItem === item.label

          return (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={() => setActiveItem(item.label)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg relative overflow-hidden ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                x: 4,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              {isActive && (
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-5 h-5" />
              </motion.div>
              <span className="font-medium">{item.label}</span>
            </motion.a>
          )
        })}
      </nav>

      <motion.div
        className="p-6 border-t border-border"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <motion.div
          className="glass-dark rounded-lg p-4 text-center"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-sm text-muted-foreground">🔐 Authenticated as DevOps Admin</p>
        </motion.div>
      </motion.div>
    </motion.aside>
  )
}
