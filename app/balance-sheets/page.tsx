'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion } from 'framer-motion';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface FinancialData {
  assets: {
    current: number;
    fixed: number;
    total: number;
  };
  liabilities: {
    current: number;
    longTerm: number;
    total: number;
  };
  equity: {
    total: number;
  };
}

interface FinancialStatement {
  id: number;
  year: number;
  title: string;
  description: string;
  file_url: string;
  financial_data: FinancialData;
  created_at: string;
}

export default function BalanceSheets() {
  const [statements, setStatements] = useState<FinancialStatement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStatements() {
      try {
        const { data, error } = await supabase
          .from('financial_statements')
          .select('*')
          .order('year', { ascending: false });

        if (error) {
          console.error('Error fetching statements:', error);
          return;
        }

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
      className="min-h-screen bg-gray-800"
    >
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
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

        <div className="space-y-8">
          {statements.map((statement, index) => (
            <motion.div
              key={statement.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-xl shadow-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-100 mb-2">{statement.title}</h2>
                    <p className="text-gray-300">{statement.description}</p>
                  </div>
                  <div className="bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full font-semibold">
                    {statement.year}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Ενεργητικό */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-600"
                  >
                    <h3 className="text-lg font-semibold text-blue-400 mb-4">Ενεργητικό</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400">Κυκλοφορούν</p>
                        <p className="text-lg font-semibold text-gray-100">
                          {Number(statement.financial_data.assets.current).toLocaleString('el-GR')}€
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400">Πάγιο</p>
                        <p className="text-lg font-semibold text-gray-100">
                          {Number(statement.financial_data.assets.fixed).toLocaleString('el-GR')}€
                        </p>
                      </div>
                      <div className="pt-4 border-t border-gray-600">
                        <p className="text-gray-400">Σύνολο</p>
                        <p className="text-xl font-bold text-blue-400">
                          {Number(statement.financial_data.assets.total).toLocaleString('el-GR')}€
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Παθητικό */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-600"
                  >
                    <h3 className="text-lg font-semibold text-blue-400 mb-4">Παθητικό</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400">Βραχυπρόθεσμες Υποχρεώσεις</p>
                        <p className="text-lg font-semibold text-gray-100">
                          {Number(statement.financial_data.liabilities.current).toLocaleString('el-GR')}€
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400">Μακροπρόθεσμες Υποχρεώσεις</p>
                        <p className="text-lg font-semibold text-gray-100">
                          {Number(statement.financial_data.liabilities.longTerm).toLocaleString('el-GR')}€
                        </p>
                      </div>
                      <div className="pt-4 border-t border-gray-600">
                        <p className="text-gray-400">Σύνολο</p>
                        <p className="text-xl font-bold text-blue-400">
                          {Number(statement.financial_data.liabilities.total).toLocaleString('el-GR')}€
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Ίδια Κεφάλαια */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-600"
                  >
                    <h3 className="text-lg font-semibold text-blue-400 mb-4">Ίδια Κεφάλαια</h3>
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <p className="text-gray-400 mb-2">Σύνολο Ιδίων Κεφαλαίων</p>
                        <p className="text-2xl font-bold text-blue-400">
                          {Number(statement.financial_data.equity.total).toLocaleString('el-GR')}€
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-8 flex justify-end"
                >
                  <a
                    href={statement.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Προβολή PDF
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
