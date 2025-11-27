import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    text: 'The varmala preservation frame was absolutely stunning! It captured our wedding memories perfectly. The attention to detail was incredible.',
    product: 'Varmala Preservation Frame'
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    location: 'Mumbai',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    text: 'Ordered a corporate gift set for our clients. The quality exceeded our expectations. Will definitely order again!',
    product: 'Corporate Gift Set'
  },
  {
    id: 3,
    name: 'Ananya Patel',
    location: 'Bangalore',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    text: 'The resin wall clock is a masterpiece! The dried flowers inside look so beautiful. It\'s now the centerpiece of our living room.',
    product: 'Floral Resin Wall Clock'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Jaipur',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    text: 'Gifted the personalized photo frame to my parents on their anniversary. They were in tears! Such a thoughtful creation.',
    product: 'Personalized Photo Frame'
  }
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  return (
    <section className="testimonials" ref={ref}>
      <div className="testimonials-bg"></div>
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
          >Customer Love</motion.span>
          <h2 className="section-title">
            What Our <span className="highlight">Customers</span> Say
          </h2>
          <p className="section-description">
            Real stories from real people who made their occasions unforgettable with us
          </p>
        </motion.div>

        <motion.div 
          className="testimonials-slider"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button 
            className="slider-btn prev" 
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)', color: 'white' }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <div className="testimonials-track">
            <motion.div
              key={currentIndex}
              className="testimonial-card active"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <motion.div 
                className="quote-icon"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Quote size={32} />
              </motion.div>
              <p className="testimonial-text">{testimonials[currentIndex].text}</p>
              <div className="testimonial-rating">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star size={16} fill="#FFB800" color="#FFB800" />
                  </motion.div>
                ))}
              </div>
              <div className="testimonial-product">{testimonials[currentIndex].product}</div>
              <div className="testimonial-author">
                <motion.img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <div>
                  <h4>{testimonials[currentIndex].name}</h4>
                  <span>{testimonials[currentIndex].location}</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.button 
            className="slider-btn next" 
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)', color: 'white' }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </motion.div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                width: index === currentIndex ? 30 : 10,
                backgroundColor: index === currentIndex ? 'var(--primary)' : '#E5E5E5'
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
