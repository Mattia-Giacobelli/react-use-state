import { useState } from 'react'
import Header from './assets/components/Header'
import Main from './assets/components/Main'
import Footer from './assets/components/Footer'
import languages from './assets/components/js/languages'
import './App.css'

function App() {

  return (
    <>
      <Header />

      <Main languages={languages} />

      <Footer />
    </>
  )
}

export default App
