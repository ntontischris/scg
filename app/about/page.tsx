'use client'

import { motion } from 'framer-motion'
import { Users, Briefcase, Search, TrendingUp, ShieldCheck } from 'lucide-react'

const companyAreas = [
  {
    icon: Search,
    title: 'SCG ερευνούμε – σχεδιάζουμε',
    description: 'Μελέτη και σχεδιασμός βιομηχανιών τροφίμων, γραμμών παραγωγής και συστημάτων ιχνηλασιμότητας. Εγκατάσταση συστημάτων διασφάλισης ποιότητας και υγιεινής.'
  },
  {
    icon: TrendingUp,
    title: 'SCG Business',
    description: 'Υπηρεσίες οικονομικού management, marketing και υποστήριξη σε προγράμματα χρηματοδότησης.'
  },
  {
    icon: Users,
    title: 'SCG εκπαιδεύουμε',
    description: 'Εκπαίδευση προσωπικού σύμφωνα με τα επίσημα προγράμματα των ελεγκτικών φορέων.'
  },
  {
    icon: ShieldCheck,
    title: 'SCG επιθεωρούμε',
    description: 'Επιθεώρηση εγκαταστάσεων, προϊόντων και παραγωγικών διαδικασιών.'
  },
  {
    icon: Briefcase,
    title: 'SCG παρέχουμε',
    description: 'Νομική κάλυψη, υποστήριξη και εργαστηριακή υποστήριξη προϊόντων.'
  }
]

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Σχετικά με την SCG</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Η SCG είναι μία καθετοποιημένη εταιρία που δραστηριοποιείται σε όλο το φάσμα της βιομηχανίας τροφίμων, προσφέροντας εξειδικευμένες υπηρεσίες στήριξης με 25ετή εμπειρία.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companyAreas.map((area, index) => (
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
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Η Ομάδα μας</h2>
        <p className="text-gray-300 mb-4">
          Η SCG στελεχώνεται από μια ομάδα έμπειρων επαγγελματιών με εξειδίκευση σε διάφορους τομείς:
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          <li>Κτηνίατροι</li>
          <li>Τεχνολόγοι Τροφίμων</li>
          <li>Χημικοί</li>
          <li>Πολιτικοί Μηχανικοί</li>
          <li>Αρχιτέκτονες</li>
          <li>Δικηγόροι</li>
          <li>Οικονομολόγοι</li>
          <li>Μαρκετίστες</li>
          <li>Γραφίστες-Διαφημιστές</li>
          <li>Λογιστές</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Η Δέσμευσή μας</h2>
        <p className="text-gray-300">
          Στόχος μας είναι να παρέχουμε υψηλή ποιότητα υπηρεσιών που να ικανοποιούν πλήρως τους πελάτες μας και να τους οδηγούν στην επιχειρηματική επιτυχία. Η δέσμευσή μας είναι η ποιότητα και η υψηλή τεχνογνωσία σε όλους τους τομείς δραστηριοποίησής μας.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Οι Αξίες μας</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Καινοτομία στην τεχνολογία τροφίμων</li>
          <li>Προσήλωση στην ποιότητα και την ασφάλεια</li>
          <li>Συνεχής εκπαίδευση και ανάπτυξη</li>
          <li>Προσαρμοστικότητα στις ανάγκες της αγοράς</li>
          <li>Υπευθυνότητα και ακεραιότητα στις επιχειρηματικές πρακτικές</li>
        </ul>
      </motion.div>
    </div>
  )
}

