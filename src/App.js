import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Copyright from "./components/Copyright/Copyright";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <Copyright />
    </>
  );
};

export default App;
