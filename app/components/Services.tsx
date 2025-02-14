'use client'

import { motion } from 'framer-motion'
import { BeefIcon as Meat, FlaskRoundIcon as Flask, Scale, FileText, Award } from 'lucide-react'

const services = [
  {
    icon: Meat,
    title: 'Βιομηχανία Κρέατος',
    description: 'Εξειδικευμένη τεχνολογία και τεχνογνωσία για την ανάπτυξη προϊόντων και την υποστήριξη της παραγωγής.'
  },
  {
    icon: Flask,
    title: 'Τεχνολογία Τροφίμων',
    description: 'Καινοτόμες λύσεις για αυξημένη διάρκεια ζωής προϊόντων και ανάπτυξη ειδικών προϊόντων.'
  },
  {
    icon: Scale,
    title: 'Νομική Συμβουλευτική',
    description: 'Συμβουλευτική υποστήριξη σε περίπτωση ελέγχων ή επιβολής προστίμων.'
  },
  {
    icon: FileText,
    title: 'Υπηρεσίες διαδικασιών σύμφωνα με διεθνή πρότυπα',
    description: 'Βοήθεια για την απόκτηση πιστοποιήσεων ΠΟΠ και συμμόρφωση με πρότυπα όπως IFS BRC, ISO και HACCP.'
  },
  {
    icon: Award,
    title: 'Εξειδικευμένες Λύσεις',
    description: 'Δημιουργία μοναδικών συνταγών και προϊόντων προσαρμοσμένων στις ανάγκες κάθε πελάτη.'
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Οι Υπηρεσίες μας
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <service.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

