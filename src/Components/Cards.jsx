import React, { useState } from "react";
import { ReactComponent as ArrowNext } from "./img/arrow next.svg";

export default function Cards(props) {
  const [Price, setPrice] = useState(1);
  return (
    <div className="cards">
      <img src={props.img} alt={props.alt} className="imgCards" />
      <div className="cards__title">
        <div>{props.name}</div>
        <div>{props.price} Р/кг</div>
      </div>
      <div className="cards__place">{props.place}</div>
      <div className="cards__bottom">
        <div className="cards__button">
          <button onClick={() => setPrice(Price + 1)}>+</button>
          <button>{`0.${Price}`}</button>
          <button
            onClick={() => {
              Price != 0 ? setPrice(Price - 1) : 0;
            }}
          >
            -
          </button>
        </div>
        <div className="cards__lastButton">
          <button style={{ marginRight: "20px" }}>В корзину</button>
          <ArrowNext />
        </div>
      </div>
    </div>
  );
}
