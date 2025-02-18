'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion } from 'framer-motion';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface FinancialStatement {
  id: number;
  year: number;
  title: string;
  file_url: string;
}

export default function BalanceSheets() {
  const [statements, setStatements] = useState<FinancialStatement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStatements() {
      try {
        const { data, error } = await supabase
          .from('financial_statements')
          .select('id, year, title, file_url')
          .order('year', { ascending: false });

        if (error) {
          console.error('Error fetching statements:', error);
          return;
        }

        console.log('Raw data from Supabase:', data);
        setStatements(data || []);
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchStatements();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-800">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-800 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-blue-400 mb-4">Οικονομικές Καταστάσεις</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ετήσιοι ισολογισμοί και οικονομικά στοιχεία της SCG ΣΥΜΒΟΥΛΕΥΤΙΚΗ ΕΠΙΧΕΙΡΗΣΕΩΝ Μ.Ε.Π.Ε.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {statements.map((statement, index) => (
            <motion.div
              key={statement.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden transform-gpu"
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Glass effect border */}
              <div className="absolute inset-0.5 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>

              <div className="relative p-8">
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between items-start">
                    <motion.h2 
                      className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.02 }}
                    >
                      {statement.title}
                    </motion.h2>
                    <motion.span 
                      className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-500/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      {statement.year}
                    </motion.span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open(statement.file_url, '_blank')}
                    className="w-full mt-6 relative group/button"
                  >
                    {/* Button gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-75 group-hover/button:opacity-100 transition-opacity duration-200"></div>
                    
                    {/* Button content */}
                    <div className="relative px-6 py-3 flex items-center justify-center space-x-3 text-white font-semibold">
                      <svg
                        className="w-5 h-5 transform group-hover/button:scale-110 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <span className="transform group-hover/button:translate-x-1 transition-transform duration-200">
                        Προβολή Αρχείου
                      </span>
                    </div>
                  </motion.button>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
