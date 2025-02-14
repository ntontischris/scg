"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Image from 'next/image'

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
          <h1 className="text-4xl font-bold text-white mb-4">Μέσα</h1>
          <p className="text-gray-300">Επιστημονικά άρθρα και δημοσιεύσεις</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700">
              <CardContent className="p-4">
                <Zoom>
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </Zoom>
                <h3 className="text-xl font-semibold text-white mt-4">{image.title}</h3>
                <p className="text-gray-400 mt-2">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
