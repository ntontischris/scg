'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from "lucide-react"
import { createClient } from '@supabase/supabase-js'
import { toast } from 'react-hot-toast'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simple test query first
      const { error: testError } = await supabase
        .from('messages')
        .select('id')
        .limit(1)

      if (testError) {
        console.error('Test query failed:', testError)
        throw new Error('Database connection failed')
      }

      // If test succeeds, try to insert
      const { error: insertError } = await supabase
        .from('messages')
        .insert([{
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }])

      if (insertError) {
        console.error('Insert failed:', insertError)
        throw insertError
      }

      toast.success('Το μήνυμά σας στάλθηκε με επιτυχία!')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error: unknown) {
      console.error('Error:', error)
      toast.error('Υπήρξε ένα πρόβλημα κατά την αποστολή του μηνύματος.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Επικοινωνήστε μαζί μας</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Είμαστε εδώ για να απαντήσουμε σε όλες τις ερωτήσεις σας και να σας προσφέρουμε την καλύτερη δυνατή
            υποστήριξη.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Στοιχεία Επικοινωνίας</h3>
            <ul className="space-y-6">
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors duration-500">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-500">+30 23920 39209</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors duration-500">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-500">scg@otenet.gr</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors duration-500">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-500">Περαία Θεσσαλονίκης</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Φόρμα Επικοινωνίας</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">
                  Ονοματεπώνυμο
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm font-medium">
                  Θέμα
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">
                  Μήνυμα
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                    <span>Αποστολή...</span>
                  </>
                ) : (
                  <span>Αποστολή</span>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
