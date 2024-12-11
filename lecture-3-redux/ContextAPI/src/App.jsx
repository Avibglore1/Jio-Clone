import './App.css'
import BasicContext from './BasicContext'
import Home from './ThemeComponent/Home'
import ThemeContext from './ThemeComponent/ThemeContext'

function App() {
  return (
    <>
      {/* <BasicContext></BasicContext> */}
      <ThemeContext>
      <Home></Home>
      </ThemeContext>
      
    </>
  )
}

export default App
