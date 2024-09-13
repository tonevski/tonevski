import React from "react"

const Education = () => {
  return (
    <section className="pt-6">
      <h2 className="text-[15px] text-gray-500 pb-6">Education</h2>
      {/* Education Item */}
      <div className="flex space-x-4">
        <p className="min-w-24 text-sm text-gray-400">2009 — 2014</p>
        <div>
          <h3 className="text-sm text-gray-700">
            <a
              href="https://www.finki.ukim.mk/en"
              className="hover:underline"
              target="_blank"
            >
              Faculty of Computer Science and Engineering - Skopje
            </a>
          </h3>
          <p className="text-sm text-gray-400 pt-1">Skopje, Macedonia</p>
          <p className="text-sm text-gray-500 pt-1">
            Internet and Mobile Technology
          </p>
        </div>
      </div>
      {/* /Education Item */}
      {/* Education Item */}
      <div className="flex space-x-4 pt-10">
        <p className="min-w-24 text-sm text-gray-400">2004 — 2008</p>
        <div>
          <h3 className="text-sm text-gray-700">
            High School - Gosho Vikentiev
          </h3>
          <p className="text-sm text-gray-400 pt-1">Kochani, Macedonia</p>
          <p className="text-sm text-gray-500 pt-1">
            Electronics and Telecommunications
          </p>
        </div>
      </div>
      {/* /Education Item */}
    </section>
  )
}

export default Education
