'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const innovationSteps = [
  { title: 'Έρευνα', description: 'Συνεχής έρευνα για νέες τεχνολογίες και μεθόδους στη βιομηχανία κρέατος.' },
  { title: 'Ανάπτυξη', description: 'Ανάπτυξη καινοτόμων λύσεων και μοναδικών συνταγών για προϊόντα κρέατος.' },
  { title: 'Δοκιμή', description: 'Εκτενείς εργαστηριακές μελέτες και δοκιμές για την εξασφάλιση της ποιότητας και αποτελεσματικότητας.' },
  { title: 'Εφαρμογή', description: 'Εφαρμογή των καινοτομιών στην παραγωγική διαδικασία με έμφαση στην ασφάλεια και ποιότητα.' },
  { title: 'Βελτιστοποίηση', description: 'Συνεχής βελτιστοποίηση βάσει των αποτελεσμάτων και των αναγκών της αγοράς.' }
]

const Innovation = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="innovation" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Η Διαδικασία Καινοτομίας μας
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{innovationSteps[activeStep].title}</h3>
              <p className="text-gray-300">{innovationSteps[activeStep].description}</p>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col space-y-4">
              {innovationSteps.map((step, index) => (
                <motion.button
                  key={index}
                  className={`p-4 rounded-lg transition-colors ${
                    index === activeStep ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {step.title}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Innovation

