import React from 'react';
import Navbar from "./components/project/Navbar";
import Hero from "./components/project/Hero";
import MarqueeText from "./components/project/MarqueeText";
import Product from "./components/project/Product";
import About from "./components/project/About";
import USP from "./components/project/USP";
import Contact from "./components/project/Contact";
import Footer from "./components/project/Footer";

function App() {
  return ( 
    <div>
      <Navbar />
      <Hero />
      <MarqueeText />
      <Product />
      <About />
      <USP />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
