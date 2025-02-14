"use client"

import { motion } from "framer-motion"
import { Users, Target, RefreshCw, BarChart, Briefcase, ShieldCheck, FileCheck, Zap } from "lucide-react"
import Image from "next/image"

const principles = [
  {
    icon: Users,
    title: "Προσανατολισμός στον πελάτη",
    description: "Ικανοποίηση των αναγκών και προσδοκιών των πελατών.",
  },
  {
    icon: Briefcase,
    title: "Ηγεσία",
    description: "Δημιουργία πλαισίου και στρατηγικής για την επίτευξη των στόχων ποιότητας.",
  },
  {
    icon: Target,
    title: "Συμμετοχή των ανθρώπων",
    description: "Ενεργή συμμετοχή όλων τ��ν εργαζομένων για την επίτευξη των στόχων.",
  },
  { icon: Zap, title: "Διαχείριση διαδικασιών", description: "Συστηματική διαχείριση και βελτίωση των διαδικασιών." },
  {
    icon: ShieldCheck,
    title: "Διαχείριση κινδύνων",
    description: "Αναγνώριση και διαχείριση κινδύνων που επηρεάζουν την ποιότητα.",
  },
  {
    icon: RefreshCw,
    title: "Συνεχιζόμενη βελτίωση",
    description: "Συνεχής βελτίωση των διαδικασιών και της απόδοσης.",
  },
  {
    icon: BarChart,
    title: "Αποφάσεις βασισμένες σε δεδομένα",
    description: "Λήψη αποφάσεων με βάση την ανάλυση δεδομένων και πληροφοριών.",
  },
  {
    icon: FileCheck,
    title: "Σχέσεις αμοιβαίου οφέλους",
    description: "Καλή συνεργασία με προμηθευτές για διασφάλιση της ποιότητας.",
  },
]

export default function ISO9001Page() {
  return (
    <div className="space-y-12">
      <div className="flex justify-center mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/certification-iso-9001-thumbnail-zNQ05DWNezDeUswd2frZm6je1mDEMZ.png"
          alt="ISO 9001:2015 Certification"
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
        <h1 className="text-4xl font-bold text-blue-400 mb-4">ISO 9001</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Το ISO 9001 είναι ένα διεθνές πρότυπο για τη διαχείριση ποιότητας, που παρέχει τις απαιτήσεις για τη
          δημιουργία, εφαρμογή και συντήρηση ενός συστήματος διαχείρισης ποιότητας (ΣΔΠ) σε οργανισμούς ανεξαρτήτως
          μεγέθους ή κλάδου.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Βασικές Αρχές του ISO 9001</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 p-4 rounded-lg"
            >
              <principle.icon className="w-8 h-8 text-blue-400 mb-2" />
              <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
              <p className="text-sm text-gray-300">{principle.description}</p>
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
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Οφέλη Πιστοποίησης ISO 9001</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Βελτίωση της ποιότητας προϊόντων και υπηρεσιών</li>
          <li>Αύξηση της ικανοποίησης των πελατών</li>
          <li>Ενίσχυση της αποδοτικότητας και μείωση του κόστους</li>
          <li>Βελτίωση της εσωτερικής επικοινωνίας και των διαδικασιών</li>
          <li>Αύξηση της ανταγωνιστικότητας στην αγορά</li>
          <li>Διευκόλυνση της συμμόρφωσης με κανονιστικές απαιτήσεις</li>
        </ul>
      </motion.div>
    </div>
  )
}

