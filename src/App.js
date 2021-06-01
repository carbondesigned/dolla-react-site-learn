import GlobalStyling from "./GlobalStyling"

import Home from "./pages/"
import { BrowserRouter as Router } from "react-router-dom"
function App() {
  return (
    <Router>
      <GlobalStyling />
      <Home />
    </Router>
  )
}

export default App
