import "./portfolio-list.scss";

export default function PortfolioList({ title, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(title)}
    >
      {title}
    </li>
  );
}
