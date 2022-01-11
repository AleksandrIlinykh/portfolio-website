import "./menu.scss";

export default function Menu({ isMenuOpen, serIsMenuOpen }) {
  return (
    <div className={"menu " + (isMenuOpen && "active")}>
      <ul>
        <li
          onClick={() => {
            serIsMenuOpen(false);
          }}
        >
          <a href="#intro">home</a>
        </li>
        <li
          onClick={() => {
            serIsMenuOpen(false);
          }}
        >
          <a href="#portfolio">portfolio</a>
        </li>
        <li
          onClick={() => {
            serIsMenuOpen(false);
          }}
        >
          <a href="#works">works</a>
        </li>
        <li
          onClick={() => {
            serIsMenuOpen(false);
          }}
        >
          <a href="#testimonials">testimonials</a>
        </li>
        <li
          onClick={() => {
            serIsMenuOpen(false);
          }}
        >
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  );
}
