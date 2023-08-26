import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./slices/store";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"></Route>
          <Route path="/resume"></Route>
          <Route path="/cover-letter"></Route>
          <Route path="/about"></Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;
