import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Services from './components/Services'
import TestimonialContainer from './components/TestimonialContainer'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <main className='max-w-[1400px] mx-auto relative'>
        <Header />
        <Main />
        <Services />
        <TestimonialContainer/>
        <Gallery/>
        <Footer/>
      </main>
    </>
  )
}
