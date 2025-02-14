'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, FileText, ShieldCheck, Scale } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: TrendingUp,
    title: 'Προγράμματα Επιδότησης',
    description: 'Υποστήριξη σε προγράμματα χρηματοδότησης και αναπτυξιακά προγράμματα.',
    link: '/services/funding-programs'
  },
  {
    icon: Users,
    title: 'Εκπαίδευση Προσωπικού',
    description: 'Εκπαίδευση προσωπικού βιομηχανίας τροφίμων σύμφωνα με τα επίσημα πρότυπα.',
    link: '/services/staff-training'
  },
  {
    icon: ShieldCheck,
    title: 'Επιθεώρηση',
    description: 'Επιθεώρηση εγκαταστάσεων και διαδικασιών βιομηχανίας τροφίμων.',
    link: '/services/inspections'
  },
  {
    icon: Scale,
    title: 'Νομική Κάλυψη',
    description: 'Παροχή νομικής κάλυψης και υποστήριξης για επιχειρήσεις τροφίμων.',
    link: '/services/legal-coverage'
  },
  {
    icon: FileText,
    title: 'Πιστοποιήσεις',
    description: 'Υποστήριξη στην απόκτηση και διατήρηση πιστοποιήσεων ISO και άλλων προτύπων.',
    link: '/services/certifications'
  }
]

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Οι Υπηρεσίες μας</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Η SCG προσφέρει ένα ευρύ φάσμα εξειδικευμένων υπηρεσιών για τη βιομηχανία τροφίμων, εστιάζοντας στην καινοτομία, την ποιότητα και τη συμμόρφωση με τα διεθνή πρότυπα.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <Link href={service.link} className="block">
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <span className="text-blue-400 hover:underline">Μάθετε περισσότερα →</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

