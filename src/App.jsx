
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import languages from './components/js/languages'
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
