import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  CreditCard,
  Truck,
  Shield,
  ArrowRight
} from 'lucide-react'

const footerLinks = {
  shop: [
    'Wall Clocks',
    'Resin Art',
    'Varmala Preservation',
    'Photo Frames',
    'Corporate Gifts',
    'Gift Hampers'
  ],
  company: [
    'About Us',
    'Our Story',
    'Careers',
    'Press',
    'Blog',
    'Contact'
  ],
  support: [
    'FAQ',
    'Shipping Info',
    'Returns & Exchange',
    'Track Order',
    'Size Guide',
    'Care Instructions'
  ],
  legal: [
    'Privacy Policy',
    'Terms of Service',
    'Refund Policy',
    'Cookie Policy'
  ]
}

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <footer className="footer" ref={ref}>
      {/* Newsletter Section */}
      <motion.div 
        className="newsletter-section"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="newsletter-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="newsletter-text">
              <h3>Stay Updated</h3>
              <p>Subscribe to get special offers, free giveaways, and exclusive deals.</p>
            </div>
            <form className="newsletter-form">
              <div className="input-wrapper">
                <Mail size={20} />
                <input type="email" placeholder="Enter your email" />
              </div>
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Trust Badges */}
      <div className="trust-badges">
        <div className="container">
          <motion.div 
            className="badges-grid"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'On orders above ₹999' },
              { icon: Shield, title: 'Secure Payment', desc: '100% protected' },
              { icon: CreditCard, title: 'Easy Returns', desc: '7 days return policy' }
            ].map((badge, index) => (
              <motion.div 
                key={badge.title}
                className="badge"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <badge.icon size={28} />
                <div>
                  <h4>{badge.title}</h4>
                  <p>{badge.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <motion.div 
            className="footer-grid"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Brand Column */}
            <motion.div className="footer-brand" variants={itemVariants}>
              <a href="/" className="footer-logo">
                <span className="logo-main">Shuchi</span>
                <span className="logo-sub">Creations</span>
              </a>
              <p className="brand-description">
                Crafting handmade happiness since 2020. Every piece tells a story, every gift creates a memory.
              </p>
              <div className="contact-info">
                <motion.a href="tel:+919876543210" whileHover={{ x: 5, color: 'white' }}>
                  <Phone size={16} />
                  +91 98765 43210
                </motion.a>
                <motion.a href="mailto:hello@shuchicreations.com" whileHover={{ x: 5, color: 'white' }}>
                  <Mail size={16} />
                  hello@shuchicreations.com
                </motion.a>
                <motion.a href="#" whileHover={{ x: 5, color: 'white' }}>
                  <MapPin size={16} />
                  Delhi, India
                </motion.a>
              </div>
              <div className="social-links">
                {[Instagram, Facebook, Twitter, Youtube].map((Icon, index) => (
                  <motion.a 
                    key={index}
                    href="#" 
                    whileHover={{ scale: 1.2, y: -5, backgroundColor: 'var(--primary)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Columns */}
            <div className="footer-links">
              {[
                { title: 'Shop', links: footerLinks.shop },
                { title: 'Company', links: footerLinks.company },
                { title: 'Support', links: footerLinks.support }
              ].map((column, colIndex) => (
                <motion.div 
                  key={column.title}
                  className="links-column"
                  variants={itemVariants}
                >
                  <h4>{column.title}</h4>
                  <ul>
                    {column.links.map((link, linkIndex) => (
                      <motion.li 
                        key={link}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + colIndex * 0.1 + linkIndex * 0.05 }}
                      >
                        <motion.a 
                          href="#"
                          whileHover={{ x: 8, color: 'white' }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight size={12} />
                          {link}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="container">
          <p>© 2024 Shuchi Creations. All rights reserved. Made with ❤️ in India</p>
          <div className="payment-methods">
            <span>We Accept:</span>
            <div className="payment-icons">
              {['VISA', 'MC', 'UPI', 'GPay'].map((method, index) => (
                <motion.span 
                  key={method}
                  className="payment-icon"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  {method}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
