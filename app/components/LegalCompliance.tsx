'use client'

import { motion } from 'framer-motion'
import { Shield, Scale, FileCheck, AlertTriangle } from 'lucide-react'

const complianceAreas = [
  {
    icon: Shield,
    title: 'Υγιεινή και Ασφάλεια Τροφίμων',
    items: [
      'Έλεγχος εφαρμογής συστημάτων HACCP (Hazard Analysis and Critical Control Points) και ISO 22000',
      'Επιθεώρηση χώρων παραγωγής, αποθήκευσης, και διάθεσης κρέατος για ανίχνευση πιθανών κινδύνων',
      'Έλεγχος της σωστής τήρησης των διαδικασιών καθαρισμού και απολύμανσης'
    ]
  },
  {
    icon: Scale,
    title: 'Νομοθετική Συμμόρφωση',
    items: [
      'Επαλήθευση της συμμόρφωσης με τις απαιτήσεις της εθνικής και ευρωπαϊκής νομοθεσίας',
      'Επιθεωρήσεις από κρατικούς φορείς (π.χ., ΕΦΕΤ, Υγειονομική Υπηρεσία)',
      'Υποστήριξη σε ιδιωτικούς οργανισμούς πιστοποίησης'
    ]
  },
  {
    icon: FileCheck,
    title: 'Ετικετοποίηση και Ιχνηλασιμότητα',
    items: [
      'Έλεγχος της ορθότητας των πληροφοριών στις ετικέτες των προϊόντων',
      'Εξασφάλιση πλήρους ιχνηλασιμότητας από τον παραγωγό στον καταναλωτή'
    ]
  },
  {
    icon: AlertTriangle,
    title: 'Διαχείριση Κρίσεων',
    items: [
      'Υποστήριξη σε περιπτώσεις ελέγχων ή επιβολής προστίμων από αρμόδιες αρχές',
      'Νομική εκπροσώπηση σε περιπτώσεις καταγγελιών',
      'Καθοδήγηση για την προετοιμασία σε επιθεωρήσεις'
    ]
  }
]

const LegalCompliance = () => {
  return (
    <section id="legal-compliance" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Νομική Συμμόρφωση & Ασφάλεια
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {complianceAreas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <area.icon className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">{area.title}</h3>
              </div>
              <ul className="space-y-3">
                {area.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LegalCompliance

