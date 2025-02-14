"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, FlaskRoundIcon as Flask, ShieldCheck, TrendingUp } from "lucide-react"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%2047-TfvpZlFDHeKVBB6sygCmoOCTSlBmwm.webp",
    alt: "Παραδοσιακά προϊόντα και μπαχαρικά",
    title: "Παραδοσιακή Τεχνογνωσία",
    description: "Συνδυασμός παραδοσιακών συνταγών με σύγχρονες μεθόδους παραγωγής",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%2044-H2Kf44wTChEpFdvBHSZKGTsVq1ABSM.webp",
    alt: "Εκλεκτό κρέας με κρασί",
    title: "Γαστρονομική Τελειότητα",
    description: "Υψηλή ποιότητα και γευστική απόλαυση σε κάθε πιάτο",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%20203-UokjUcj3M7LqF4lDUgUOTRVdBelPeW.webp",
    alt: "Σνίτσελ με συνοδευτικά",
    title: "Σύγχρονες Τεχνικές",
    description: "Καινοτόμες μέθοδοι παρασκευής για τέλειο αποτέλεσμα",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%2043-NwUr7Y3UUoH4ZhHF1ywwwTnV93zgSe.webp",
    alt: "Ωρίμανση κρέατος",
    title: "Τεχνολογία Ωρίμανσης",
    description: "Εξειδικευμένες μέθοδοι για βέλτιστη γεύση και υφή",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%2046-oXl6a0gw62LfihWMwz56nRS6fCjOEJ.webp",
    alt: "Αλλαντικά και συστατικά",
    title: "Ποιοτικά Συστατικά",
    description: "Επιλεγμένες πρώτες ύλες για εξαιρετικά προϊόντα",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%2042-rxMz4o2UM5GsqOtxcy4POFMUGxlbWy.webp",
    alt: "Φρέσκο κρέας",
    title: "Έλεγχος Ποιότητας",
    description: "Αυστηρά πρότυπα επιλογής και επεξεργασίας",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%2048-MIc9W3e37Arelg75LdPDeOmqbysKfw.webp",
    alt: "Φρέσκα υλικά",
    title: "Ολοκληρωμένη Προσέγγιση",
    description: "Συνδυασμός φρέσκων υλικών για τέλειο αποτέλεσμα",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%20204-tNj8AzSFhVkoC1Ewnko3KT2y1jaVMb.webp",
    alt: "Ποικιλία κρεατικών",
    title: "Γαστρονομική Ποικιλία",
    description: "Ευρεία γκάμα προϊόντων υψηλής ποιότητας",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%2045-4pzhN1X8Jlacg5eIcZKVIjSjosHhWd.webp",
    alt: "Αλλαντικά και μπαχαρικά",
    title: "Παραδοσιακά Αλλαντικά",
    description: "Αυθεντικές συνταγές με σύγχρονη τεχνολογία",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%2041-WMzejOkuwmnGdGVtsGA2WWrVEn3vVU.webp",
    alt: "SCG ποιότητα",
    title: "Εγγύηση Ποιότητας SCG",
    description: "Πιστοποιημένη ποιότητα σε κάθε στάδιο επεξεργασίας",
  },
]

const technologies = [
  {
    icon: Flask,
    title: "Καινοτόμες Μέθοδοι Επεξεργασίας",
    description: "Εφαρμογή προηγμένων τεχνικών για τη βελτίωση της ποιότητας και της διάρκειας ζωής των τροφίμων.",
  },
 
  {
    icon: ShieldCheck,
    title: "Ασφάλεια Τροφίμων",
    description: "Εφαρμογή συστημάτων διασφάλισης ποιότητας και ασφάλειας τροφίμων.",
  },
  {
    icon: TrendingUp,
    title: "Βελτιστοποίηση Παραγωγής",
    description: "Ανάλυση και βελτίωση των διαδικασιών παραγωγής για αύξηση της αποδοτικότητας, καθώς και του τελικού food cost των προϊόντων.",
  },
  
]

export default function FoodTechnologyPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [isAnimating])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    if (!isAnimating) {
      setDirection(newDirection)
      setCurrentIndex((prev) => (prev + newDirection + images.length) % images.length)
    }
  }

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Τεχνολογία Τροφίμων</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Η SCG προσφέρει προηγμένες τεχνολογικές λύσεις για τη βιομηχανία τροφίμων, εστιάζοντας στην ποιότητα, την
          ασφάλεια και την καινοτομία.
        </p>
      </motion.div>

      <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-lg overflow-hidden perspective">
        <AnimatePresence initial={false} custom={direction} onExitComplete={() => setIsAnimating(false)}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              rotateY: { duration: 0.8 },
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
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, times: [0, 0.5, 1], repeat: Number.POSITIVE_INFINITY }}
              className="w-full h-full"
            >
              <Image
                src={images[currentIndex].src || "/placeholder.svg"}
                alt={images[currentIndex].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-6 text-white"
            >
              <h3 className="text-2xl font-bold mb-2">{images[currentIndex].title}</h3>
              <p className="text-gray-200">{images[currentIndex].description}</p>
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
                index === currentIndex ? "bg-white w-4" : "bg-white/50"
              }`}
              onClick={() => {
                if (!isAnimating) {
                  const newDirection = index > currentIndex ? 1 : -1
                  setDirection(newDirection)
                  setCurrentIndex(index)
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
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Πλεονεκτήματα των Υπηρεσιών μας</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Βελτίωση της ποιότητας και της ασφάλειας των τροφίμων</li>
          <li>Αύξηση της διάρκειας ζωής των προϊόντων</li>
          <li>Μείωση του κόστους παραγωγής</li>
          <li>Ανάπτυξη νέων καινοτόμων προϊόντων</li>
          <li>Συμμόρφωση με τις διεθνείς προδιαγραφές και κανονισμούς</li>
          <li>Βελτίωση της ανταγωνιστικότητας στην αγορά</li>
        </ul>
      </motion.div>
    </div>
  )
}
