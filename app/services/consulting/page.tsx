'use client'

import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, ShieldCheck, FileText, Users, BarChart } from 'lucide-react'

const consultingServices = [
  {
    icon: Lightbulb,
    title: 'Στρατηγικός Σχεδιασμός',
    description: 'Ανάπτυξη στρατηγικών για βελτίωση της παραγωγικότητας και της ανταγωνιστικότητας.'
  },
  {
    icon: TrendingUp,
    title: 'Βελτιστοποίηση Διαδικασιών',
    description: 'Ανάλυση και βελτίωση των παραγωγικών διαδικασιών για αύξηση της αποδοτικότητας.'
  },
  {
    icon: ShieldCheck,
    title: 'Διαχείριση Ποιότητας',
    description: 'Συμβουλές για την εφαρμογή συστημάτων διαχείρισης ποιότητας και ασφάλειας τροφίμων.'
  },
  {
    icon: FileText,
    title: 'Κανονιστική Συμμόρφωση',
    description: 'Καθοδήγηση για τη συμμόρφωση με τους κανονισμούς της βιομηχανίας τροφίμων.'
  },
  {
    icon: Users,
    title: 'Ανάπτυξη Ανθρώπινου Δυναμικού',
    description: 'Σχεδιασμός προγραμμάτων εκπαίδευσης και ανάπτυξης προσωπικού.'
  },
  {
    icon: BarChart,
    title: 'Ανάλυση Αγοράς',
    description: 'Έρευνα αγοράς και ανάλυση τάσεων για την ανάπτυξη νέων προϊόντων.'
  }
]

export default function ConsultingPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Συμβουλευτικές Υπηρεσίες</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Η SCG προσφέρει εξειδικευμένες συμβουλευτικές υπηρεσίες για επιχειρήσεις στον κλάδο της βιομηχανίας τροφίμων, με έμφαση στην καινοτομία και την ανάπτυξη.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {consultingServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <service.icon className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Η Προσέγγισή μας</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Εξατομικευμένες λύσεις βασισμένες στις ανάγκες κάθε πελάτη</li>
          <li>Συνεργασία με έμπειρους επαγγελματίες του κλάδου</li>
          <li>Χρήση σύγχρονων εργαλείων και μεθοδολογιών</li>
          <li>Συνεχής υποστήριξη και παρακολούθηση της προόδου</li>
          <li>Έμφαση στην καινοτομία και τη βιώσιμη ανάπτυξη</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Οφέλη Συμβουλευτικών Υπηρεσιών</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Βελτίωση της επιχειρησιακής αποδοτικότητας</li>
          <li>Αύξηση της ανταγωνιστικότητας στην αγορά</li>
          <li>Ενίσχυση της ποιότητας προϊόντων και υπηρεσιών</li>
          <li>Μείωση κόστους και βελτιστοποίηση πόρων</li>
          <li>Ανάπτυξη καινοτόμων προϊόντων και διαδικασιών</li>
          <li>Βελτίωση της εταιρικής κουλτούρας και του εργασιακού περιβάλλοντος</li>
        </ul>
      </motion.div>
    </div>
  )
}

