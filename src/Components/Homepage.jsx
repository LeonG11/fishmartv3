import React, { useState } from "react";
import { ReactComponent as Arrow } from "./img/arrow next.svg";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [Radius, setRadius] = useState(50);

  const Enter = () => {
    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      setRadius(50 + counter);
      if (counter >= 20) {
        clearInterval(interval);
      }
    }, 10);
  };

  const Leave = () => {
    setRadius(50);
  };

  const style = {
    width: `${Radius}px`,
    height: `${Radius}px`,
    backgroundColor: "#B78A61",
    borderRadius: "50%",
    marginLeft: `-${Radius / 2}px`,
  };
  return (
    <div className="Homepage">
      <div className="titleHome">
        <p>Свежие продукты</p>
        <p>На любой вкус</p>
        <div
          onMouseEnter={Enter}
          onMouseLeave={Leave}
          style={{ width: "30%", height: "100px" }}
        >
          <Link to="/menu" className="buttonHome">
            <div>Смотреть ассортимент</div>
            <Arrow style={{ zIndex: "2" }} />
            <a style={style}></a>
          </Link>
        </div>
      </div>
    </div>
  );
}
