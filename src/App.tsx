import { Header } from './layout/header/Header'
import { Main } from './layout/sections/main/Main'
import { AboutMe } from './layout/sections/aboutme/AboutMe'
import { Skills } from './layout/sections/skills/Skills'
import { Portfolio } from './layout/sections/portfolio/Portfolio'
import { Contacts } from './layout/sections/contacts/Contacts'
import { GoTopBtn } from './components/goTopButton/GoTopButton'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
      <GoTopBtn />
    </div>
  )
}

export default App
