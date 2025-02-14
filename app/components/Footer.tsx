"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"
import Image from "next/image"

const footerSections = [
  {
    title: "Υπηρεσίες",
    links: [
      { name: "Τεχνολογία Κρέατος", href: "/services/meat-technology" },
      { name: "Τεχνολογία Τροφίμων", href: "/services/food-technology" },
      { name: "Νομική Συμμόρφωση", href: "/services/legal-compliance" },
      { name: "Πιστοποιήσεις", href: "/services/certifications" },
      { name: "Εκπαίδευση", href: "/services/training" },
      { name: "Επιθεωρήσεις", href: "/services/inspections" },
    ],
  },
  {
    title: "Πιστοποιήσεις",
    links: [
      { name: "ISO 22000", href: "/certifications/iso-22000" },
      { name: "ISO 9001", href: "/certifications/iso-9001" },
      { name: "IFS", href: "/certifications/ifs" },
      { name: "BRC", href: "/certifications/brc" },
    ],
  },
  {
    title: "Εκπαίδευση",
    links: [
      { name: "Προσωπικό Εστίασης", href: "/training/food-service" },
      { name: "HACCP", href: "/training/haccp" },
      { name: "Ασφάλεια Τροφίμων", href: "/training/food-safety" },
      { name: "Διαχείριση Ποιότητας", href: "/training/quality-management" },
    ],
  },
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: LinkedIn, href: "https://linkedin.com" },
  { icon: Instagram, href: "https://instagram.com" },
]

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 sm:col-span-2 lg:col-span-1"
          >
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
            <p className="mb-4 text-sm sm:text-base">Καινοτομία στη Βιομηχανία Κρέατος</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (sectionIndex + 1) }}
              className="col-span-1"
            >
              <h4 className="text-base sm:text-lg font-semibold text-blue-400 mb-3 sm:mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={link.name} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link href={link.href} className="hover:text-blue-400 transition-colors duration-300">
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="text-center sm:text-left text-sm">
            <p>
              &copy; {new Date().getFullYear()} SCG. Created by{" "}
              <a
                href="https://naic.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                naic.gr
              </a>
              . Όλα τα δικαιώματα διατηρούνται.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
            <a
              href="tel:+302392039209"
              className="flex items-center hover:text-blue-400 transition-colors duration-300"
            >
              <Phone size={14} className="mr-2" />
              +30 23920 39209
            </a>
            <a
              href="mailto:scg@otenet.gr"
              className="flex items-center hover:text-blue-400 transition-colors duration-300"
            >
              <Mail size={14} className="mr-2" />
              scg@otenet.gr
            </a>
            <span className="flex items-center">
              <MapPin size={14} className="mr-2" />
              Περαία Θεσσαλονίκης
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

