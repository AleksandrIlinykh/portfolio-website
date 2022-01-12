import { useState } from "react";

import PortfolioList from "../portfolio-list/portfolio-list";
import PortfolioCard from "../portfolio-card/portfolio-card";

import "./portfolio.scss";

import { projects } from "../../utils/portfolio-data";

export default function Portfolio() {
  const [selected, setSelected] = useState("WEB apps");
  const projectTypes = [
    {
      type: "WEB apps",
    },
    {
      type: "layouts",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <ul>
        {projectTypes.map((item) => (
          <PortfolioList
            title={item.type}
            active={selected === item.type}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {projects
          .filter((project) => project.type === selected)
          .map((project) => (
            <PortfolioCard title={project.title} />
          ))}
      </div>
    </div>
  );
}
