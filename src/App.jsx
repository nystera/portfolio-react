import { Routes, BrowserRouter, Route } from "react-router-dom";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#F2F4F4",
      }}
    >
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Intro />
                <About />
                <Contact />
              </div>
            }
          />
          <Route exact path="/about" element={<div>hello world</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
