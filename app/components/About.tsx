"use client"

import { motion } from "framer-motion"
import { Shield, Users, TrendingUp, Briefcase } from "lucide-react"

const aboutPoints = [
  {
    icon: Shield,
    title: "Εμπειρία",
    description: "Με 30ετή εμπειρία στον κλάδο, προσφέρουμε εξειδικευμένες υπηρεσίες και τεχνογνωσία αιχμής στην βιομηχανία και βιοτεχνία κρέατος καθώς και στον κλάδο εστίασης.",
  },
  {
    icon: Users,
    title: "Εξειδικευμένη Ομάδα",
    description:
      "Η ομάδα μας αποτελείται από Κτηνίατρους, Τεχνολόγους Τροφίμων, Χημικούς Μηχανικούς, Πολιτικούς Μηχανικούς, Αρχιτέκτονες, Οικονομολόγους, Μαρκετίστες, Γραφίστες και Διαφημιστές.",
  },
  {
    icon: TrendingUp,
    title: "Καινοτομία",
    description:
      "Προσφέρουμε υψηλή ποιότητα υπηρεσιών και τεχνογνωσία για την επιχειρηματική επιτυχία των πελατών μας.",
  },
  {
    icon: Briefcase,
    title: "Ολοκληρωμένες Λύσεις",
    description:
      "Δραστηριοποιούμαστε σε όλο το φάσμα της βιομηχανίας τροφίμων, προσφέροντας καθετοποιημένες υπηρεσίες.",
  },
]

export default function About() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Σχετικά με την SCG
        </motion.h2>
        <motion.p
          className="text-gray-300 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Η SCG είναι μία καθετοποιημένη εταιρία που δραστηριοποιείται σε όλο το φάσμα της βιομηχανίας τροφίμων. Στόχος
          μας είναι να παρέχουμε υψηλή ποιότητα υπηρεσιών που ικανοποιούν πλήρως τους πελάτες μας και τους οδηγούν στην
          επιχειρηματική επιτυχία.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {aboutPoints.map((point, index) => (
            <motion.div
              key={point.title}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <point.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{point.title}</h3>
              <p className="text-gray-300">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

