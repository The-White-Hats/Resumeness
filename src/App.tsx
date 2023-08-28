import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./slices/store";
import Navbar from "./components/Navbar/Navbar";
import Preview from "./pages/resume/sub/preview/preview";

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"></Route>
          <Route path="/resume" Component={() => Preview("#224286d6")}></Route> {/*Just For Testing*/}
          <Route path="/cover-letter"></Route>
          <Route path="/about"></Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;
