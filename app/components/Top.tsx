import React from "react"
import Image from "next/image"

const Top = () => {
  return (
    <section className="flex items-center space-x-4">
      <Image
        src="/me.jpeg"
        alt="Nikola Tonevski"
        width={80}
        height={80}
        className="rounded-full object-cover"
      />
      <div>
        <h1 className="text-lg text-gray-700 pb-0.5">Nikola Tonevski</h1>
        <p className="text-sm text-gray-500 pb-0.5">
          Founder | Web Developer | WordPress Specialist
        </p>
        <p className="text-sm text-gray-400">Malmö, Sweden</p>
      </div>
    </section>
  )
}

export default Top
