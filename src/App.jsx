import Header from './components/Header/Header'
import Main from './components/Main'
import Footer from './components/Footer/Footer'
import ThemeContext from './context/ThemeContext'
import ModalsContext from './context/ModalsContext'

function App() {
  return (
    <ThemeContext>
      <ModalsContext>
        <Header />
        <Main />
        <Footer />
      </ModalsContext>
    </ThemeContext>
  )
}

export default App
