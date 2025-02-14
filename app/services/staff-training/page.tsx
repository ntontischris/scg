'use client'

import { motion } from 'framer-motion'
import { Users, ShieldCheck, Book, Briefcase } from 'lucide-react'

const trainingAreas = [
  {
    icon: ShieldCheck,
    title: 'Υγιεινή και Ασφάλεια Τροφίμων',
    description: 'Εκπαίδευση στις βασικές αρχές υγιεινής σύμφωνα με τα συστήματα HACCP και τις απαιτήσεις των ελεγκτικών φορέων.'
  },
  {
    icon: Book,
    title: 'Νομοθεσία Τροφίμων',
    description: 'Ενημέρωση για τις τρέχουσες νομοθετικές απαιτήσεις στη βιομηχανία τροφίμων.'
  },
  {
    icon: Briefcase,
    title: 'Διαχείριση Ποιότητας',
    description: 'Εκπαίδευση στην εφαρμογή συστημάτων διαχείρισης ποιότητας και ασφάλειας τροφίμων.'
  },
  {
    icon: Users,
    title: 'Εξυπηρέτηση Πελατών',
    description: 'Ανάπτυξη δεξιοτήτων επικοινωνίας και εξυπηρέτησης πελατών για προσωπικό πρώτης γραμμής.'
  }
]

export default function StaffTrainingPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Εκπαίδευση Προσωπικού</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Η SCG προσφέρει εξειδικευμένα προγράμματα εκπαίδευσης για το προσωπικό της βιομηχανίας τροφίμων, εξασφαλίζοντας την τήρηση των υψηλότερων προτύπων ποιότητας και ασφάλειας.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {trainingAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <area.icon className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">{area.title}</h3>
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
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Οφέλη Εκπαίδευσης</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Βελτίωση της ποιότητας και ασφάλειας των προϊόντων</li>
          <li>Συμμόρφωση με τις νομοθετικές απαιτήσεις</li>
          <li>Αύξηση της παραγωγικότητας και αποδοτικότητας</li>
          <li>Ενίσχυση της εμπιστοσύνης των πελατών</li>
          <li>Μείωση των κινδύνων και των λαθών στην παραγωγή</li>
          <li>Βελτίωση του εργασιακού περιβάλλοντος και της ικανοποίησης των εργαζομένων</li>
        </ul>
      </motion.div>
    </div>
  )
}

