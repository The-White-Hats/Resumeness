import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Resume from "./pages/resume/resume";
import DetailedPreview from "./pages/resume/sub/detailed-preview/detailed-preview";
import store from "./slices/store";
import About from "./pages/About/About";
import Home from "./pages/home/home";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/resume" Component={Resume}></Route>
          <Route path="/resume/preview" Component={DetailedPreview}></Route>
          <Route path="/cover-letter" Component={Resume}></Route>
          <Route
            path="/cover-letter/preview"
            Component={DetailedPreview}
          ></Route>
          <Route path="/about" Component={About} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
