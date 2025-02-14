'use client'

import { motion } from 'framer-motion'
import { Scale, AlertTriangle, FileText, Briefcase, Users } from 'lucide-react'

const legalServices = [
  {
    icon: Scale,
    title: 'Νομική Συμβουλευτική',
    items: [
      'Συμβουλές για συμμόρφωση με τη νομοθεσία παραγωγής, διακίνησης και διάθεσης κρέατος και τροφίμων',
      'Καθοδήγηση για προετοιμασία σε επιθεωρήσεις από αρχές ή φορείς πιστοποίησης'
    ]
  },
  {
    icon: FileText,
    title: 'Δικαιώματα και Συμβάσεις',
    items: [
      'Σύνταξη και έλεγχος συμβάσεων με προμηθευτές, πελάτες και συνεργάτες',
      'Διασφάλιση πνευματικών δικαιωμάτων για πρωτοποριακές διαδικασίες ή προϊόντα'
    ]
  },
  {
    icon: Users,
    title: 'Εκπαίδευση και Ενημέρωση',
    items: [
      'Σεμινάρια για τις τελευταίες νομοθετικές εξελίξεις στον κλάδο',
      'Εκπαίδευση προσωπικού σε θέματα νομικής συμμόρφωσης'
    ]
  }
]

export default function LegalCoveragePage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Νομική Κάλυψη</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Παρέχουμε ολοκληρωμένη νομική υποστήριξη για την αντιμετώπιση ζητημάτων που προκύπτουν από τη λειτουργία επιχειρήσεων στον κλάδο της εστίασης και της βιομηχανίας κρέατος.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {legalServices.map((service, index) => (
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
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Οφέλη Νομικής Κάλυψης</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Προστασία από νομικούς κινδύνους και πιθανές κυρώσεις</li>
          <li>Εξασφάλιση συμμόρφωσης με την ισχύουσα νομοθεσία</li>
          <li>Ενίσχυση της αξιοπιστίας της επιχείρησης</li>
          <li>Αποτελεσματική διαχείριση νομικών ζητημάτων και κρίσεων</li>
          <li>Στρατηγικό πλεονέκτημα στην αγορά</li>
        </ul>
      </motion.div>
    </div>
  )
}

