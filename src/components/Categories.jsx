import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Import category images
import categoryWallClocks from '../assets/images/category-wall-clocks.jpg'
import categoryVarmala from '../assets/images/category-varmala.jpg'
import categoryFrames from '../assets/images/category-frames.jpg'
import categoryCorporate from '../assets/images/category-corporate.jpg'
import categoryHampers from '../assets/images/category-hampers.jpg'
import categoryPersonalized from '../assets/images/category-personalized.jpg'

const categories = [
  {
    id: 1,
    name: 'Resin Wall Clocks',
    description: 'Handcrafted with dried flowers',
    image: categoryWallClocks,
    count: '50+ Products'
  },
  {
    id: 2,
    name: 'Varmala Preservation',
    description: 'Preserve your wedding memories',
    image: categoryVarmala,
    count: '30+ Products'
  },
  {
    id: 3,
    name: 'Photo Frames',
    description: 'Personalized resin art frames',
    image: categoryFrames,
    count: '40+ Products'
  },
  {
    id: 4,
    name: 'Corporate Gifts',
    description: 'Premium business gifting',
    image: categoryCorporate,
    count: '25+ Products'
  },
  {
    id: 5,
    name: 'Gift Hampers',
    description: 'Curated gift collections',
    image: categoryHampers,
    count: '35+ Products'
  },
  {
    id: 6,
    name: 'Personalized Gifts',
    description: 'Custom made with love',
    image: categoryPersonalized,
    count: '60+ Products'
  }
]

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

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export default function Categories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="categories" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span 
            className="section-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >Browse By Category</motion.span>
          <h2 className="section-title">
            Discover Our <span className="highlight">Collections</span>
          </h2>
          <p className="section-description">
            Each piece is carefully handcrafted to make your special moments even more memorable
          </p>
        </motion.div>

        <motion.div 
          className="categories-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="category-card"
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                transition: { duration: 0.4, ease: 'easeOut' }
              }}
            >
              <div className="category-image">
                <motion.img 
                  src={category.image} 
                  alt={category.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                <motion.div 
                  className="category-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button 
                    className="explore-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore
                  </motion.button>
                </motion.div>
              </div>
              <motion.div 
                className="category-info"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span className="category-count">{category.count}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="categories-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button 
            className="btn btn-secondary"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
              y: -3
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            View All Categories
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
