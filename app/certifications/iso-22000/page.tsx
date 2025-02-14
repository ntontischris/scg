"use client"

import { motion } from "framer-motion"
import { Shield, Target, RefreshCw, FileCheck } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Shield,
    title: "Ολοκληρωμένη Προσέγγιση",
    description: "Διαχείριση της ασφάλειας των τροφίμων σε όλη την αλυσίδα εφοδιασμού.",
  },
  {
    icon: Target,
    title: "Αναγνώριση Κινδύνων",
    description: "Εντοπισμός και εκτίμηση κινδύνων μέσω της διαδικασίας HACCP.",
  },
  {
    icon: RefreshCw,
    title: "Συνεχής Βελτίωση",
    description: "Διαρκής αναβάθμιση του συστήματος διαχείρισης ασφάλειας τροφίμων.",
  },
  {
    icon: FileCheck,
    title: "Συμμόρφωση",
    description: "Τήρηση νομικών και κανονιστικών απαιτήσεων για την ασφάλεια τροφίμων.",
  },
]

export default function ISO22000Page() {
  return (
    <div className="space-y-12">
      <div className="flex justify-center mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iso-22000-DLCvYlnesBv3wCI35imqnwgszWKryZ.webp"
          alt="ISO 22000 Certification"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">ISO 22000:2018</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Διεθνές πρότυπο για τη διαχείριση της ασφάλειας των τροφίμων, που καθορίζει τις απαιτήσεις για ένα
          ολοκληρωμένο σύστημα διαχείρισης ασφάλειας τροφίμων (ΣΔΑΤ).
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Οφέλη του ISO 22000</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Βελτίωση της ασφάλειας των τροφίμων και μείωση των κινδύνων</li>
          <li>Αύξηση της εμπιστοσύνης των πελατών και των καταναλωτών</li>
          <li>Βελτίωση της αποτελεσματικότητας και μείωση του κόστους</li>
          <li>Ενίσχυση της συμμόρφωσης με τις κανονιστικές απαιτήσεις</li>
          <li>Διευκόλυνση του διεθνούς εμπορίου</li>
        </ul>
      </motion.div>
    </div>
  )
}

