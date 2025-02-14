"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products10-Ykg6dmFjHopcLi6tqeouYuFT9IWZKp.webp",
    alt: "Φρέσκο κρέας με ελαιόλαδο",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products04-kH3PkrEew3KhtbNWmbAcLTveU1RDLa.webp",
    alt: "Φρέσκος κιμάς με μυρωδικά",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products13-vKcX2FRstco3n43sOQU16m68ULyic3.webp",
    alt: "Μπιφτέκια με πιπεριές",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products11-OUg9DscnK2Pi56iyXhQqwrQdk3AXoq.webp",
    alt: "Ποικιλία κρεάτων",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products17-rt4PHsYNLkiQN4YIdOalb7l2TOUrjU.webp",
    alt: "Λουκάνικα και αλλαντικά",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products14-eZMJEICecFt24YpqqrC0vq5PyaHlNh.webp",
    alt: "Παραδοσιακά προϊόντα κρέατος",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products15-zesTHV4df2xK3GYvhfwJoQtt4si4Zj.webp",
    alt: "Αλλαντικά και προσούτο",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20products12-Y7Oh2dACK8St4Eno6Izw5PDCWdyudD.webp",
    alt: "Φρέσκα μπιφτέκια",
  },
]

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  const zoomVariants = {
    zoomIn: {
      scale: [1, 1.1],
      transition: {
        duration: 10,
        ease: "easeInOut",
      },
    },
    zoomOut: {
      scale: [1.1, 1],
      transition: {
        duration: 10,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <motion.div
            variants={zoomVariants}
            animate={currentImage % 2 === 0 ? "zoomIn" : "zoomOut"}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage].src || "/placeholder.svg"}
              alt={images[currentImage].alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          className="w-40 h-40 mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, rotateY: 360 }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            y: { duration: 0.8, delay: 0.2 },
            rotateY: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scg%20logo-Rn7rVuNeVUAT7V3zoWTU59CkIWB8vg.png"
            alt="SCG Logo"
            width={160}
            height={160}
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl"
        >
          Καινοτομία στη Βιομηχανία Κρέατος
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-gray-300 mb-12 max-w-3xl"
        >
          Με 30ετή εμπειρία στον κλάδο, προσφέρουμε εξειδικευμένες υπηρεσίες και τεχνογνωσία αιχμής στην βιομηχανία και βιοτεχνία κρέατος καθώς και στον κλάδο εστίασης.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#services"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Ανακαλύψτε τις Υπηρεσίες μας
          </a>
        </motion.div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-blue-500 w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero

