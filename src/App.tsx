import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects'
import NotFound from './not-Found/NotFound'
import './App.css'

function App() {

  const location = useLocation()
  const isNotFound = location.pathname !== '/' &&
  !['/about', '/projects', '/contact'].includes(location.pathname)

  return (
    <>
      <div className="App">
        {! isNotFound && <Navbar />}
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        {! isNotFound && <Footer />}
      </div>
    </>
  )
}

export default App
