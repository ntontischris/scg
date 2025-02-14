export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  )
}

