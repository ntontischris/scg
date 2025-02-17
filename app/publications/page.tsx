'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from "@/components/ui/card"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

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

const scientificArticles = [
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

export default function PublicationsPage() {
  const [articles, setArticles] = useState<BlogArticle[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false
  })

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
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Δημοσιεύσεις</h1>
        </motion.div>

        {/* Scientific Articles Section */}
        <section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-semibold text-blue-400 mb-8 text-center"
          >
            Επιστημονικά Άρθρα
          </motion.h2>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-xl" ref={emblaRef}>
              <div className="flex">
                {scientificArticles.map((article, index) => (
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
                                src={article.src}
                                alt={article.alt}
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
                            <h3 className="text-2xl font-semibold text-white mb-3">{article.title}</h3>
                            <p className="text-gray-300 text-lg">{article.description}</p>
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
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-6 rounded-full backdrop-blur-sm transition-all duration-200 shadow-lg"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </section>

        {/* Blog Articles Section */}
        <section>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-semibold text-blue-400 mb-12 text-center"
          >
            Άρθρα Blog
          </motion.h2>

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
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={article.fotografies}
                    alt={article.titlos}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
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
        </section>
      </div>
    </motion.div>
  )
}
