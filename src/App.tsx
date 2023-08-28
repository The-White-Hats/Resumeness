import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Resume from "./pages/resume/resume";
import store from "./slices/store";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"></Route>
          <Route path="/resume" Component={Resume}></Route>
          <Route path="/cover-letter"></Route>
          <Route path="/about"></Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
