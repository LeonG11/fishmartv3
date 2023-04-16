import React from "react";
import LogoSvg from "./LogoSvg";
import LinkHeader from "./LinkHeader";
import Dot from "./Dot";

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroudColor: "#1C3751C7" }}>
      <LogoSvg />
      <div className="middle">
        <LinkHeader path="/fishfish" text="FISH FISH" />
        <Dot />
        <LinkHeader path="/menu" text="АССОРТИМЕНТ" />
        <Dot />
        <LinkHeader path="/about" text="КОНТАКТЫ" />
      </div>
      <a className="last telephone" href="tel:8800000000">
        +7 (800) 000-00-00
      </a>
    </footer>
  );
}
