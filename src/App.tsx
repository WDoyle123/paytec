import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
