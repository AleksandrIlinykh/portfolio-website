import { useState } from "react";
import Header from "../header/header";
import Home from "../home/home";
import Portfolio from "../portfolio/portfolio";
import Works from "../works/works";
import Testimonials from "../testimonials/testimonials";
import Contact from "../contact/contact";
import Menu from "../menu/menu";

import "./app.scss";

function App() {
  const [isMenuOpen, serIsMenuOpen] = useState(false);
  return (
    <div className="app">
      <Header isMenuOpen={isMenuOpen} serIsMenuOpen={serIsMenuOpen} />
      <div className="section">
        <Home />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
