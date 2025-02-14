"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { motion } from "framer-motion"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7525d713-807e-424c-9af8-4cdb18c5103c.jpg-3CyUhXic4CJ7F3Ip05RBzJ4Ic30jTJ.jpeg",
    alt: "Dry Age Article Title Page",
    title: "Dry Age: Παράμετροι επεξεργασίας και οργανοληπτικά χαρακτηριστικά στο βόειο κρέας",
    description: "Επιστημονικό άρθρο για τη διαδικασία ξηρής ωρίμανσης του βοδινού κρέατος",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/83804a5e-ece5-4045-9251-fb0b143516db.jpg-7gOBwfhntJyuNNVs3aJ9hXFFuuYj67.jpeg",
    alt: "Dry Age Article Technical Details",
    title: "Τεχνικές Προδιαγραφές Ξηρής Ωρίμανσης",
    description: "Λεπτομερείς τεχνικές προδιαγραφές και παράμετροι για τη διαδικασία ξηρής ωρίμανσης",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f1871cc8-6185-47f0-b88a-dcfa775317ad.jpg-Qr5WjayyonCnJ5AQD7wUJpFTsLZlPS.jpeg",
    alt: "Dry Age Article Conditions",
    title: "Συνθήκες Ξηρής Ωρίμανσης",
    description: "Απαραίτητες συνθήκες και προϋποθέσεις για την επιτυχή ξηρή ωρίμανση",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/de7a5178-2b5f-4ce2-b256-36140c4a2ec4.jpg-Qa9tmr9P22l6MRvIkC7TwpPCQQdZdX.jpeg",
    alt: "Dry Age Process Parameters",
    title: "Παράμετροι Διαδικασίας",
    description: "Αναλυτικές πληροφορίες για τις συνθήκες και παραμέτρους της ξηρής ωρίμανσης",
  },
]

export default function MediaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-800 py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-400 mb-4">Media</h1>
          <p className="text-xl text-gray-300">
            Επιστημονικά άρθρα και δημοσιεύσεις
          </p>
        </motion.div>

        <Card className="bg-gray-700 border-gray-600">
          <CardContent className="p-8">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-semibold mb-6 text-blue-400"
            >
              Dry Age: Παράμετροι επεξεργασίας και οργανοληπτικά χαρακτηριστικά στο βόειο κρέας
            </motion.h2>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 text-gray-300"
            >
              Σκοπός αυτού του άρθρου είναι η παρουσίαση των παραμέτρων της επεξεργασίας της ξηρής ωρίμανσης και
              των οργανοληπτικών χαρακτηριστικών που αναπτύσσονται στο βόειο κρέας κατά τη διάρκεια της
              επεξεργασίας.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative aspect-[4/3] mb-4 cursor-zoom-in">
                    <Zoom>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="rounded-lg w-full h-full object-cover"
                      />
                    </Zoom>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-400">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
