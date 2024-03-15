import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Menu from './components/Menu/Menu'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import FAQ from './components/FAQ/FAQ'
import { Route, Routes } from 'react-router-dom'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <div className='container'>
      <Footer/>
      </div>
     {/* <Hero/>
    <div className="container">
    <Title title='Food Category' subTtile='Choose Food Item'/>
    <Pages/>
    <Chooseus/>
    <Title title='Choose & Pick' subTtile='From our Menu'/>
    <Menu/>
    <About/>
    <Title title='Testimonials' subTtile='What our clients are saying'/>
    <Testimonials/>
    <Title title='Contact us' subTtile='Ready to Order for a Party?'/>
    <Contact/>
    <Footer/>
     </div> */}
    </div>
  )
}

export default App