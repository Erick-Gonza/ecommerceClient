import Header from './components/Header/Header'
import Main from './components/Main'
import Footer from './components/Footer/Footer'
import ThemeContext from './context/ThemeContext'
import ModalsContext from './context/ModalsContext'
import AuthContext from './context/authContext'

function App () {
  return (
    <AuthContext>
      <ThemeContext>
        <ModalsContext>
          <Header />
          <Main />
          <Footer />
        </ModalsContext>
      </ThemeContext>
    </AuthContext>
  )
}

export default App
