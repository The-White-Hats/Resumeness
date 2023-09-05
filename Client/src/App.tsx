import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Resume from "./pages/resume/resume";
import DetailedPreview from "./pages/resume/sub/detailed-preview/detailed-preview";
import store from "./slices/store";
import About from "./pages/About/About";
import Home from "./pages/home/home";
import Register from "./pages/register/register";
import profile from "./pages/profile/profile";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/resume" Component={Resume}/>
          <Route path="/resume/preview" Component={DetailedPreview}/>
          <Route path="/cover-letter" Component={Resume}/>
          <Route
            path="/cover-letter/preview"
            Component={DetailedPreview}
          ></Route>
          <Route path="/about" Component={About} />
          <Route path="/logIn" Component={Register} />
          <Route path="/signUp" Component={Register} />
          <Route path="/profile" Component={profile} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
