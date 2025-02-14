import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Chatbot from "./components/Chatbot"
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SCG - Καινοτομία στη Βιομηχανία Κρέατος",
  description: "Η SCG ειδικεύεται στη βιομηχανία κρέατος, την τεχνολογία τροφίμων και τη νομική συμμόρφωση.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="el">
      <body className={`${inter.className} bg-gray-900 text-gray-100 flex flex-col min-h-screen`}>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
          <Header />
          <main className="container mx-auto px-4 py-8 pt-20 flex-grow">{children}</main>
          <Footer />
          <Chatbot />
          <Toaster position="top-center" />
        </div>
      </body>
    </html>
  )
}
