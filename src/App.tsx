import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"></Route>
        <Route path="/resume"></Route>
        <Route path="/cover-letter"></Route>
        <Route path="/about"></Route>
      </Routes>
    </Router>
  )
}

export default App;
