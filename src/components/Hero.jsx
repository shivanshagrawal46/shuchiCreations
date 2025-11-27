import { motion } from 'framer-motion'
import { ArrowRight, Clock, Truck } from 'lucide-react'

// Import your hero image
import heroImage from '../assets/images/hero-gifts.jpg'

// Animation variants for elegant staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Image that blends elegantly */}
      <motion.div 
        className="hero-bg-image"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      ></motion.div>
      <div className="hero-bg-blend"></div>
      <div className="hero-bg-pattern"></div>
      
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="hero-badge"
            variants={fadeInScale}
          >
            <span className="star">⭐</span>
            <span>Rated #1 Gifting Platform</span>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Make Every Occasion
            <motion.span 
              className="highlight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            > Unforgettable</motion.span>
          </motion.h1>

          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            From handcrafted resin art to premium corporate hampers, find the perfect gift that speaks your heart.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.button 
              className="btn btn-primary"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 15px 35px rgba(225, 29, 72, 0.4)',
                y: -3
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              Shop Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>
            <motion.button 
              className="btn btn-outline"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'var(--primary)',
                color: 'white',
                y: -3
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              View Collections
            </motion.button>
          </motion.div>

          <motion.div 
            className="hero-features"
            variants={itemVariants}
          >
            <motion.div 
              className="hero-feature"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Clock size={20} />
              <span>Same Day Delivery</span>
            </motion.div>
            <motion.div 
              className="hero-feature"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Truck size={20} />
              <span>Free Shipping</span>
            </motion.div>
          </motion.div>

          {/* Both floating cards side by side below features */}
          <motion.div 
            className="floating-cards-row"
            variants={itemVariants}
          >
            <motion.div 
              className="floating-card"
              animate={{ 
                y: [0, -10, 0],
                boxShadow: [
                  '0 8px 25px rgba(0, 0, 0, 0.1)',
                  '0 15px 35px rgba(0, 0, 0, 0.15)',
                  '0 8px 25px rgba(0, 0, 0, 0.1)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="floating-emoji">🎁</span>
              <span>500+ Happy Customers</span>
            </motion.div>
            
            <motion.div 
              className="floating-card"
              animate={{ 
                y: [0, -10, 0],
                boxShadow: [
                  '0 8px 25px rgba(0, 0, 0, 0.1)',
                  '0 15px 35px rgba(0, 0, 0, 0.15)',
                  '0 8px 25px rgba(0, 0, 0, 0.1)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="floating-emoji">💝</span>
              <span>100% Handmade</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div 
          className="mouse"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div 
            className="wheel"
            animate={{ 
              y: [0, 8, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>
        </motion.div>
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >Scroll to explore</motion.span>
      </motion.div>
    </section>
  )
}
