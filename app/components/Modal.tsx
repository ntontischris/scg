import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-gray-900 rounded-lg overflow-hidden max-w-[90vw] max-h-[90vh]"
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={24} />
          </button>
          <div className="overflow-auto max-h-[90vh]">
            <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="w-full h-auto object-contain" />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Modal

