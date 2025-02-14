"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Truck, FileCheck, Users } from "lucide-react"
import Image from "next/image"

const ifsAreas = [
  {
    icon: ShieldCheck,
    title: "Ασφάλεια τροφίμων",
    description: "Διασφάλιση ότι τα προϊόντα δεν θα προκαλέσουν κινδύνους για τη δημόσια υγεία.",
  },
  {
    icon: FileCheck,
    title: "Ποιότητα τροφίμων",
    description: "Εξασφάλιση ότι τα προϊόντα πληρούν τις συμφωνηθείσες προδιαγραφές ποιότητας.",
  },
  {
    icon: Truck,
    title: "Αποτελεσματικότητα διαδικασιών",
    description:
      "Αξιολόγηση των διαδικασιών και συστημάτων που ακολουθούνται κατά την παραγωγή και διανομή των τροφίμων.",
  },
  {
    icon: Users,
    title: "Ικανοποίηση πελατών",
    description: "Εστίαση στην ικανοποίηση των απαιτήσεων των πελατών και των καταναλωτών.",
  },
]

export default function IFSPage() {
  return (
    <div className="space-y-12">
      <div className="flex justify-center mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRC-IFS-and-FSSC-22000-scaled-XDNCZ6E4KsVoWKAFLgJ5a94vSMgc9G.webp"
          alt="IFS Food Certification"
          width={400}
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
        <h1 className="text-4xl font-bold text-blue-400 mb-4">IFS (International Featured Standards)</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Τα πρότυπα IFS είναι μια σειρά από διεθνείς κανονισμούς που αφορούν την ποιότητα και την ασφάλεια των τροφίμων
          σε όλη την αλυσίδα εφοδιασμού, από την παραγωγή έως τη διανομή.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Κύριοι Τομείς Αξιολόγησης IFS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ifsAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-lg flex items-start space-x-4"
            >
              <area.icon className="w-8 h-8 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-gray-300">{area.description}</p>
              </div>
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
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Πλεονεκτήματα Πιστοποίησης IFS</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Βελτίωση της ασφάλειας και της ποιότητας των τροφίμων</li>
          <li>Ενίσχυση της εμπιστοσύνης των καταναλωτών και των συνεργατών</li>
          <li>Αναγνώριση από μεγάλες διεθνείς αλυσίδες λιανικής</li>
          <li>Βελτιστοποίηση των εσωτερικών διαδικασιών</li>
          <li>Μείωση του κόστους και των αποβλήτων</li>
          <li>Διευκόλυνση της συμμόρφωσης με τις νομικές απαιτήσεις</li>
        </ul>
      </motion.div>
    </div>
  )
}

