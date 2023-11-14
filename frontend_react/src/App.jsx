
import Header from "./components/Header/Header";
import Services from "./components/Services/Services"
import Work from "./components/Work/Work"
import Skills from "./components/Skills/Skills"
import Experiences from "./components/Experiences/Experiences";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {

  return (
    <div className="">
      <Header />
      <Services/>
      <Work />
      <Skills/>
      <Experiences />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
