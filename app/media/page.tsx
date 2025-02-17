"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Επιστημονικά άρθρα και δημοσιεύσεις</h1>
         
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-xl" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="bg-gray-900/50 backdrop-blur border border-gray-700/50 shadow-xl overflow-hidden">
                      <CardContent className="p-6">
                        <Zoom zoomMargin={40}>
                          <div className="relative w-full h-[700px] rounded-lg overflow-hidden">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-contain"
                              sizes="(max-width: 1280px) 100vw, 1280px"
                              priority={index === 0}
                            />
                          </div>
                        </Zoom>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="mt-6 text-center"
                        >
                          <h3 className="text-2xl font-semibold text-white mb-3">{image.title}</h3>
                          <p className="text-gray-300 text-lg">{image.description}</p>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-6 rounded-full backdrop-blur-sm transition-all duration-200 shadow-lg"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-6 rounded-full backdrop-blur-sm transition-all duration-200 shadow-lg"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  )
}
