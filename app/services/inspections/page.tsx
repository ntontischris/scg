"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Scale, FileCheck, AlertTriangle } from "lucide-react"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const inspectionImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%2031-r2TDp7FyAEKIvCrXFzj96c1va5Wi4T.webp",
    alt: "Ποιοτικός έλεγχος προϊόντων κρέατος",
    title: "Έλεγχος Ποιότητας",
    description: "Λεπτομερής επιθεώρηση προϊόντων για διασφάλιση υψηλών προδιαγραφών",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%2034-AsoTejhlPotPeGBvbKSVdINnVflvEC.webp",
    alt: "Έλεγχος αλλαντικών και παραδοσιακών προϊόντων",
    title: "Παρ��δοσιακά Προϊόντα",
    description: "Επιθεώρηση διαδικασιών παραγωγής παραδοσιακών προϊόντων",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%2036-NZqLvAA2DivRmjAMLbqryuoJJAercT.webp",
    alt: "Επιθεώρηση φρέσκου κρέατος",
    title: "Πρώτες Ύλες",
    description: "Αυστηρός έλεγχος ποιότητας πρώτων υλών",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%2032-G0Cco7MUwCiCSpyEJ30DQdhWnBihlj.webp",
    alt: "Έλεγχος επεξεργασμένων προϊόντων",
    title: "Επεξεργασμένα Προϊόντα",
    description: "Επιθεώρηση διαδικασιών επεξεργασίας και συντήρησης",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%2035-30JE54QIxs0Wu4X6Hsl9pmwNoiOkkx.webp",
    alt: "Ποικιλία προϊόντων κρέατος",
    title: "Εύρος Ελέγχων",
    description: "Ολοκληρωμένοι έλεγχοι σε όλα τα είδη προϊόντων",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%2033-0jHdah0piYIFQJgw32VYmAkSyu60Z2.webp",
    alt: "Ειδικές παρασκευές κρέατος",
    title: "Εξειδικευμένοι Έλεγχοι",
    description: "Επιθεώρηση ειδικών παρασκευών και προδιαγραφών",
  },
]

const inspectionAreas = [
  {
    icon: ShieldCheck,
    title: "Υγιεινή και Ασφάλεια Τροφίμων",
    items: [
      "Έλεγχος εφαρμογής συστημάτων HACCP και ISO 22000",
      "Επιθεώρηση χώρων παραγωγής, αποθήκευσης, και διάθεσης κρέατος",
      "Έλεγχος διαδικασιών καθαρισμού και απολύμανσης",
    ],
  },
  {
    icon: Scale,
    title: "Νομοθετική Συμμόρφωση",
    items: [
      "Επαλήθευση συμμόρφωσης με εθνική και ευρωπαϊκή νομοθεσία",
      "Υποστήριξη σε επιθεωρήσεις από κρατικούς φορείς",
      "Συμβουλευτική για ιδιωτικούς οργανισμούς πιστοποίησης",
    ],
  },
  {
    icon: FileCheck,
    title: "Ετικετοποίηση και Ιχνηλασιμότητα",
    items: [
      "Έλεγχος ορθότητας πληροφοριών στις ετικέτες προϊόντων",
      "Εξασφάλιση πλήρους ιχνηλασιμότητας από τον παραγωγό στον καταναλωτή",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Διαχείριση Κρίσεων",
    items: [
      "Συμβουλευτική υποστήριξη, σε περιπτώσεις ελέγχων ή επιβολής προστίμων",
    ],
  },
]

export default function InspectionsPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentImage((prev) => (prev + 1) % inspectionImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentImage((prev) => (prev + newDirection + inspectionImages.length) % inspectionImages.length)
  }

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Υπηρεσίες Επιθεωρήσεων</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Οι επιθεωρήσεις μας διασφαλίζουν τη συμμόρφωση με τα πρότυπα και τους κανονισμούς, εξασφαλίζοντας την ποιότητα
          και την ασφάλεια των προϊόντων σας.
        </p>
      </motion.div>

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
                src={inspectionImages[currentImage].src || "/placeholder.svg"}
                alt={inspectionImages[currentImage].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{inspectionImages[currentImage].title}</h3>
              <p className="text-gray-200">{inspectionImages[currentImage].description}</p>
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
          {inspectionImages.map((_, index) => (
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {inspectionAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <area.icon className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold">{area.title}</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {area.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Οφέλη Υπηρεσιών Επιθεώρησης</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Πρόληψη κυρώσεων μέσω προληπτικών ελέγχων</li>
          <li>Διασφάλιση υψηλής ποιότητας προϊόντων και υπηρεσιών</li>
          <li>Ενίσχυση εμπιστοσύνης πελατών, συνεργατών και αρχών</li>
          <li>Βελτίωση της ανταγωνιστικότητας στην αγορά</li>
          <li>Μείωση κινδύνων και λειτουργικού κόστους</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Υπηρεσίες για Λιανική και Εστίαση</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Εσωτερικοί υγειονομικοί έλεγχοι καταστημάτων</li>
          <li>Αξιολόγηση εξοπλισμού για τη διατήρηση της ασφάλειας των προϊόντων</li>
        </ul>
      </motion.div>
    </div>
  )
}

