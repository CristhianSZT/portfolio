import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Contact from './components/Contact'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <ChatWidget />
    </div>
  )
}

export default App