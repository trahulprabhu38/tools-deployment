import { Variants } from "framer-motion";

// Card Animation Variants
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  hover: {
    y: -5,
    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.25)",
    scale: 1.02,
  },
  tap: { scale: 0.97 },
};

// Card Glow Variant
export const cardGlowVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  hover: {
    boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.3)",
    scale: 1.02,
  },
};

// Card Tilt Variant
export const cardTiltVariants: Variants = {
  hover: {
    rotateX: 2,
    rotateY: -2,
  },
};

// Button Ripple Variant
export const buttonRippleVariants: Variants = {
  tap: {
    scale: 0.95,
    boxShadow: "0 0 10px rgba(147, 197, 253, 0.5)",
  },
};

// Page Transition Variants
export const pageVariants: Variants = {
  initial: { x: 40, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -40, opacity: 0 },
};

// Stagger Container Variant
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Theme Toggle Variants
export const themeToggleVariants: Variants = {
  initial: { opacity: 0, rotate: -10 },
  animate: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: 10 },
};

// Logo Pulse Variant
export const logoPulseVariants: Variants = {
  animate: {
    scale: [1, 1.1, 1],
  },
};

// Sidebar Variants
export const sidebarVariants = {
  expanded: { width: 220 },
  collapsed: { width: 70 },
};

// Filter Button Variants
export const filterButtonVariants = {
  active: {
    backgroundColor: "#1e40af",
    color: "#fff",
    scale: 1.05,
  },
  inactive: {
    backgroundColor: "transparent",
    color: "#9ca3af",
    scale: 1,
  },
};

// Arrow Slide Variant
export const arrowSlideVariants: Variants = {
  hover: {
    x: 5,
  },
};

// Tooltip Variants
export const tooltipVariants: Variants = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
};

// Notification Pulse Variant
export const notificationPulseVariants: Variants = {
  animate: {
    scale: [1, 1.2, 1],
  },
};

// Avatar Hover Variant
export const avatarHoverVariants: Variants = {
  hover: {
    scale: 1.1,
    rotate: 5,
  },
};

// Transition Configurations
export const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
};

export const smoothTransition = {
  duration: 0.3,
  ease: "easeInOut" as const,
};

export const fastTransition = {
  duration: 0.2,
};

export const slowTransition = {
  duration: 0.4,
};

export const tiltTransition = {
  type: "spring" as const,
  stiffness: 200,
};

export const layoutTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};
