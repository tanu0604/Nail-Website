import React from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Nails from "./components/Nails/Nails";
import Work from "./components/Work/Work.jsx"
import Footer from "./components/Footer.jsx";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="container bg-red">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/nails" element={<Nails />} /> {/* Add your route here */}
          <Route path="/work" element={<Work />} /> {/* Add your route here */}
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
