import { motion, useSpring, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Palette, Award, Truck, HeartHandshake, Clock, Shield } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: '100% Handcrafted',
    description: 'Each piece is lovingly made by skilled artisans with attention to every detail'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'We use only the finest materials to ensure lasting beauty and durability'
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Enjoy complimentary delivery on all orders across India'
  },
  {
    icon: Clock,
    title: 'Same Day Delivery',
    description: 'Order before 2 PM and receive your gift the same day in select cities'
  },
  {
    icon: HeartHandshake,
    title: 'Personalization',
    description: 'Add names, dates, and photos to make your gift truly unique'
  },
  {
    icon: Shield,
    title: 'Secure Packaging',
    description: 'Premium gift-ready packaging that protects and impresses'
  }
]

const stats = [
  { number: 10000, suffix: '+', label: 'Happy Customers' },
  { number: 500, suffix: '+', label: 'Unique Products' },
  { number: 50, suffix: '+', label: 'Cities Served' },
  { number: 4.9, suffix: '★', label: 'Average Rating', isDecimal: true }
]

// Animated Counter Component
function AnimatedCounter({ value, suffix, isDecimal = false, isInView }) {
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    if (!isInView) return
    
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps
    const increment = value / steps
    
    let current = 0
    let step = 0
    
    const timer = setInterval(() => {
      step++
      current = Math.min(value, increment * step)
      
      // Easing function for smooth deceleration
      const progress = step / steps
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const easedValue = value * easedProgress
      
      setDisplayValue(isDecimal ? easedValue : Math.floor(easedValue))
      
      if (step >= steps) {
        clearInterval(timer)
        setDisplayValue(value)
      }
    }, stepDuration)
    
    return () => clearInterval(timer)
  }, [isInView, value, isDecimal])
  
  const formattedValue = isDecimal 
    ? displayValue.toFixed(1) 
    : displayValue.toLocaleString()
  
  return (
    <span>{formattedValue}{suffix}</span>
  )
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const featureVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export default function WhyChooseUs() {
  const ref = useRef(null)
  const statsRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' })

  return (
    <section className="why-choose-us" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span 
            className="section-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >Why Shuchi Creations</motion.span>
          <h2 className="section-title">
            Crafting <span className="highlight">Happiness</span> Since 2020
          </h2>
          <p className="section-description">
            We believe every gift tells a story. Our commitment is to make that story unforgettable.
          </p>
        </motion.div>

        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              variants={featureVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 25px 50px rgba(0,0,0,0.12)',
                transition: { duration: 0.4, ease: 'easeOut' }
              }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <feature.icon size={28} />
              </motion.div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="stats-section"
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="stat"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className="stat-number"
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.15 }}
              >
                <AnimatedCounter 
                  value={stat.number} 
                  suffix={stat.suffix} 
                  isDecimal={stat.isDecimal}
                  isInView={statsInView}
                />
              </motion.span>
              <motion.span 
                className="stat-label"
                initial={{ opacity: 0, y: 10 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
              >
                {stat.label}
              </motion.span>
            </motion.div>
          )).reduce((prev, curr, index) => {
            if (index === 0) return [curr]
            return [
              ...prev, 
              <motion.div 
                key={`divider-${index}`} 
                className="stat-divider"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={statsInView ? { opacity: 1, scaleY: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              ></motion.div>, 
              curr
            ]
          }, [])}
        </motion.div>
      </div>
    </section>
  )
}
