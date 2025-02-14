"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Search, FileText, RefreshCw, AlertTriangle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Modal from "../../components/Modal"

const haccpPrinciples = [
  {
    icon: Search,
    title: "Ανάλυση Κινδύνων",
    description: "Αναγνώριση και αξιολόγηση πιθανών κινδύνων σε όλα τα στάδια της παραγωγής τροφίμων.",
  },
  {
    icon: AlertTriangle,
    title: "Προσδιορισμός Κρίσιμων Σημείων Ελέγχου (CCP)",
    description: "Εντοπισμός σημείων στη διαδικασία όπου ο έλεγχος είναι κρίσιμος για την πρόληψη ή εξάλειψη κινδύνων.",
  },
  {
    icon: FileText,
    title: "Καθορισμός Κρίσιμων Ορίων",
    description: "Θέσπιση ορίων και κριτηρίων που πρέπει να τηρούνται σε κάθε κρίσιμο σημείο ελέγχου.",
  },
  {
    icon: ShieldCheck,
    title: "Παρακολούθηση CCPs",
    description: "Εφαρμογή συστήματος για τη συνεχή παρακολούθηση των κρίσιμων σημείων ελέγχου.",
  },
  {
    icon: RefreshCw,
    title: "Διορθωτικές Ενέργειες",
    description: "Καθορισμός διορθωτικών ενεργειών όταν η παρακολούθηση δείχνει ότι ένα CCP δεν είναι υπό έλεγχο.",
  },
]

const facilityImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/haccp-eANzC6GTXqhbJsDwOr5p27QrgDLmgW.webp",
    alt: "HACCP Certification Logo",
    title: "Πιστοποίηση HACCP",
    description: "Διεθνώς αναγνωρισμένο σύστημα πιστοποίησης για την ασφάλεια των τροφίμων",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.%20%CE%A3%CE%A4%CE%91%CE%98%CE%9C%CE%9F%CE%A3%20%CE%9C%CE%95%20%CE%95%CE%A1%CE%93%CE%91%CE%96%CE%9F%CE%9C%CE%95%CE%9D%CE%9F-HJa2wln4gi0WSxy9wpS1mPcnDfcwsI.webp",
    alt: "Εργαζόμενος σε σταθμό ελέγχου",
    title: "Σύγχρονος Έλεγχος Παραγωγής",
    description: "Εξειδικευμένο προσωπικό με σύγχρονο εξοπλισμό για τον έλεγχο της παραγωγικής διαδικασίας",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.%20%CE%A3%CE%A4%CE%91%CE%98%CE%9C%CE%9F%CE%A3%20(3)-Lr45lotOjSCA32Gqi7J8K5H18IEkvB.webp",
    alt: "Εγκαταστάσεις επεξεργασίας τροφίμων",
    title: "Σύγχρονες Εγκαταστάσεις",
    description: "Πλήρως εξοπλισμένες εγκαταστάσεις που πληρούν τα υψηλότερα πρότυπα υγιεινής",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/haccp%209000%20logo-m9LvthPMi9HfBbKQ5nEFD6dXmzXStx.png",
    alt: "HACCP ISO 9000 Logo",
    title: "HACCP ISO 9000",
    description: "Διεθνές πρότυπο για τη διασφάλιση της ποιότητας και ασφάλειας των τροφίμων",
  },
]

export default function HACCPTrainingPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Εκπαίδευση HACCP</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Το πρόγραμμα εκπαίδευσης HACCP της SCG παρέχει ολοκληρωμένη κατάρτιση στις αρχές και την εφαρμογή του
          συστήματος διαχείρισης ασφάλειας τροφίμων.
        </p>
      </motion.div>

      {/* Facility Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {facilityImages.map((image, index) => (
          <motion.div
            key={image.alt}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[16/10] overflow-hidden cursor-pointer"
              onClick={() => {
                setSelectedImage(image)
                setModalOpen(true)
              }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-400 mb-3">{image.title}</h3>
              <p className="text-gray-300 text-lg">{image.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Βασικές Αρχές HACCP</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {haccpPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-lg"
            >
              <principle.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
              <p className="text-gray-300">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Περιεχόμενο Εκπαίδευσης</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-300">
          <li>Εισαγωγή στις αρχές του HACCP και τη σημασία του στην ασφάλεια τροφίμων</li>
          <li>Αναγνώριση και ανάλυση κινδύνων στην παραγωγή τροφίμων</li>
          <li>Μεθοδολογία προσδιορισμού και παρακολούθησης Κρίσιμων Σημείων Ελέγχου (CCPs)</li>
          <li>Ανάπτυξη και εφαρμογή σχεδίου HACCP</li>
          <li>Τεχνικές επαλήθευσης και επικύρωσης του συστήματος HACCP</li>
          <li>Διαχείριση εγγράφων και αρχείων HACCP</li>
          <li>Πρακτική εξάσκηση μέσω μελετών περιπτώσεων και σεναρίων</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Οφέλη Εκπαίδευσης HACCP</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Βελτίωση της ασφάλειας και ποιότητας των τροφίμων</li>
          <li>Συμμόρφωση με τις νομοθετικές απαιτήσεις και τα διεθνή πρότυπα</li>
          <li>Μείωση του κινδύνου τροφικών δηλητηριάσεων και ανακλήσεων προϊόντων</li>
          <li>Αύξηση της εμπιστοσύνης των καταναλωτών και των επιχειρηματικών συνεργατών</li>
          <li>Βελτίωση της αποτελεσματικότητας και μείωση του κόστους παραγωγής</li>
          <li>Ενίσχυση της ανταγωνιστικότητας στην αγορά τροφίμων</li>
        </ul>
      </motion.div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={selectedImage?.src || ""}
        imageAlt={selectedImage?.alt || ""}
      />
    </div>
  )
}

