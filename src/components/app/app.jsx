import Topbar from "../topbar/topbar";
import Intro from "../intro/intro";
import Portfolio from "../portfolio/portfolio";
import Works from "../works/works";
import Testimonials from "../testimonials/testimonials";
import Contact from "../contact/contact";

import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar />
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
