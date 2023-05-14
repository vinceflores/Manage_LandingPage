import "./App.css";
import NavBar from "./Components/NavBar";
import layer from "./images/bg-tablet-pattern.svg";
import Header from "./Components/Header";
import About from "./Components/About";
import { useState } from "react";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
function App() {
  const header_style = {
    backgroundImage: "url(" + layer + ")",
  };
  const [visibility, setvisibility] = useState('');

  return (
    <div className="App">
      <header  style={header_style} className="bg-hero  ">
        <NavBar setVisible={setvisibility} />
        <div className={visibility}>
        <Header /> 
        <About/> 
        <Testimonials/> 
        <Footer/> 
        </div>
        {/* Testimonials */}
      </header>
    </div>
  );
}

export default App;

