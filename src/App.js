import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Education from "./components/Education/education";
import Achieve from "./components/Achievements/achieve";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Education/>
      <Achieve/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
