"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronUp, Phone, Mail } from "lucide-react"

const mainNavItems = [
  { title: "Αρχική", href: "/" },
  {
    title: "Υπηρεσίες",
    href: "/services",
    subItems: [
      { title: "Τεχνολογία Κρέατος", href: "/services/meat-technology" },
      { title: "Τεχνολογία Τροφίμων", href: "/services/food-technology" },
      { title: "Νομική Συμμόρφωση", href: "/services/legal-compliance" },
      { title: "Πιστοποιήσεις", href: "/services/certifications" },
      { title: "Εκπαίδευση", href: "/services/training" },
      { title: "Επιθεωρήσεις", href: "/services/inspections" },
    ],
  },
  {
    title: "Πιστοποιήσεις",
    href: "/certifications",
    subItems: [
      { title: "ISO 22000", href: "/certifications/iso-22000" },
      { title: "ISO 9001", href: "/certifications/iso-9001" },
      { title: "IFS", href: "/certifications/ifs" },
      { title: "BRC", href: "/certifications/brc" },
    ],
  },
  {
    title: "Εκπαίδευση",
    href: "/training",
    subItems: [
      { title: "Προσωπικό Εστίασης", href: "/training/food-service" },
      { title: "HACCP", href: "/training/haccp" },
      { title: "Ασφάλεια Τροφίμων", href: "/training/food-safety" },
      { title: "Διαχείριση Ποιότητας", href: "/training/quality-management" },
    ],
  },
  { title: "Οικονομικά στοιχεία", href: "/balance-sheets" },
  {
    title: "Media",
    href: "/media",
  },
  { title: "Blog", href: "/blog" },
  { title: "Επικοινωνία", href: "/contact" },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenSubmenu(null)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <motion.div
              className="h-12 w-12 perspective-[1000px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-full h-full"
                animate={{
                  rotateY: 360,
                }}
                transition={{
                  rotateY: {
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                }}
                style={{
                  backfaceVisibility: "visible",
                }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20logo-Rn7rVuNeVUAT7V3zoWTU59CkIWB8vg.png"
                  alt="SCG Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                {mainNavItems.map((item) => (
                  <li
                    key={item.title}
                    className="relative group"
                    onMouseEnter={() => setOpenSubmenu(item.title)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={() => {
                          setOpenSubmenu(null)
                        }}
                      >
                        <span
                          className={`text-gray-300 transition-colors cursor-pointer ${
                            pathname === item.href ? "text-blue-400 font-semibold" : "hover:text-blue-400"
                          }`}
                        >
                          {item.title}
                        </span>
                      </Link>
                      {item.subItems && (
                        <button
                          onClick={() => setOpenSubmenu(openSubmenu === item.title ? null : item.title)}
                          className="ml-1 text-blue-400 hover:text-blue-600"
                        >
                          {openSubmenu === item.title ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>

                    {item.subItems && (
                      <AnimatePresence>
                        {openSubmenu === item.title && (
                          <motion.div
                            className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl py-2 overflow-hidden"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                onClick={() => setOpenSubmenu(null)}
                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-blue-400"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="tel:+302392039209" className="text-blue-400 hover:text-blue-600">
                <Phone size={20} />
              </a>
              <a href="mailto:scg@otenet.gr" className="text-blue-400 hover:text-blue-600">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <motion.button
            className="lg:hidden text-blue-400 hover:text-blue-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="lg:hidden mt-4 bg-blue-400 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="py-2">
                {mainNavItems.map((item, index) => (
                  <motion.li
                    key={item.title}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-blue-500 hover:text-white">
                      <Link
                        href={item.href}
                        onClick={() => {
                          setOpenSubmenu(null)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        <span>{item.title}</span>
                      </Link>
                      {item.subItems && (
                        <button
                          onClick={() => setOpenSubmenu(openSubmenu === item.title ? null : item.title)}
                          className="text-white hover:text-blue-200"
                        >
                          {openSubmenu === item.title ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>
                    {item.subItems && (
                      <AnimatePresence>
                        {openSubmenu === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                onClick={() => {
                                  setOpenSubmenu(null)
                                  setIsMobileMenuOpen(false)
                                }}
                                className="block px-8 py-2 text-sm text-white hover:bg-blue-500 hover:text-white"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.li>
                ))}
              </ul>
              <div className="flex justify-center space-x-4 py-4 border-t border-blue-300">
                <a href="tel:+302392039209" className="text-white hover:text-blue-200">
                  <Phone size={20} />
                </a>
                <a href="mailto:scg@otenet.gr" className="text-white hover:text-blue-200">
                  <Mail size={20} />
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
