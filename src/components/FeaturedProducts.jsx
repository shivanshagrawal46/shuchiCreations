import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react'

// Import product images
import productClock1 from '../assets/images/product-clock-1.jpg'
import productClock2 from '../assets/images/product-clock-2.jpg'
import productVarmala1 from '../assets/images/product-varmala-1.jpg'
import productVarmala2 from '../assets/images/product-varmala-2.jpg'
import productFrame1 from '../assets/images/product-frame-1.jpg'
import productFrame2 from '../assets/images/product-frame-2.jpg'
import productFrame3 from '../assets/images/product-frame-3.jpg'
import productCorporate1 from '../assets/images/product-corporate-1.jpg'

const products = [
  {
    id: 1,
    name: 'Floral Resin Wall Clock',
    price: 2499,
    originalPrice: 3499,
    rating: 4.9,
    reviews: 128,
    image: productClock1,
    tag: 'Bestseller',
    tagColor: 'gold'
  },
  {
    id: 2,
    name: 'Varmala Preservation Frame',
    price: 3999,
    originalPrice: 5499,
    rating: 5.0,
    reviews: 86,
    image: productVarmala1,
    tag: 'New Arrival',
    tagColor: 'rose'
  },
  {
    id: 3,
    name: 'Couple Photo Resin Art',
    price: 1999,
    originalPrice: 2999,
    rating: 4.8,
    reviews: 204,
    image: productFrame1,
    tag: '30% Off',
    tagColor: 'red'
  },
  {
    id: 4,
    name: 'Premium Corporate Gift Set',
    price: 4999,
    originalPrice: 6999,
    rating: 4.9,
    reviews: 52,
    image: productCorporate1,
    tag: 'Premium',
    tagColor: 'purple'
  },
  {
    id: 5,
    name: 'Wedding Anniversary Clock',
    price: 2799,
    originalPrice: 3999,
    rating: 4.7,
    reviews: 93,
    image: productClock2,
    tag: 'Trending',
    tagColor: 'blue'
  },
  {
    id: 6,
    name: 'Personalized Wedding Frame',
    price: 3299,
    originalPrice: 4499,
    rating: 4.9,
    reviews: 67,
    image: productVarmala2,
    tag: 'Limited',
    tagColor: 'emerald'
  },
  {
    id: 7,
    name: 'Memory Keeper Frame',
    price: 2499,
    originalPrice: 3199,
    rating: 4.6,
    reviews: 156,
    image: productFrame2,
    tag: 'Popular',
    tagColor: 'orange'
  },
  {
    id: 8,
    name: 'Wedding Celebration Plate',
    price: 3599,
    originalPrice: 4799,
    rating: 4.8,
    reviews: 112,
    image: productFrame3,
    tag: 'Gift Ready',
    tagColor: 'pink'
  }
]

const tabs = ['All', 'Wall Clocks', 'Frames', 'Corporate', 'Hampers']

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
}

const productVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
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

export default function FeaturedProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState('All')
  const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <section className="featured-products" ref={ref}>
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
          >Handpicked For You</motion.span>
          <h2 className="section-title">
            Our <span className="highlight">Bestselling</span> Gifts
          </h2>
          <p className="section-description">
            Explore our most loved handcrafted creations that have brought smiles to thousands
          </p>
        </motion.div>

        <motion.div 
          className="product-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              variants={productVariants}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              whileHover={{ 
                y: -10,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.12)',
                transition: { duration: 0.4, ease: 'easeOut' }
              }}
            >
              <div className="product-image">
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
                <motion.span 
                  className={`product-tag ${product.tagColor}`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  {product.tag}
                </motion.span>
                
                <motion.div 
                  className="product-actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredProduct === product.id ? 1 : 0,
                    y: hoveredProduct === product.id ? 0 : 20
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <motion.button 
                    className="action-btn"
                    whileHover={{ scale: 1.2, backgroundColor: '#FDF2F4' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart size={18} />
                  </motion.button>
                  <motion.button 
                    className="action-btn"
                    whileHover={{ scale: 1.2, backgroundColor: '#FDF2F4' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye size={18} />
                  </motion.button>
                  <motion.button 
                    className="action-btn primary"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ShoppingBag size={18} />
                  </motion.button>
                </motion.div>
              </div>

              <div className="product-info">
                <div className="product-rating">
                  <Star size={14} fill="#FFB800" color="#FFB800" />
                  <span>{product.rating}</span>
                  <span className="reviews">({product.reviews} reviews)</span>
                </div>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-pricing">
                  <span className="current-price">₹{product.price.toLocaleString()}</span>
                  <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="discount">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="products-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button 
            className="btn btn-primary btn-large"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 20px 40px rgba(225, 29, 72, 0.4)',
              y: -3
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
