'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { motion } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface BlogArticle {
  id: number
  titlos: string
  perigrafi: string
  keimeno: string
  fotografies: string
}

export default function BlogArticlePage() {
  const [article, setArticle] = useState<BlogArticle | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const params = useParams()
  const id = typeof params.slug === 'string' ? parseInt(params.slug) : null

  useEffect(() => {
    async function fetchArticle() {
      if (!id) {
        setLoading(false)
        return
      }

      try {
        const { data, error } = await supabase
          .from('blog_articles')
          .select('*')
          .eq('id', id)
          .single()

        if (error) {
          console.error('Error fetching article:', error)
          return
        }

        setArticle(data)
      } catch (err) {
        console.error('Error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [id])

  const handleBack = () => {
    router.push('/blog')
  }

  if (loading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="relative">
          <div className="w-16 h-16 border-t-2 border-b-2 border-blue-400/40 rounded-full animate-[spin_2s_linear_infinite]"></div>
          <div className="w-16 h-16 border-t-2 border-b-2 border-blue-600/40 rounded-full animate-[spin_2s_linear_infinite] absolute top-0 left-0" style={{ animationDelay: '-1s' }}></div>
        </div>
      </motion.div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 max-w-2xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-blue-400 mb-6">Άρθρο δεν βρέθηκε</h1>
            <p className="text-gray-300 text-lg mb-8">Το άρθρο που ψάχνετε δεν υπάρχει ή έχει αφαιρεθεί.</p>
            <button
              onClick={handleBack}
              className="inline-flex items-center px-8 py-4 border border-blue-400/80 text-blue-400 text-lg font-medium rounded-full hover:bg-blue-400/10 transition-all duration-500 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 transform transition-transform duration-500 group-hover:-translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Επιστροφή στο Blog
            </button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-24"
    >
      <article className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <button
              onClick={handleBack}
              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-lg group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 transform transition-transform duration-500 group-hover:-translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Πίσω στο Blog
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-xl bg-gray-800/80 backdrop-blur-sm"
          >
            <div className="relative h-[60vh] overflow-hidden">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"
              />
              <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src={article.fotografies || '/placeholder-blog.jpg'}
                alt={article.titlos}
                className="w-full h-full object-cover"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="absolute bottom-0 left-0 right-0 p-12 z-20"
              >
                <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                  {article.titlos}
                </h1>
                <p className="text-2xl text-gray-200 max-w-3xl">
                  {article.perigrafi}
                </p>
              </motion.div>
            </div>

            <div className="p-12">
              <motion.div 
                className="prose prose-lg prose-invert max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              >
                <div 
                  className="text-gray-300 space-y-6 text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: article.keimeno }}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="mt-12 text-center"
          >
            <button
              onClick={handleBack}
              className="inline-flex items-center px-8 py-4 bg-blue-600/90 text-white text-lg font-medium rounded-full hover:bg-blue-500 transition-all duration-500 shadow-lg hover:shadow-blue-500/25 group"
            >
              <span>Περισσότερα άρθρα</span>
              <svg 
                className="ml-2 h-5 w-5 transform transition-transform duration-500 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </motion.div>
        </div>
      </article>
    </motion.div>
  )
}
