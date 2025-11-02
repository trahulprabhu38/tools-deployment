# Animation Implementation Guide

This document provides a comprehensive overview of all Framer Motion animations implemented in the project.

## Table of Contents

1. [Installation](#installation)
2. [Animation Variants](#animation-variants)
3. [Component Animations](#component-animations)
4. [Bonus Components](#bonus-components)
5. [Usage Examples](#usage-examples)

---

## Installation

Framer Motion has been installed and is ready to use:

```bash
npm install framer-motion
```

---

## Animation Variants

All animation variants are centralized in `lib/animations.ts` for easy reuse across components.

### Available Variants

#### Card Animations
- `cardVariants` - Standard card entrance, hover, and tap animations
- `cardGlowVariants` - Card with glow effect on hover
- `cardTiltVariants` - 3D tilt effect on hover

#### Button Animations
- `buttonRippleVariants` - Ripple tap feedback for buttons
- `arrowSlideVariants` - Arrow slide animation for buttons

#### Navigation Animations
- `sidebarVariants` - Sidebar expand/collapse animations
- `filterButtonVariants` - Filter button active/inactive states

#### Page Animations
- `pageVariants` - Page slide-in transitions
- `containerVariants` - Staggered children animations

#### Theme Animations
- `themeToggleVariants` - Theme switch transitions
- `logoPulseVariants` - Logo pulse on theme change

#### Utility Animations
- `tooltipVariants` - Tooltip fade and slide
- `notificationPulseVariants` - Notification badge pulse
- `avatarHoverVariants` - Avatar hover effect

### Transition Configurations

Predefined transitions for consistent timing:

- `springTransition` - Bouncy spring effect (stiffness: 300, damping: 20)
- `smoothTransition` - Smooth ease-in-out (0.3s)
- `fastTransition` - Quick animation (0.2s)
- `slowTransition` - Slower animation (0.4s)
- `tiltTransition` - Spring for tilt effects
- `layoutTransition` - Layout animations (stiffness: 400, damping: 30)

---

## Component Animations

### 1. Tool Cards (`components/tools-grid.tsx`)

#### Implemented Animations:
- ✅ Subtle float hover (card lifts -5px)
- ✅ Card glow on hover (blue glow: `rgba(59, 130, 246, 0.3)`)
- ✅ Card entrance stagger (0.05s delay per card)
- ✅ Tilt on hover (3D depth illusion with rotateX/rotateY)
- ✅ Tap feedback (scale: 0.98)
- ✅ Layout animations (smooth repositioning on filter)
- ✅ Icon hover animation (scale + rotate)
- ✅ Arrow slide on hover (slides right 5px)

#### Usage:
```tsx
<motion.a
  whileHover={{
    y: -5,
    boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.3)",
    scale: 1.02,
    rotateX: 2,
    rotateY: -2,
  }}
  whileTap={{ scale: 0.98 }}
  layout
>
  {/* Card content */}
</motion.a>
```

---

### 2. Search & Filter (`components/search-filter.tsx`)

#### Implemented Animations:
- ✅ Search bar focus expansion (scale: 1.02)
- ✅ Focus glow effect (blue ring: `rgba(59,130,246,0.2)`)
- ✅ Search icon scale on focus (1.1x)
- ✅ Filter button activation (background + color transition)
- ✅ Filter button hover (scale: 1.05, lift -2px)
- ✅ Active indicator bar (layoutId for smooth transitions)
- ✅ Staggered filter button entrance (0.03s delay)

#### Features:
- Focus state management with `useState`
- Smooth color transitions on active/inactive states
- Layout animations for filter reordering

---

### 3. Sidebar Navigation (`components/sidebar.tsx`)

#### Implemented Animations:
- ✅ Sidebar slide-in on page load (from -20px)
- ✅ Staggered menu item entrance (0.1s delay per item)
- ✅ Active indicator bar (smooth layoutId transition)
- ✅ Menu item hover (background color + slide right 4px)
- ✅ Icon hover animation (scale + rotate)
- ✅ Bottom section fade-in (0.5s delay)

#### Key Features:
- Active state tracking with `useState`
- Spring animations for smooth transitions
- Hover effects with background color changes

---

### 4. Header & Theme Toggle (`components/header.tsx`)

#### Implemented Animations:
- ✅ Header slide-in from top (from -100px)
- ✅ Logo pulse on theme change (scale: [1, 1.1, 1])
- ✅ Logo hover (scale: 1.1, rotate: 360°)
- ✅ Theme toggle button hover (scale: 1.1)
- ✅ Theme toggle tap (scale: 0.9, rotate: 15°)
- ✅ Icon fade/rotate transition (dark/light mode)

#### Features:
- `AnimatePresence` for smooth icon transitions
- Key-based re-rendering on theme change
- Staggered entrance animations

---

### 5. Page Layout & Transitions (`app/page.tsx`)

#### Implemented Animations:
- ✅ Page slide-in transitions (from right 40px)
- ✅ Theme-based background fade (0.4s)
- ✅ Main content slide-in (0.2s delay)
- ✅ Container fade-in (0.3s delay)
- ✅ Exit animations (slide left -40px)

#### Features:
- `AnimatePresence` for page transitions
- Staggered content loading
- Smooth theme transitions

---

### 6. Background Gradient Animation (`app/globals.css`)

#### Implemented:
- ✅ Gradient shift animation (15s infinite loop)
- ✅ Light mode gradient (subtle blue tint)
- ✅ Dark mode gradient (deep blue/purple)
- ✅ CSS keyframes with 400% background size

#### Usage:
```html
<div className="bg-gradient-animated">
  <!-- Content -->
</div>
```

---

## Bonus Components

### 1. Animated Tooltip (`components/animated-tooltip.tsx`)

Displays tooltips with fade and slide animations.

#### Props:
- `children` - Element to attach tooltip to
- `content` - Tooltip text
- `position` - "top" | "bottom" | "left" | "right"

#### Usage:
```tsx
<AnimatedTooltip content="Click to view details" position="top">
  <button>Hover me</button>
</AnimatedTooltip>
```

---

### 2. Animated Button (`components/animated-button.tsx`)

Reusable button with ripple effect and arrow animation.

#### Props:
- `variant` - "primary" | "secondary" | "ghost"
- `showArrow` - Display animated arrow icon
- `disabled` - Disable interactions

#### Usage:
```tsx
<AnimatedButton variant="primary" showArrow onClick={() => {}}>
  Get Started
</AnimatedButton>
```

---

### 3. Notification Badge (`components/notification-badge.tsx`)

Notification badge with pulse animation on updates.

#### Props:
- `count` - Number to display
- `show` - Visibility toggle
- `pulseOnUpdate` - Pulse animation on count change
- `children` - Element to attach badge to

#### Usage:
```tsx
<NotificationBadge count={5} pulseOnUpdate>
  <Bell className="w-6 h-6" />
</NotificationBadge>
```

---

### 4. Skeleton Loader (`components/skeleton-loader.tsx`)

Loading skeleton with shimmer effect.

#### Components:
- `SkeletonLoader` - Basic skeleton
- `CardSkeleton` - Pre-built card skeleton

#### Usage:
```tsx
<SkeletonLoader width="200px" height="24px" rounded="md" />

// Or use preset
<CardSkeleton />
```

---

## Usage Examples

### Example 1: Creating a Custom Animated Card

```tsx
import { motion } from "framer-motion"
import { cardVariants, springTransition } from "@/lib/animations"

function MyCard() {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      transition={springTransition}
    >
      <h3>Card Title</h3>
      <p>Card content</p>
    </motion.div>
  )
}
```

### Example 2: Staggered List Animation

```tsx
import { motion } from "framer-motion"
import { containerVariants } from "@/lib/animations"

function List({ items }) {
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <motion.li
          key={item.id}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: index * 0.1 }}
        >
          {item.name}
        </motion.li>
      ))}
    </motion.ul>
  )
}
```

### Example 3: Using Layout Animations

```tsx
import { motion } from "framer-motion"

function FilterableGrid({ items }) {
  return (
    <motion.div layout>
      {items.map(item => (
        <motion.div key={item.id} layout>
          {item.content}
        </motion.div>
      ))}
    </motion.div>
  )
}
```

---

## Performance Tips

1. **Use `will-change`** for frequently animated properties:
   ```css
   .animated-card {
     will-change: transform, opacity;
   }
   ```

2. **Reduce motion for accessibility**:
   ```tsx
   const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

   <motion.div
     animate={shouldReduceMotion ? {} : { scale: 1.2 }}
   />
   ```

3. **Optimize layout animations**:
   - Use `layout` prop sparingly on parent containers
   - Avoid nested layout animations
   - Use `layoutId` for shared element transitions

4. **Lazy load animations**:
   ```tsx
   <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     viewport={{ once: true }}
   />
   ```

---

## Summary

All animations requested have been implemented:

✅ Card animations (float, glow, tilt, ripple)
✅ Card entrance stagger
✅ Sidebar animations with active indicator
✅ Search bar focus expansion
✅ Filter button animations
✅ Theme toggle animations
✅ Page transitions
✅ Background gradient shift
✅ Bonus components (tooltip, button, badge, skeleton)

The animations are:
- **Performant** - Using GPU-accelerated properties
- **Accessible** - Can be disabled with `prefers-reduced-motion`
- **Reusable** - Centralized variants and components
- **Customizable** - Easy to adjust timing and effects

Enjoy your beautifully animated DevOps portal! 🎉
