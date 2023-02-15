import Header from './components/Header/Header'
import Main from './components/Main'
import Footer from './components/Footer/Footer'
import ThemeContext from './context/ThemeContext'

function App() {
  return (
    <ThemeContext>
      <Header />
      <Main />
      <Footer />
    </ThemeContext>
  )
}

export default App
