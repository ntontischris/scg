"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const supabase = createClient(
  'https://ykbizocsepzsvrejgzpq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrYml6b2NzZXB6c3ZyZWpnenBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0ODgwOTIsImV4cCI6MjA1NTA2NDA5Mn0.JklM8cC7fGBFC0ZTNrGlp2mVlUiNDLBBtG0fpXdRJH8'
)

export default function ContactPage() {
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

  const handleSubmit = async (e: React.FormEvent) => {
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
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Επικοινωνήστε μαζί μας</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Είμαστε εδώ για να απαντήσουμε σε όλες τις ερωτήσεις σας και να σας προσφέρουμε την καλύτερη δυνατή
          υποστήριξη.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-400">Στοιχεία Επικοινωνίας</h2>
          <ul className="space-y-6">
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center group"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors duration-500">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-500">+30 23920 39209</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center group"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors duration-500">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-500">scg@otenet.gr</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
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
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-400">Φόρμα Επικοινωνίας</h2>
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
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600/90 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 group"
            >
              <span className="flex items-center justify-center">
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Αποστολή...
                  </>
                ) : (
                  <>
                    Αποστολή
                    <svg 
                      className="ml-2 h-5 w-5 transform transition-transform duration-500 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  )
}
