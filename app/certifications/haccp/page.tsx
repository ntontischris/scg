import Image from "next/image"

function MyComponent() {
  return (
    <div className="space-y-12">
      <div className="flex justify-center mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/haccp.jpg-lEdbLBaW5WdhRyvEtYXp5Id7WIkaXK.jpeg"
          alt="HACCP Certification"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      {/* rest of the code */}
      <p>This is some content.</p>
    </div>
  )
}

export default MyComponent

