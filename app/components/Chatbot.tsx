"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"

const predefinedQuestions = [
  "Ποιες είναι οι υπηρεσίες σας;",
  "Πώς μπορώ να κλείσω ραντεβού;",
  "Ποια είναι τα πλεονεκτήματα της SCG;",
  "Τι είναι το HACCP;",
  "Ποιες πιστοποιήσεις προσφέρετε;",
  "Τι περιλαμβάνει η εκπαίδευση προσωπικού;",
  "Πώς μπορείτε να βοηθήσετε στην ανάπτυξη νέων προϊόντων;",
  "Τι είναι η τεχνολογία κρέατος;",
  "Προσφέρετε υπηρεσίες για μικρές επιχειρήσεις;",
  "Πόσο χρόνο διαρκεί μια τυπική διαδικασία πιστοποίησης;",
]

const answers = [
  "Οι υπηρεσίες μας περιλαμβάνουν τεχνολογία κρέατος, τεχνολογία τροφίμων, νομική συμμόρφωση, πιστοποιήσεις, εκπαίδευση και επιθεωρήσεις.",
  "Μπορείτε να κλείσετε ραντεβού καλώντας μας στο +30 23920 39209 ή στέλνοντας email στο scg@otenet.gr.",
  "Τα πλεονεκτήματα της SCG περιλαμβάνουν 30ετή εμπειρία στον κλάδο, εξειδικευμένη ομάδα επαγγελματιών, καινοτόμες λύσεις και ολοκληρωμένες υπηρεσίες στη βιομηχανία τροφίμων.",
  "Το HACCP (Hazard Analysis and Critical Control Points) είναι ένα σύστημα διαχείρισης της ασφάλειας τροφίμων που εντοπίζει, αξιολογεί και ελέγχει τους κινδύνους σε όλα τα στάδια της παραγωγής.",
  "Προσφέρουμε υποστήριξη για πιστοποιήσεις όπως ISO 22000, ISO 9001, IFS, BRC, και HACCP.",
  "Η εκπαίδευση προσωπικού περιλαμβάνει μαθήματα για την ασφάλεια τροφίμων, την υγιεινή, τη διαχείριση ποιότητας, και εξειδικευμένα σεμινάρια για την τεχνολογία κρέατος και τροφίμων.",
  "Παρέχουμε συμβουλευτική για την ανάπτυξη νέων προϊόντων, συμπεριλαμβανομένης της έρευνας αγοράς, του σχεδιασμού συνταγών, και της βελτιστοποίησης παραγωγικών διαδικασιών.",
  "Η τεχνολογία κρέατος αφορά τις μεθόδους επεξεργασίας, συντήρησης και μεταποίησης κρέατος, συμπεριλαμβανομένων τεχνικών όπως η ωρίμανση, το μαρινάρισμα, και η παραγωγή αλλαντικών.",
  "Ναι, προσφέρουμε υπηρεσίες προσαρμοσμένες στις ανάγκες μικρών επιχειρήσεων, συμπεριλαμβανομένων συμβουλευτικής, εκπαίδευσης και υποστήριξης για πιστοποιήσεις.",
  "Η διάρκεια της διαδικασίας πιστοποίησης ποικίλλει ανάλογα με το πρότυπο και την ετοιμότητα της επιχείρησης, αλλά συνήθως κυμαίνεται από 3 έως 6 μήνες.",
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleQuestionClick = (index: number) => {
    setMessages([
      ...messages,
      { text: predefinedQuestions[index], isUser: true },
      { text: answers[index], isUser: false },
    ])
  }

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isUser: true }])
      setInputValue("")
      // Simulate bot response (you can replace this with actual AI response logic)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Δυστυχώς δεν γνωρίζω την απάντηση σε αυτή την ερώτηση. Παρακαλώ επικοινωνήστε μαζί μας στο +30 23920 39209 ή στείλτε email στο scg@otenet.gr για περισσότερες πληροφορίες.",
            isUser: false,
          },
        ])
      }, 1000)
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
        >
          {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 z-50 w-full sm:w-[400px] lg:w-[450px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-7rem)] overflow-auto"
          >
            <Card className="shadow-xl border-blue-900 bg-blue-950">
              <CardHeader className="bg-blue-950 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-semibold">SCG Chatbot</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[300px] sm:h-[350px] lg:h-[400px] p-4 text-white">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 p-3 rounded-lg ${
                        message.isUser
                          ? "bg-blue-800 text-white ml-auto max-w-[80%]"
                          : "bg-blue-900 text-white mr-auto max-w-[80%]"
                      }`}
                    >
                      {message.text}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </ScrollArea>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4 p-4 bg-blue-950 max-h-[300px] overflow-y-auto">
                <form onSubmit={handleInputSubmit} className="flex w-full space-x-2">
                  <Input
                    type="text"
                    placeholder="Πληκτρολογήστε το μήνυμά σας..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-grow text-base bg-blue-900 text-white placeholder-blue-300"
                  />
                  <Button type="submit" size="default" className="bg-blue-800 hover:bg-blue-700">
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
                <div className="grid grid-cols-2 gap-2 w-full">
                  {predefinedQuestions.map((question, index) => (
                    <Button
                      key={index}
                      onClick={() => handleQuestionClick(index)}
                      variant="outline"
                      className="w-full justify-start text-sm text-left h-auto py-2 px-3 whitespace-normal bg-blue-900 text-white hover:bg-blue-800"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

