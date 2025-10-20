import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import './index.css'

function App() {
  return (
    <>
    <div className="flex flex-col justify-center items-center pt-[4.75rem] lg:pt-[4rem] px-8">
      <Header />
      <div 
        id="home" 
        className="border border-white m-[3rem] w-full max-w-[90rem]"
      >
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </div>
    </div>
    <Footer />
    </>
  )
}

export default App
