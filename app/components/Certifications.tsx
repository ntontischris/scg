'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const certifications = [
  { name: 'ISO 22000', description: 'Σύστημα διαχείρισης ασφάλειας τροφίμων' },
  { name: 'HACCP', description: 'Ανάλυση Κινδύνων και Κρίσιμα Σημεία Ελέγχου' },
  { name: 'BRC', description: 'Παγκόσμιο πρότυπο για την ασφάλεια τροφίμων' },
  { name: 'IFS Food', description: 'Διεθνές Πρότυπο Τροφίμων' },
  { name: 'ISO 9001', description: 'Σύστημα διαχείρισης ποιότητας' }
]

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Εφαρμογές προτύπων
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg flex items-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Award className="w-8 h-8 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-300">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

