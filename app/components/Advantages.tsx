'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Users } from 'lucide-react'

const advantages = [
  {
    icon: Shield,
    title: 'Ασφάλεια και Ποιότητα',
    description: 'Χρήση σύγχρονων τεχνολογιών για τη διασφάλιση της ποιότητας σε όλα τα στάδια της παραγωγής. Αυστηρή τήρηση υγειονομικών κανονισμών και διαδικασιών πιστοποίησης.'
  },
  {
    icon: Zap,
    title: 'Εξατομικευμένες Λύσεις',
    description: 'Προσαρμογή στις απαιτήσεις κάθε πελάτη για μοναδικά και διαφοροποιημένα προϊόντα. Ευελιξία στην παραγωγή και σχεδιασμός με βάση τις ανάγκες της αγοράς.'
  },
  {
    icon: Users,
    title: 'Εμπειρία και Καινοτομία',
    description: 'Συνδυασμός μακρόχρονης εμπειρίας με συνεχή έρευνα και ανάπτυξη για την παροχή καινοτόμων λύσεων στη βιομηχανία κρέατος.'
  }
]

const Advantages = () => {
  return (
    <section id="advantages" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Πλεονεκτήματα Συνεργασίας
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <advantage.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-gray-300">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages

