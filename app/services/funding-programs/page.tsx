'use client'

import { motion } from 'framer-motion'
import { TrendingUp, FileText, BarChart } from 'lucide-react'

const fundingPrograms = [
  {
    icon: TrendingUp,
    title: 'Αναπτυξιακός Νόμος',
    description: 'Υποστήριξη στη σύνταξη και κατάθεση προτάσεων για χρηματοδότηση μέσω του Αναπτυξιακού Νόμου.'
  },
  {
    icon: FileText,
    title: 'ΕΣΠΑ',
    description: 'Βοήθεια στην προετοιμασία και υποβολή προτάσεων για χρηματοδότηση μέσω προγραμμάτων ΕΣΠΑ.'
  },
  {
    icon: BarChart,
    title: 'LEADER',
    description: 'Υποστήριξη σε προγράμματα τοπικής ανάπτυξης LEADER.'
  }
]

export default function FundingProgramsPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Προγράμματα Επιδότησης</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Η SCG προσφέρει εξειδικευμένες υπηρεσίες υποστήριξης για την αξιοποίηση προγραμμάτων χρηματοδότησης και επιδότησης για επιχειρήσεις στον κλάδο των τροφίμων.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fundingPrograms.map((program, index) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <program.icon className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">{program.title}</h3>
            </div>
            <p className="text-gray-300">{program.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Οι Υπηρεσίες μας</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Αξιολόγηση επιλεξιμότητας για διάφορα προγράμματα χρηματοδότησης</li>
          <li>Προετοιμασία και σύνταξη ολοκληρωμένων προτάσεων χρηματοδότησης</li>
          <li>Υποστήριξη κατά τη διαδικασία υποβολής και αξιολόγησης των προτάσεων</li>
          <li>Διαχείριση και παρακολούθηση εγκεκριμένων έργων</li>
          <li>Συμβουλευτική για τη βέλτιστη αξιοπο��ηση των χρηματοδοτήσεων</li>
        </ul>
      </motion.div>
    </div>
  )
}

