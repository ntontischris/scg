"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Truck, FileCheck, RefreshCw, Users, Award } from "lucide-react"
import Image from "next/image"

const brcElements = [
  {
    icon: ShieldCheck,
    title: "Ασφάλεια και Ποιότητα Τροφίμων",
    description: "Προστασία του καταναλωτή και συμμόρφωση με κανονισμούς.",
  },
  {
    icon: Truck,
    title: "Διαχείριση Διαδικασιών",
    description: "Τεκμηριωμένες διαδικασίες για όλες τις φάσεις παραγωγής και διακίνησης.",
  },
  {
    icon: FileCheck,
    title: "Διαχείριση Εγκαταστάσεων",
    description: "Υψηλά πρότυπα καθαριότητας, συντήρησης και υγιεινής.",
  },
  {
    icon: RefreshCw,
    title: "Ιχνηλασιμότητα",
    description: "Παρακολούθηση προϊόντων σε όλα τα στάδια παραγωγής και διακίνησης.",
  },
  {
    icon: Users,
    title: "Συνεχής Βελτίωση",
    description: "Επαναξιολόγηση διαδικασιών και συνεχής κατάρτιση προσωπικού.",
  },
]

export default function BRCPage() {
  return (
    <div className="space-y-12">
      <div className="flex justify-center mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRC-IFS-and-FSSC-22000-scaled-XDNCZ6E4KsVoWKAFLgJ5a94vSMgc9G.webp"
          alt="BRC Food Certification"
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
        <h1 className="text-4xl font-bold text-blue-400 mb-4">BRC (British Retail Consortium)</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Το πρότυπο BRC είναι ένα παγκόσμιο πρότυπο για την ασφάλεια των τροφίμων, που καθορίζει τις απαιτήσεις για την
          παραγωγή, συσκευασία, αποθήκευση και διανομή ασφαλών τροφίμων και καταναλωτικών προϊόντων.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">����ύρια Στοιχεία του BRC</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brcElements.map((element, index) => (
            <motion.div
              key={element.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-lg flex flex-col items-center text-center"
            >
              <element.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{element.title}</h3>
              <p className="text-gray-300">{element.description}</p>
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
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Οφέλη Εφαρμογής BRC</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="w-6 h-6 text-blue-400 mr-2" />
              Αναγνώριση από την Αγορά
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Απαραίτητο για συνεργασία με μεγάλους λιανεμπόρους</li>
              <li>Ενίσχυση αξιοπιστίας και φήμης στην αγορά</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <ShieldCheck className="w-6 h-6 text-blue-400 mr-2" />
              Βελτίωση Ποιότητας
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Εξασφάλιση υψηλότερης ποιότητας προϊόντων</li>
              <li>Προστασία από πιθανά προβλήματα και κυρώσεις</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Truck className="w-6 h-6 text-blue-400 mr-2" />
              Διευκόλυνση Εξαγωγών
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Προτεραιότητα από διεθνείς πελάτες και συνεργάτες</li>
              <li>Διευκόλυνση διείσδυσης σε νέες αγορές</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <RefreshCw className="w-6 h-6 text-blue-400 mr-2" />
              Μείωση Κινδύνων
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Εντοπισμός και μείωση πιθανών κινδύνων</li>
              <li>Μείωση λειτουργικού κόστους</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

