import Top from "./components/Top"
import About from "./components/About"
import Work from "./components/Work"
import Education from "./components/Education"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="max-w-xl mx-auto min-h-screen px-5 pt-24 pb-32">
      <Top />
      <About />
      <Work />
      <Education />
      <Contact />
    </main>
  )
}
