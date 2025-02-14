"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Book, Users, ShieldCheck, Briefcase, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

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
]

const TrainingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % trainingImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setDirection(-1)
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + trainingImages.length) % trainingImages.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % trainingImages.length)
  }

  const trainingAreas = [
    {
      icon: Users,
      title: "Προσωπικό Εστίασης",
      description:
        "Εκπαίδευση διαχείρισης διατηρησιμότητας κρέατος και σκευασμάτων με βάση το κρέας και προηγμένες Τεχνοτροποιες ψησίματος.",
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
    {
      icon: Briefcase,
      title: "Προσωπικό βιοτεχνιών τροφίμων",
      description: "Βήμα βήμα εφαρμογή συστημάτων τεχνοτροπίας και δημιουργίας νέων προϊόντων με βάση το κρέας.",
      link: "/training/food-industry-personnel",
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

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Υπηρεσίες Εκπαίδευσης</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Η SCG προσφέρει εξειδικευμένα προγράμματα εκπαίδευσης για επαγγελματίες στον κλάδο της εστίασης και της
          βιομηχανίας τροφίμων, εστιάζοντας στην ασφάλεια, την ποιότητα και την αποτελεσματικότητα.
        </p>
      </motion.div>

      <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-lg overflow-hidden mb-12">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImageIndex}
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
              animate={currentImageIndex % 2 === 0 ? { scale: [1, 1.1] } : { scale: [1.1, 1] }}
              transition={{ duration: 5, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={trainingImages[currentImageIndex].src || "/placeholder.svg"}
                alt={trainingImages[currentImageIndex].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{trainingImages[currentImageIndex].title}</h3>
              <p className="text-gray-200">{trainingImages[currentImageIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

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
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Μεθοδολογία Εκπαίδευσης</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Σεμινάρια και εργαστήρια από έμπειρους επαγγελματίες του κλάδου</li>
          <li>Πρακτική εξάσκηση σε ρεαλιστικές συνθήκες εργασίας</li>
          <li>E-learning πλατφόρμες για ευέλικτη μάθηση</li>
          <li>Ενδοεπιχειρησιακή κατάρτιση προσαρμοσμένη στις ανάγκες κάθε επιχείρησης</li>
          <li>Πιστοποιημένα προγράμματα κατάρτισης σε συνεργασία με αναγνωρισμένους φορείς</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
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

export default TrainingPage

