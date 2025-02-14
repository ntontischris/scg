"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const certificationServices = [
  {
    title: "Πιστοποίηση ISO 9001:2015",
    description: "Ολοκληρωμένες υπηρεσίες για την απόκτηση και διατήρηση του ISO 9001:2015.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/certification-iso-9001-thumbnail-dsObcmNElqBJJ5YmwXATOwjtjmb4O8.png",
    link: "/certifications/iso-9001",
    services: [
      "Προετοιμασία και εφαρμογή συστήματος διαχείρισης ποιότητας",
      "Εκπαίδευση προσωπικού στις απαιτήσεις του προτύπου",
      "Διενέργεια εσωτερικών επιθεωρήσε��ν",
      "Υποστήριξη κατά την επιθεώρηση πιστοποίησης",
    ],
  },
  {
    title: "Εφαρμογή HACCP",
    description: "Υπηρεσίες εγκατάστασης και πιστοποίησης συστήματος HACCP.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/haccp-MIFe3jjT7Xhh3QlGvkm8Oxyy74uWy4.webp",
    link: "/certifications/haccp",
    services: [
      "Ανάλυση κινδύνων και κρίσιμων σημείων ελέγχου",
      "Σχεδιασμός και εφαρμογή συστήματος HACCP",
      "Εκπαίδευση προσωπικού στις αρχές HACCP",
      "Συνεχής παρακολούθηση και αναβάθμιση του συστήματος",
    ],
  },
  {
    title: "Πιστοποίηση BRC Food",
    description: "Υποστήριξη για την απόκτηση του διεθνούς προτύπου BRC Food.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRC-IFS-and-FSSC-22000-scaled-JsdYzCqPagZk9TkfiMGqNcfKHGGNkY.webp",
    link: "/certifications/brc",
    services: [
      "Αξιολόγηση τρέχουσας κατάστασης",
      "Ανάπτυξη απαιτούμενων διαδικασιών",
      "Προετοιμασία για επιθεώρηση πιστοποίησης",
      "Διαχείριση μη συμμορφώσεων",
    ],
  },
  {
    title: "Πιστοποίηση IFS Food",
    description: "Ολοκληρωμένες υπηρεσίες για την πιστοποίηση IFS Food.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRC-IFS-and-FSSC-22000-scaled-JsdYzCqPagZk9TkfiMGqNcfKHGGNkY.webp",
    link: "/certifications/ifs",
    services: [
      "Gap analysis και προετοιμασία",
      "Ανάπτυξη τεκμηρίωσης",
      "Εκπαίδευση προσωπικού",
      "Υποστήριξη κατά την επιθεώρηση",
    ],
  },
  {
    title: "Πιστοποίηση ISO 22000",
    description: "Υπηρεσίες για την εφαρμογή και πιστοποίηση του ISO 22000.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iso-22000-OKurd3na1hNFp4fsv2YTTDspJrtNoO.webp",
    link: "/certifications/iso-22000",
    services: [
      "Σχεδιασμός συστήματος διαχείρισης ασφάλειας τροφίμων",
      "Εφαρμογή προαπαιτούμενων προγραμμάτων",
      "Εκπαίδευση και καθοδήγηση προσωπικού",
      "Προετοιμασία για επιθεώρηση πιστοποίησης",
    ],
  },
]

export default function CertificationServicesPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Υπηρεσίες Διεργασιών Προτύπων.</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Η SCG παρέχει ολοκληρωμένες υπηρεσίες για την απόκτηση και διατήρηση πιστοποιήσεων που είναι απαραίτητες για
          τη βιομηχανία τροφίμων, εξασφαλίζοντας την ποιότητα και την ασφάλεια των προϊόντων σας.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificationServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg overflow-hidden"
          >
            <Link href={service.link}>
              <div className="p-6">
                <div className="relative w-full h-48 mb-6">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} Υπηρεσία Πιστοποίησης`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-2">
                  {service.services.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="mt-4 text-blue-400 hover:text-blue-300 transition-colors">Μάθετε περισσότερα →</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Η Διαδικασία Πιστοποίησης</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Στάδια Πιστοποίησης</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Αρχική αξιολόγηση και ανάλυση αναγκών</li>
              <li>Σχεδιασμός και ανάπτυξη συστήματος</li>
              <li>Εκπαίδευση προσωπικού</li>
              <li>Εφαρμογή και παρακολούθηση</li>
              <li>Εσωτερικές επιθεωρήσεις</li>
              <li>Επιθεώρηση πιστοποίησης</li>
              <li>Συνεχής υποστήριξη και βελτίωση</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Οι Υπηρεσίες μας</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Συμβουλευτική για επιλογή κατάλληλων πιστοποιήσεων</li>
              <li>Προετοιμασία απαραίτητης τεκμηρίωσης</li>
              <li>Εκπαίδευση και καθοδήγηση προσωπικού</li>
              <li>Διενέργεια εσωτερικών επιθεωρήσεων</li>
              <li>Υποστήριξη κατά τις επιθεωρήσεις πιστοποίησης</li>
              <li>Διαχείριση μη συμμορφώσεων</li>
              <li>Συνεχής παρακολούθηση και αναβάθμιση</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Γιατί να Επιλέξετε την SCG</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>25+ χρόνια εμπειρίας στον κλάδο των πιστοποιήσεων τροφίμων</li>
          <li>Εξειδικευμένη ομάδα συμβούλων και τεχνικών εμπειρογνωμόνων</li>
          <li>Προσαρμοσμένες λύσεις για κάθε επιχείρηση</li>
          <li>Συνεχής υποστήριξη πριν και μετά την πιστοποίηση</li>
          <li>Άριστη γνώση των απαιτήσεων της αγοράς και των προτύπων</li>
          <li>Υψηλά ποσοστά επιτυχίας στις πιστοποιήσεις</li>
        </ul>
      </motion.div>
    </div>
  )
}

