'use client'

import { motion } from 'framer-motion'
import { ClipboardCheck, Users, TrendingUp, RefreshCw, FileText } from 'lucide-react'

const trainingModules = [
  {
    icon: ClipboardCheck,
    title: 'Βασικές Αρχές Διαχείρισης Ποιότητας',
    description: 'Εισαγωγή στις βασικές έννοιες και αρχές της διαχείρισης ποιότητας.'
  },
  {
    icon: Users,
    title: 'Ηγεσία και Δέσμευση',
    description: 'Ανάπτυξη ηγετικών ικανοτήτων για την προώθηση της κουλτούρας ποιότητας.'
  },
  {
    icon: TrendingUp,
    title: 'Διαχείριση Διαδικασιών',
    description: 'Τεχνικές για την αποτελεσματική διαχείριση και βελτίωση των επιχειρησιακών διαδικασιών.'
  },
  {
    icon: RefreshCw,
    title: 'Συνεχής Βελτίωση',
    description: 'Μεθοδολογίες και εργαλεία για τη συνεχή βελτίωση της ποιότητας.'
  },
  {
    icon: FileText,
    title: 'Τεκμηρίωση και Έλεγχος',
    description: 'Διαχείριση εγγράφων και αρχείων ποιότητας, διενέργεια εσωτερικών ελέγχων.'
  }
]

export default function QualityManagementTrainingPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Εκπαίδευση Διαχείρισης Ποιότητας</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Το πρόγραμμα εκπαίδευσης Διαχείρισης Ποιότητας της SCG παρέχει ολοκληρωμένη κατάρτιση στις σύγχρονες πρακτικές και μεθοδολογίες διασφάλισης ποιότητας.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainingModules.map((module, index) => (
          <motion.div
            key={module.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <module.icon className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold">{module.title}</h3>
            </div>
            <p className="text-gray-300">{module.description}</p>
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
          <li>Βελτίωση της ποιότητας προϊόντων και υπηρεσιών</li>
          <li>Αύξηση της ικανοποίησης των πελατών</li>
          <li>Ενίσχυση της αποδοτικότητας και μείωση του κόστους</li>
          <li>Ανάπτυξη κουλτούρας ποιότητας στον οργανισμό</li>
          <li>Βελτίωση της ανταγωνιστικότητας στην αγορά</li>
          <li>Συμμόρφωση με διεθνή πρότυπα ποιότητας</li>
        </ul>
      </motion.div>
    </div>
  )
}

