import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, User, Heart, ShoppingBag, Phone, Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { name: 'Same Day Delivery', highlight: true },
  { name: 'Wall Clocks', hasDropdown: true },
  { name: 'Resin Art', hasDropdown: true },
  { name: 'Varmala Preservation', hasDropdown: true },
  { name: 'Corporate', hasDropdown: true },
  { name: 'Hampers', hasDropdown: true },
  { name: 'Occasions', hasDropdown: true },
  { name: 'Personalized', hasDropdown: true },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <a href="tel:+919876543210" className="top-bar-link">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>
            <span className="divider">|</span>
            <span className="highlight-text">Worldwide Delivery</span>
          </div>
          <div className="top-bar-right">
            <a href="#" className="top-bar-link">Track Order</a>
            <a href="#" className="top-bar-link">Corporate Gifting</a>
            <a href="#" className="top-bar-link">Sell With Us</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container main-header-content">
          {/* Logo */}
          <motion.a 
            href="/" 
            className="logo"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="logo-main">Shuchi</span>
            <span className="logo-sub">Creations</span>
            <span className="logo-tagline">HANDMADE HAPPINESS</span>
          </motion.a>

          {/* Search Bar */}
          <div className={`search-bar ${searchFocused ? 'focused' : ''}`}>
            <input
              type="text"
              placeholder="Search for gifts, flowers, cakes..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <motion.button
              className="search-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search size={20} />
            </motion.button>
          </div>

          {/* Header Actions */}
          <div className="header-actions">
            <motion.a 
              href="#" 
              className="header-action"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <User size={22} />
              <span>Profile</span>
            </motion.a>
            <motion.a 
              href="#" 
              className="header-action"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart size={22} />
              <span>Wishlist</span>
              <span className="badge">2</span>
            </motion.a>
            <motion.a 
              href="#" 
              className="header-action"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingBag size={22} />
              <span>Cart</span>
              <span className="badge">0</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="main-nav">
        <div className="container">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <a 
                  href="#" 
                  className={`nav-link ${item.highlight ? 'highlight' : ''}`}
                >
                  {item.highlight && <span className="gift-icon">🎁</span>}
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={14} />}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-search">
              <input type="text" placeholder="Search for gifts..." />
              <Search size={20} />
            </div>
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href="#" 
                    className={item.highlight ? 'highlight' : ''}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-actions">
              <a href="#">Track Order</a>
              <a href="#">Corporate Gifting</a>
              <a href="#">Sell With Us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

