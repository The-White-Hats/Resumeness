import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Resume from "./pages/resume/resume";
import DetailedPreview from "./pages/resume/sub/detailed-preview/detailed-preview";
import store from "./slices/store";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"></Route>
          <Route path="/resume" Component={Resume}></Route>
          <Route path="/resume/preview" Component={DetailedPreview}></Route>
          <Route path="/cover-letter"></Route>
          <Route path="/about"></Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
