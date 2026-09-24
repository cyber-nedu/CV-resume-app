import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects'
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <Navbar />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </>
  )
}

export default App
