import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className={{
      margin: "30px 30px"
    }}>
      <Intro/>
      <About/>
      <Contact/>
    </div>
  );
};

export default App;