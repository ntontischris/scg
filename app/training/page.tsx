"use client"

import { motion } from "framer-motion"
import { Book, Users, ShieldCheck, Briefcase, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"

const trainingAreas = [
  {
    icon: Users,
    title: "Προσωπικό Εστίασης",
    description: "Εκπαίδευση σε θέματα υγιεινής, εξυπηρέτησης πελατών, γνώσεις μενού και λειτουργικής οργάνωσης.",
    link: "/training/food-service",
  },
  {
    icon: ShieldCheck,
    title: "HACCP",
    description: "Κατάρτιση στο σύστημα Ανάλυσης Κινδύνων και Κρίσιμων Σημείων Ελέγχου.",
    link: "/training/haccp",
  },
  {
    icon: Book,
    title: "Ασφάλεια Τροφίμων",
    description: "Εκπαίδευση σε βασικές αρχές ασφάλειας τροφίμων και νομοθεσία.",
    link: "/training/food-safety",
  },
  {
    icon: Briefcase,
    title: "Διαχείριση Ποιότητας",
    description: "Εκπαίδευση σε συστήματα διαχείρισης ποιότητας και πρότυπα πιστοποίησης.",
    link: "/training/quality-management",
  },
]

const trainingImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20training04-ZBly2180J797dzhYViuTor1nYWCg95.webp",
    alt: "Παρουσίαση στατιστικών στοιχείων για προϊόντα κρεοπωλείου",
    title: "Στατιστική Ανάλυση",
    description: "Εμπεριστατωμένη έρευνα και ανάλυση δεδομένων του κλάδου",
  },
  
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20training1-cVCejku4IvDPcJpZPrPekxuHWQiLpX.webp",
    alt: "Παρουσίαση σε συνέδριο Logi.C Food Edition",
    title: "Διεθνείς Συνεργασίες",
    description: "Συμμετοχή σε κορυφαία συνέδρια του κλάδου τροφίμων",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20training05-QO8x3VSx36AO0XU3QBahFQURRe2Ejq.webp",
    alt: "Γεμάτη αίθουσα συνεδρίου Meat Place Tour",
    title: "Μαζική Συμμετοχή",
    description: "Εκπαιδευτικά προγράμματα με μεγάλη ανταπόκριση από επαγγελματίες",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20training02-P0cHOAgtDCbXPXwSUBYS6CpNnDZ15c.webp",
    alt: "Διάλεξη για την ποιότητα σε αμφιθέατρο",
    title: "Ακαδημαϊκή Προσέγγιση",
    description: "Θεωρητική και πρακτική κατάρτιση σε σύγχρονες εγκαταστάσεις",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20training03-cScwGMTJz3IfD5b6JvX4ul83dpgqvA.webp",
    alt: "Συνεδριακή παρουσίαση με κοινό",
    title: "Διαδραστική Μάθηση",
    description: "Ενεργή συμμετοχή και ανταλλαγή απόψεων στα εκπαιδευτικά σεμινάρια",
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

export default function TrainingPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentImage((prev) => (prev + 1) % trainingImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentImage((prev) => (prev + newDirection + trainingImages.length) % trainingImages.length)
  }

  return (
    <div className="space-y-12">
      <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-lg overflow-hidden mb-12">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
          >
            <motion.div
              animate={currentImage % 2 === 0 ? { scale: [1, 1.1] } : { scale: [1.1, 1] }}
              transition={{ duration: 5, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={trainingImages[currentImage].src || "/placeholder.svg"}
                alt={trainingImages[currentImage].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{trainingImages[currentImage].title}</h3>
              <p className="text-gray-200">{trainingImages[currentImage].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-colors z-10"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-colors z-10"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {trainingImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImage ? "bg-white w-4" : "bg-white/50"
              }`}
              onClick={() => {
                const newDirection = index > currentImage ? 1 : -1
                setDirection(newDirection)
                setCurrentImage(index)
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Εκπαίδευση</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Η SCG προσφέρει εξειδικευμένα προγράμματα εκπαίδευσης για επαγγελματίες στον κλάδο της εστίασης και της
          βιομηχανίας τροφίμων, εστιάζοντας στην ασφάλεια, την ποιότητα και την αποτελεσματικότητα.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {trainingAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <Link href={area.link} className="block">
              <div className="flex items-center mb-4">
                <area.icon className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">{area.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{area.description}</p>
              <span className="text-blue-400 hover:underline">Μάθετε περισσότερα →</span>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Οφέλη Εκπαίδευσης</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Βελτίωση της ποιότητας και ασφάλειας των προϊόντων</li>
          <li>Αύξηση της ικανοποίησης των πελατών</li>
          <li>Συμμόρφωση με τις νομοθετικές απαιτήσεις</li>
          <li>Ενίσχυση των δεξιοτήτων και της αποδοτικότητας του προσωπικού</li>
          <li>Μείωση λειτουργικών κινδύνων και κόστους</li>
          <li>Βελτίωση της φήμης και της ανταγωνιστικότητας της επιχείρησης</li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="bg-gray-800 p-8 rounded-lg text-center"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Έτοιμοι να ξεκινήσετε;</h2>
        <p className="text-gray-300 mb-6">
          Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε πώς μπορούμε να προσαρμόσουμε τα εκπαιδευτικά μας προγράμματα
          στις ανάγκες της επιχείρησής σας.
        </p>
        <Link
          href="/contact"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Επικοινωνήστε μαζί μας
        </Link>
      </motion.div>
    </div>
  )
}

