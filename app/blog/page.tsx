'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export default function BlogPage() {
  const [articles, setArticles] = useState<BlogArticle[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function fetchArticles() {
      try {
        const { data, error } = await supabase
          .from('blog_articles')
          .select('*')
          .order('id', { ascending: false })

        if (error) {
          console.error('Error fetching articles:', error)
          return
        }

        setArticles(data || [])
      } catch (err) {
        console.error('Error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  const handleReadMore = (articleId: number) => {
    router.push(`/blog/${articleId}`)
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-24"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-6">
            Blog
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
            Ανακαλύψτε τα τελευταία άρθρα και νέα από την SCG
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article) => (
            <motion.div
              key={article.id}
              variants={item}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform transition-all duration-500 hover:shadow-blue-400/10 cursor-pointer"
              onClick={() => handleReadMore(article.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img
                  src={article.fotografies || '/placeholder-blog.jpg'}
                  alt={article.titlos}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-blue-400 mb-4 line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
                  {article.titlos}
                </h2>
                <p className="text-gray-300 mb-6 line-clamp-3 text-lg">
                  {article.perigrafi}
                </p>
                <div className="flex justify-end">
                  <button
                    className="relative inline-flex items-center px-6 py-3 overflow-hidden text-sm font-medium text-white bg-blue-600/90 rounded-full group hover:bg-blue-500 transition-all duration-500"
                  >
                    <span className="relative flex items-center">
                      Διαβάστε περισσότερα
                      <svg 
                        className="ml-2 h-5 w-5 transform transition-transform duration-500 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 border border-transparent rounded-2xl group-hover:border-blue-400/10 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {articles.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center py-20"
          >
            <div className="inline-block p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Δεν υπάρχουν άρθρα</h3>
              <p className="text-gray-300">Δεν υπάρχουν διαθέσιμα άρθρα αυτή τη στιγμή.</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
