"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import ToolsGrid from "@/components/tools-grid"
import SearchFilter from "@/components/search-filter"
import { pageVariants } from "@/lib/animations"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const tools = [
    {
      id: 1,
      name: "Grafana",
      url: "https://grafana.trahulprabhu.work",
      description: "Monitoring dashboards and visualization",
      category: "monitoring",
      icon: "📊",
    },
    {
      id: 2,
      name: "Jenkins",
      url: "https://jenkins.trahulprabhu.work",
      description: "CI/CD pipelines and automation",
      category: "cicd",
      icon: "⚙️",
    },
    {
      id: 3,
      name: "ArgoCD",
      url: "https://argocd.trahulprabhu.work",
      description: "GitOps continuous deployment",
      category: "deployment",
      icon: "🚀",
    },
    {
      id: 4,
      name: "Prometheus",
      url: "https://prometheus.trahulprabhu.work",
      description: "Metrics collection and alerting",
      category: "monitoring",
      icon: "🔔",
    },
    // {
    //   id: 5,
    //   name: "SonarQube",
    //   url: "https://sonarqube.trahulprabhu.work",
    //   description: "Code quality and security analysis",
    //   category: "quality",
    //   icon: "✓",
    // },
    // {
    //   id: 6,
    //   name: "ELK Stack",
    //   url: "https://elk.trahulprabhu.work",
    //   description: "Centralized logging and analysis",
    //   category: "logging",
    //   icon: "📝",
    // },
    {
      id: 7,
      name: "Kubernetes",
      url: "https://argocd.trahulprabhu.work",
      description: "Container orchestration dashboard",
      category: "infrastructure",
      icon: "☸️",
    },
    {
      id: 8,
      name: "Vault",
      url: "https://vault.trahulprabhu.work",
      description: "Secrets management and encryption",
      category: "security",
      icon: "🔐",
    },
  ]

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const categories = ["all", "monitoring", "cicd", "deployment", "quality", "logging", "infrastructure", "security"]

  return (
    <div className={darkMode ? "dark" : ""}>
      <AnimatePresence mode="wait">
        <motion.div
          key={darkMode ? "dark" : "light"}
          className="min-h-screen bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Header darkMode={darkMode} onToggleDarkMode={setDarkMode} />
          <div className="flex">
            <Sidebar />
            <motion.main
              className="flex-1 p-6 md:p-8"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <SearchFilter
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  categories={categories}
                />
                <ToolsGrid tools={filteredTools} />
              </motion.div>
            </motion.main>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
