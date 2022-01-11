import { useState } from "react";
import Topbar from "../topbar/topbar";
import Intro from "../intro/intro";
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
      <Topbar isMenuOpen={isMenuOpen} serIsMenuOpen={serIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} serIsMenuOpen={serIsMenuOpen} />
      <div className="section">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
