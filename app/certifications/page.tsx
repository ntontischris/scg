"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const certifications = [
  {
    title: "ISO 9001:2015",
    description:
      "Διεθνές πρότυπο για τη διαχείριση ποιότητας που καθορίζει τις απαιτήσεις για ένα ολοκληρωμένο σύστημα διαχείρισης.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/certification-iso-9001-thumbnail-dsObcmNElqBJJ5YmwXATOwjtjmb4O8.png",
    link: "/certifications/iso-9001",
    details: "Εστιάζει στη συνεχή βελτίωση, την ικανοποίηση των πελατών και την αποτελεσματική διαχείριση διαδικασιών.",
  },
  {
    title: "HACCP",
    description: "Σύστημα διαχείρισης της ασφάλειας τροφίμων που εντοπίζει, αξιολογεί και ελέγχει τους κινδύνους.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/haccp-MIFe3jjT7Xhh3QlGvkm8Oxyy74uWy4.webp",
    link: "/certifications/haccp",
    details: "Προληπτικό σύστημα ελέγχου που διασφαλίζει την ασφάλεια των τροφίμων σε όλα τα στάδια της παραγωγής.",
  },
  {
    title: "BRC Food",
    description: "Παγκόσμιο πρότυπο για την ασφάλεια τροφίμων του British Retail Consortium.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRC-IFS-and-FSSC-22000-scaled-JsdYzCqPagZk9TkfiMGqNcfKHGGNkY.webp",
    link: "/certifications/brc",
    details: "Καθορίζει τις απαιτήσεις για την παραγωγή, συσκευασία, αποθήκευση και διανομή ασφαλών τροφίμων.",
  },
  {
    title: "IFS Food",
    description: "Διεθνές πρότυπο για τον έλεγχο των προμηθευτών τροφίμων.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRC-IFS-and-FSSC-22000-scaled-JsdYzCqPagZk9TkfiMGqNcfKHGGNkY.webp",
    link: "/certifications/ifs",
    details: "Εξασφαλίζει την ασφάλεια και ποιότητα των τροφίμων σε όλη την αλυσίδα εφοδιασμού.",
  },
  {
    title: "ISO 22000",
    description: "Διεθνές πρότυπο για τη διαχείριση της ασφάλειας τροφίμων.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iso-22000-OKurd3na1hNFp4fsv2YTTDspJrtNoO.webp",
    link: "/certifications/iso-22000",
    details: "Συνδυάζει τις αρχές HACCP με προαπαιτούμενα προγράμματα και συστήματα διαχείρισης.",
  },
]

export default function CertificationsPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Πιστοποιήσεις</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Η SCG διαθέτει όλες τις απαραίτητες πιστοποιήσεις που εξασφαλίζουν την ποιότητα των υπηρεσιών μας και την
          ασφάλεια των προϊόντων των πελατών μας.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="relative w-full h-48 mb-6">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={`${cert.title} Πιστοποίηση`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{cert.title}</h3>
              <p className="text-gray-300 mb-4">{cert.description}</p>
              <p className="text-sm text-gray-400">{cert.details}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Οφέλη Πιστοποιήσεων</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Διασφάλιση της ποιότητας και ασφάλειας των προϊόντων</li>
          <li>Συμμόρφωση με διεθνή πρότυπα και κανονισμούς</li>
          <li>Βελτίωση της αξιοπιστίας και της φήμης της επιχείρησης</li>
          <li>Αύξηση της ανταγωνιστικότητας στην αγορά</li>
          <li>Πρόσβαση σε νέες αγορές και πελάτες</li>
          <li>Βελτιστοποίηση των εσωτερικών διαδικασιών</li>
        </ul>
      </motion.div>
    </div>
  )
}

