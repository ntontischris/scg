"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  Thermometer,
  Clock,
  Award,
  Microscope,
  Utensils,
  Briefcase,
} from "lucide-react"

const technologies = [
  {
    icon: Thermometer,
    title: "Έλεγχος Ά Υλών",
    description: "Προηγμένα συστήματα ελέγχου,οδηγίες συντήρησης.",
  },
  {
    icon: Clock,
    title: "Παράταση Διάρκειας Ζωής",
    description: "Καινοτόμες τεχνικές για την επέκταση της διάρκειας ζωής των προϊόντων με βάση το κρέας.",
  },
  {
    icon: Award,
    title: "Βελτίωση Ποιότητας",
    description: "Μέθοδοι για τη βελτίωση της υφής, του χρώματος και της γεύσης του κρέατος.",
  },
  {
    icon: Microscope,
    title: "Μικροβιολογικός Έλεγχος",
    description: "Προηγμένες τεχνικές για τον έλεγχο και την πρόληψη κρίσιμων σημείων HACCP.",
  },
  {
    icon: Utensils,
    title: "Εξειδικευμένες Λύσεις",
    description: "Δημιουργία μοναδικών συνταγών και προϊόντων προσαρμοσμένων στις ανάγκες κάθε πελάτη.",
  },
  {
    icon: Briefcase,
    title: "Συμβουλευτική",
    description: "Εξειδικευμένη καθοδήγηση για την εφαρμογή σύγχρονων τεχνολογιών στην παραγωγή κρέατος.",
  },
]

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%20205-Ihi6ahjo2UrnTX06p0IfpXmYevJwoT.webp",
    alt: "Ψημένο κρέας με σάλτσα και γαρνιτούρα",
    title: "Εξειδικευμένη Παρασκευή",
    description: "Τεχνικές μαγειρικής που αναδεικνύουν τη γεύση και την ποιότητα του κρέατος",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products08-4eCEpCzoV7hW6sVH8ZrOg9TUOrWMdI.webp",
    alt: "Φρέσκα μενταγιόν κρέατος",
    title: "Ποιοτικές Πρώτες Ύλες",
    description: "Επιλεγμένα κομμάτια κρέατ��ς για άριστο αποτέλεσμα",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products09-fDCrpiK3QYrmzSkWSNWDN6pSoib61T.webp",
    alt: "Μεγάλο κομμάτι ωρίμανσης",
    title: "Τεχνικές Ωρίμανσης",
    description: "Σύγχρονες μέθοδοι για βέλτιστη γεύση και υφή",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products03-ps6L0bA4dI3ssl4oFkThnkt4ERjyKi.webp",
    alt: "Φρέσκος κιμάς με μυρωδικά",
    title: "Παρασκευή Κιμά",
    description: "Εξειδικευμένη επεξεργασία για άριστη ποιότητα",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products07-u35Kl4A3Qc1R2HMvxAFTYTaNXgsUMy.webp",
    alt: "Κρέας με γαρνιτούρα μικρών λαχανικών",
    title: "Καινοτόμες Παρουσιάσεις",
    description: "Σύγχρονες τεχνικές παρουσίασης προϊόντων",
  },

  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products10-Ykg6dmFjHopcLi6tqeouYuFT9IWZKp.webp",
    alt: "Φρέσκο κρέας με ελαιόλαδο",
    title: "Παραδοσιακή Προετοιμασία",
    description: "Αυθεντικές συνταγές με σύγχρονη προσέγγιση",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products13-vKcX2FRstco3n43sOQU16m68ULyic3.webp",
    alt: "Μπιφτέκια με πιπεριές",
    title: "Μοντέρνες Δημιουργίες",
    description: "Καινοτόμες συνταγές με παραδοσιακά υλικά",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products11-OUg9DscnK2Pi56iyXhQqwrQdk3AXoq.webp",
    alt: "Ποικιλία κρεάτων",
    title: "Ποικιλία Επιλογών",
    description: "Πλούσια γκάμα προϊόντων υψηλής ποιότητας",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products17-rt4PHsYNLkiQN4YIdOalb7l2TOUrjU.webp",
    alt: "Λουκάνικα και αλλαντικά",
    title: "Αλλαντικά & Παραδοσιακά",
    description: "Παραδοσιακές συνταγές με σύγχρονη τεχνολογία",
  },
]

export default function MeatTechnologyPage() {
  const [[page, direction], setPage] = useState([0, 0])
  const [isAnimating, setIsAnimating] = useState(false)

  const imageIndex = Math.abs(page % images.length)

  const paginate = useCallback(
    (newDirection: number) => {
      if (!isAnimating) {
        setPage([page + newDirection, newDirection])
      }
    },
    [isAnimating, page],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        paginate(1)
      }
    }, 7000)
    return () => clearInterval(timer)
  }, [paginate, isAnimating])

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 1.2,
      }
    },
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Τεχνολογία Κρέατος</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Η SCG προσφέρει προηγμένες τεχνολογικές λύσεις για τη βιομηχανία κρέατος, εστιάζοντας στην ποιότητα, την
          ασφάλεια και την καινοτομία.
        </p>
      </motion.div>

      <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-lg overflow-hidden">
        <AnimatePresence initial={false} custom={direction} onExitComplete={() => setIsAnimating(false)}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
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
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <motion.div
              animate={imageIndex % 2 === 0 ? { scale: [1, 1.1] } : { scale: [1.1, 1] }}
              transition={{ duration: 7, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={images[imageIndex].src || "/placeholder.svg"}
                alt={images[imageIndex].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 p-6 text-white"
            >
              <h3 className="text-2xl font-bold mb-2">{images[imageIndex].title}</h3>
              <p className="text-gray-200">{images[imageIndex].description}</p>
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
                index === imageIndex ? "bg-white w-4" : "bg-white/50"
              }`}
              onClick={() => {
                if (!isAnimating) {
                  const newDirection = index > imageIndex ? 1 : -1
                  setPage([index, newDirection])
                }
              }}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <tech.icon className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold">{tech.title}</h3>
            </div>
            <p className="text-gray-300">{tech.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Πλεονεκτήματα Συνεργασίας με την SCG</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Εκτενής εμπειρία στη βιομηχανία κρέατος</li>
          <li>Ομάδα επιστημόνων σε όλη την Ελλάδα</li>
          <li>Εξατομικευμένες λύσεις προσαρμοσμένες στις ανάγκες κάθε πελάτη</li>
          <li>Συνεχής ενημέρωση για τις τελευταίες τεχνολογικές εξελίξεις</li>
          <li>Ολοκληρωμένη υποστήριξη από το στάδιο του σχεδιασμού μέχρι την υλοποίηση</li>
          <li>Δέσμευση για την ποιότητα και την ασφάλεια των προϊόντων, με βάση το κρέας</li>
        </ul>
      </motion.div>
    </div>
  )
}
