import React, { useState } from "react";
import Cards from "./Cards";

export default function MenuFish() {
  const [TypeItem, setTypeItem] = useState("all");

  const dataSet = [
    {


    }
  ]
  return (
    <div className="menu">
      <p>Ассортимент</p>
      <div className="menu__buttonLine">
        <button key="1" onClick={() => setTypeItem("fish")}>
          РЫБА
        </button>
        <button key="2" onClick={() => setTypeItem("kreebs")}>
          КРАБЫ
        </button>
        <button key="3" onClick={() => setTypeItem("scallops")}>
          ГРЕБЕШКИ И МИДИИ
        </button>
        <button key="4" onClick={() => setTypeItem("shrimp")}>
          КРЕВЕТКИ
        </button>
        <button key="5" onClick={() => setTypeItem("ouster")}>
          УСТРИЦЫ
        </button>
        <button key="6" onClick={() => setTypeItem("octopus")}>
          КАЛЬМАРЫ
        </button>
      </div>
      <div className="cards__flex">

        <Cards
          img="/fish-1.png"
          place="Архангельск"
          name="Окунь морской"
          price="1000"
        />
        <Cards img="/fish-1.png" name="Окунь морской" price="1000" />
        <Cards img="/fish-1.png" name="Окунь морской" price="1000" />
      </div>
    </div>
  );
}
