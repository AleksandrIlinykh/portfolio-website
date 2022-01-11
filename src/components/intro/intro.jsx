import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="../assets/myPhoto.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>
            Hi! <br />
            I'm Alexandr <br />a WEB developer <br />
            (but you call name Sasha)
          </h2>
        </div>
        <a href="#portfolio">
          <img src="../../assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
