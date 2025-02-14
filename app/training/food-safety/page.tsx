"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Thermometer, BugIcon as Bacteria, Utensils, ClipboardList } from "lucide-react"
import Image from "next/image"

const trainingModules = [
  {
    icon: Bacteria,
    title: "Μικροβιολογία Τροφίμων",
    description: "Κατανόηση των μικροοργανισμών που σχετίζονται με τα τρόφιμα και των επιπτώσεών τους στην ασφάλεια.",
  },
  {
    icon: Thermometer,
    title: "Έλεγχος Θερμοκρασίας",
    description: "Σημασία της σωστής θερμοκρασίας στην αποθήκευση, επεξεργασία και μεταφορά τροφίμων.",
  },
  {
    icon: Utensils,
    title: "Υγιεινή Πρακτικές",
    description: "Προσωπική υγιεινή, καθαρισμός και απολύμανση εξοπλισμού και εγκαταστάσεων.",
  },
  {
    icon: ClipboardList,
    title: "Νομοθεσία Τροφίμων",
    description: "Επισκόπηση των βασικών νομοθετικών απαιτήσεων για την ασφάλεια τροφίμων.",
  },
  {
    icon: ShieldCheck,
    title: "Συστήματα Διαχείρισης Ασφάλειας Τροφίμων",
    description: "Εισαγωγή σε συστήματα όπως το HACCP και το ISO 22000.",
  },
  {
    icon: ClipboardList,
    title: "Πρακτική Εφαρμογή",
    description: "Εφαρμογή των θεωρητικών γνώσεων σε πραγματικές συνθήκες εργασίας.",
  },
]

export default function FoodSafetyTrainingPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Εκπαίδευση Ασφάλειας Τροφίμων</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Το πρόγραμμα εκπαίδευσης Ασφάλειας Τροφίμων της SCG παρέχει ολοκληρωμένη κατάρτιση στις βασικές αρχές και
          πρακτικές για τη διασφάλιση της ασφάλειας των τροφίμων σε όλα τα στάδια της αλυσίδας παραγωγής και διανομής.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-video w-full max-w-4xl mx-auto mb-12 rounded-lg overflow-hidden"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.%20%CE%A3%CE%A4%CE%91%CE%98%CE%9C%CE%9F%CE%A3%20%CE%9C%CE%95%20%CE%95%CE%A1%CE%93%CE%91%CE%96%CE%9F%CE%9C%CE%95%CE%9D%CE%9F-CJclV5fh0WSFVMXMrs7FdTP56DqO5b.webp"
            alt="Εργαζόμενος σε εγκατάσταση επεξεργασίας τροφίμων εφαρμόζει πρωτόκολλα ασφάλειας"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
          />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainingModules.map((module, index) => (
          <motion.div
            key={module.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <module.icon className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold">{module.title}</h3>
            </div>
            <p className="text-gray-300 mb-4">{module.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Μεθοδολογία Εκπαίδευσης</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-300">
          <li>
            <span className="font-semibold">Θεωρητική Κατάρτιση:</span> Διαλέξεις και παρουσιάσεις από ειδικούς στην
            ασφάλεια τροφίμων.
          </li>
          <li>
            <span className="font-semibold">Πρακτική Εξάσκηση:</span> Εργαστηριακές ασκήσεις και προσομοιώσεις
            πραγματικών σεναρίων.
          </li>
          <li>
            <span className="font-semibold">Μελέτες Περιπτώσεων:</span> Ανάλυση πραγματικών περιστατικών και λύσεων στην
            ασφάλεια τροφίμων.
          </li>
          <li>
            <span className="font-semibold">Διαδραστικά Εργαλεία:</span> Χρήση ψηφιακών πλατφορμών και εφαρμογών για
            ενισχυμένη μάθηση.
          </li>
          <li>
            <span className="font-semibold">Αξιολόγηση και Πιστοποίηση:</span> Τακτικές αξιολογήσεις και τελική εξέταση
            για πιστοποίηση γνώσεων.
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Οφέλη Εκπαίδευσης Ασφάλειας Τροφίμων</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Βελτίωση της ποιότητας και ασφάλειας των παραγόμενων τροφίμων</li>
          <li>Μείωση του κινδύνου τροφικών δηλητηριάσεων και ανακλήσεων προϊόντων</li>
          <li>Συμμόρφωση με τις νομοθετικές απαιτήσεις και τα διεθνή πρότυπα</li>
          <li>Ενίσχυση της εμπιστοσύνης των καταναλωτών στα προϊόντα της επιχείρησης</li>
          <li>Βελτίωση της φήμης και της ανταγωνιστικότητας στην αγορά</li>
          <li>Μείωση του κόστους λόγω καλύτερης διαχείρισης και λιγότερων απωλειών</li>
        </ul>
      </motion.div>
    </div>
  )
}

