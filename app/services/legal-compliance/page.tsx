"use client"

import { motion } from "framer-motion"
import { Scale, FileText, ShieldCheck, Book } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const complianceAreas = [
  {
    icon: Scale,
    title: "Νομοθετική Συμμόρφωση",
    description: "Υποστήριξη για συμμόρφωση βάση της εθνικής και ευρωπαϊκής νομοθεσίας, τροφίμων και ποτών.",
  },
  {
    icon: FileText,
    title: "Διαχείριση Εγγράφων",
    description: "Βοήθεια στη δημιουργία και διαχείριση των απαραίτητων εγγράφων και αρχείων, νόμιμων παραστατικών των ελεγκτικών φορέων.",
  },
  {
    icon: ShieldCheck,
    title: "Διαχείριση Κινδύνων",
    description: "Αναγνώριση και αντιμετώπιση νομικών κινδύνων στην παραγωγή και διάθεση τροφίμων.",
  },
  {
    icon: Book,
    title: "Εκπαίδευση",
    description: "Προγράμματα εκπαίδευσης για το προσωπικό σχετικά με τις νομικές απαιτήσεις.",
  },
]

export default function LegalCompliancePage() {
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    // Start zoom animation after component mounts
    const timer = setTimeout(() => {
      setIsZoomed(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Νομική Συμμόρφωση</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Η SCG προσφέρει εξειδικευμένες υπηρεσίες για τη διασφάλιση της νομικής συμμόρφωσης των επιχειρήσεων στον κλάδο
          των τροφίμων.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative aspect-[16/9] max-w-4xl mx-auto rounded-lg overflow-hidden"
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: isZoomed ? 1.3 : 1,
            x: isZoomed ? "-20%" : "0%",
            y: isZoomed ? "-10%" : "0%",
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%2041-UOw5aS5Q85csJFAP9FDbOQOmukRl3e.webp"
            alt="Επαγγελματική διαχείριση κρέατος με πρότυπα ποιότητας SCG"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">Διασφάλιση Ποιότητας & Συμμόρφωσης</h3>
          <p className="text-sm text-gray-200">Πιστοποιημένες διαδικασίες και έλεγχοι σε κάθε στάδιο επεξεργασίας</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {complianceAreas.map((area, index) => (
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
            <p className="text-gray-300">{area.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Οφέλη Νομικής Συμμόρφωσης</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Αποφυγή νομικών κυρώσεων και προστίμων</li>
          <li>Ενίσχυση της εμπιστοσύνης των καταναλωτών</li>
          <li>Βελτίωση της φήμης της επιχείρησης</li>
          <li>Διευκόλυνση της πρόσβασης σε νέες αγορές</li>
          <li>Μείωση των επιχειρηματικών κινδύνων</li>
          <li>Βελτίωση των εσωτερικών διαδικασιών και της λειτουργίας</li>
        </ul>
      </motion.div>
    </div>
  )
}

