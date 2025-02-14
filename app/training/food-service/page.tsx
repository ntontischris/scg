"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Users, ShieldCheck, Utensils, ClipboardList, Briefcase, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const trainingModules = [
  {
    icon: ShieldCheck,
    title: "Υγιεινή και Ασφάλεια Τροφίμων",
    description: "Εκπαίδευση σε θέματα υγιεινής, εφαρμογή συστημάτων HACCP και τις απαιτήσεις των ελεγκτικών φορέων.",
  },
  {
    icon: Users,
    title: "Εξυπηρέτηση Πελατών",
    description:
      "Ανάπτυξη δεξιοτήτων επικοινωνίας και διαχείριση παραπόνων, προσαρμογή στις ανάγκες διαφορετικών τύπων πελατών.",
  },
  {
    icon: Utensils,
    title: "Γνώσεις για Μενού και Ποτά",
    description:
      "Ενημέρωση για τα προϊόντα του μενού, ειδικές διατροφικές απαιτήσεις.",
  },
  {
    icon: ClipboardList,
    title: "Λειτουργική Οργάνωση",
    description:
      "Χρήση τεχνολογικών εργαλείων για βελτιστοποίηση χρόνου και απόδοσης.",
  },
  {
    icon: Briefcase,
    title: "Διαχείριση Ομάδας",
    description: "Εκπαίδευση προϊσταμένων για την επίβλεψη και υποστήριξη του προσωπικού, καλλιέργεια ομαδικότητας.",
  },
]

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%20201-TqaBxlZmGVXLUA3wVOcvD3uS724ho2.webp",
    alt: "Επαγγελματική παρουσίαση φαγητού με σουβλάκια και συνοδευτικά",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20butcher02-ARZdeuXyCPIVJACPXyOGxuNwjq6R8u.webp",
    alt: "Επεξεργασία κρέατος από επαγγελματία",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%20202-PsAdXA2dygFlHuzslrTMbI3BLIZan9.webp",
    alt: "Ψημένα κρεατικά με γαρνιτούρα",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20butcher01-CQSeJuER3z0lIML5vp2qHgMRxVtktB.webp",
    alt: "Σύγχρονο σύστημα διαχείρισης παραγγελιών",
  },
]

export default function FoodServiceTrainingPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setDirection(1)
        setCurrentImage((prev) => (prev + 1) % images.length)
      }, 7000)
      return () => clearInterval(timer)
    }
  }, [isHovered])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentImage((prev) => (prev + newDirection + images.length) % images.length)
  }

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Εκπαίδευση Προσωπικού Εστίασης</h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Το πρόγραμμα εκπαίδευσης προσωπικού εστίασης της SCG στοχεύει στην ανάπτυξη των απαραίτητων δεξιοτήτων για την
          παροχή υψηλής ποιότητας υπηρεσιών στον κλάδο της εστίασης.
        </p>

        <div
          className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-lg overflow-hidden mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
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
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute w-full h-full"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-full h-full"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={images[currentImage].src || "/placeholder.svg"}
                  alt={images[currentImage].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                  priority
                />
              </motion.div>
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
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImage ? "bg-white w-4" : "bg-white/50"
                }`}
                onClick={() => {
                  setDirection(index > currentImage ? 1 : -1)
                  setCurrentImage(index)
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainingModules.map((module, index) => (
          <motion.div
            key={module.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <module.icon className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold">{module.title}</h3>
            </div>
            <p className="text-gray-300">{module.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Μεθοδολογία Εκπαίδευσης</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-300">
          <li>
            <span className="font-semibold">Θεωρητική Κατάρτιση:</span> Διαλέξεις και παρουσιάσεις από ειδικούς στην
            εστίαση.
          </li>
          <li>
            <span className="font-semibold">Πρακτική Εξάσκηση:</span> Εργαστηριακές ασκήσεις και προσομοιώσεις
            πραγματικών σεναρίων.
          </li>
          <li>
            <span className="font-semibold">Μελέτες Περιπτώσεων:</span> Ανάλυση πραγματικών περιστατικών και λύσεων.
          </li>
          <li>
            <span className="font-semibold">Διαδραστικά Εργαλεία:</span> Χρήση ψηφιακών πλατφορμών και εφαρμογών για
            ενισχυμένη μάθηση.
          </li>
          <li>
            <span className="font-semibold">Αξιολόγηση και Πιστοποίηση:</span> Τακτικές αξιολογήσεις και τελική εξέταση
            για πιστοποίηση γνώσεων.
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Οφέ��η Εκπαίδευσης</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Αύξηση της ικανοποίησης των πελατών</li>
          <li>Βελτίωση της απόδοσης και παραγωγικότητας</li>
          <li>Μείωση λαθών και βελτίωση της ασφάλειας των τροφίμων</li>
          <li>Ενίσχυση της ομ��δικότητας και του ηθικού των εργαζομένων</li>
          <li>Βελτίωση της φήμης και της ανταγωνιστικότητας της επιχείρησης</li>
          <li>Συμμόρφωση με τους κανονισμούς και αποφυγή προστίμων</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Χρηματοδότηση Εκπαίδευσης</h2>
        <p className="text-gray-300 mb-4">
          Η εκπαίδευση του προσωπικού μπορεί να επιδοτηθεί μέσω διαφόρων προγραμμάτων:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Προγράμματα ΕΣΠΑ για στήριξη μικρομεσαίων επιχειρήσεων στον τουρισμό και την εστίαση</li>
          <li>Προγράμματα κατάρτισης ΟΑΕΔ για ανέργους και εργαζομένους στον κλάδο εστίασης</li>
          <li>Ειδικές δράσεις Ευρωπαϊκής Ένωσης για υποστήριξη δεξιοτήτων σε τομείς φιλοξενίας και τουρισμού</li>
        </ul>
      </motion.div>
    </div>
  )
}

