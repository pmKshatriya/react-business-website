import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeText from "./components/MarqueeText";
import Product from "./components/Product";
import About from "./components/About";
import USP from "./components/USP";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
