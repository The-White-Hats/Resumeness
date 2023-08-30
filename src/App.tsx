import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"></Route>
        <Route path="/resume"></Route>
        <Route path="/cover-letter"></Route>
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  )
}

export default App;
