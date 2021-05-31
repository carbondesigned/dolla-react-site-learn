import GlobalStyling from "./GlobalStyling"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router } from "react-router-dom"
function App() {
  return (
    <Router>
      <GlobalStyling />
      <Navbar />
    </Router>
  )
}

export default App
