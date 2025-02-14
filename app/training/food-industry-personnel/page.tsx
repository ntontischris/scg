"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Briefcase, ChevronRight, Beaker, Sandwich, ClipboardList } from "lucide-react"

const topics = [
  {
    icon: Beaker,
    title: "Τεχνολογία Επεξεργασίας Κρέατος",
    description: "Εκπαίδευση στις σύγχρονες μεθόδους επεξεργασίας, συντήρησης και μεταποίησης κρέατος.",
  },
  {
    icon: Sandwich,
    title: "Ανάπτυξη Νέων Προϊόντων",
    description: "Τεχνικές και μεθοδολογίες για τη δημιουργία καινοτόμων προϊόντων με βάση το κρέας.",
  },
  {
    icon: ClipboardList,
    title: "Διασφάλιση Ποιότητας",
    description: "Εφαρμογή συστημάτων ποιότητας και ασφάλειας στην παραγωγή προϊόντων κρέατος.",
  },
]

export default function FoodIndustryPersonnelPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center py-16 px-4 mb-12"
      >
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products%2041-WMzejOkuwmnGdGVtsGA2WWrVEn3vVU.webp')",
            filter: "brightness(0.3)",
          }}
        />
        <div className="relative z-10">
          <motion.h1
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Εκπαίδευση Προσωπικού Βιοτεχνιών Τροφίμων
          </motion.h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Εξειδικευμένα προγράμματα κατάρτισης για την ανάπτυξη δεξιοτήτων στην παραγωγή και επεξεργασία προϊόντων με
            βάση το κρέας.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <topic.icon className="w-10 h-10 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">{topic.title}</h3>
            </div>
            <p className="text-gray-300">{topic.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Περιεχόμενο Προγράμματος</h2>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" />
            <span>Βασικές αρχές επεξεργασίας κρέατος και παραγωγής προϊόντων με βάση το κρέας</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" />
            <span>Σύγχρονες τεχνολογίες και εξοπλισμός στη βιομηχανία κρέατος</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" />
            <span>Ανάπτυξη νέων προϊόντων και καινοτόμων συνταγών</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" />
            <span>Διασφάλιση ποιότητας και ασφάλειας τροφίμων στην παραγωγή προϊόντων κρέατος</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" />
            <span>Βελτιστοποίηση παραγωγικών διαδικασιών και αύξηση αποδοτικότητας</span>
          </li>
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
          <li>Βελτίωση της ποιότητας και της ασφάλειας των προϊόντων</li>
          <li>Αύξηση της παραγωγικότητας και της αποδοτικότητας</li>
          <li>Ανάπτυξη καινοτόμων προϊόντων και διαφοροποίηση στην αγορά</li>
          <li>Συμμόρφωση με τις τελευταίες νομοθετικές απαιτήσεις</li>
          <li>Βελτίωση των δεξιοτήτων και της τεχνογνωσίας του προσωπικού</li>
          <li>Ενίσχυση της ανταγωνιστικότητας της επιχείρησης</li>
        </ul>
      </motion.div>
    </div>
  )
}

