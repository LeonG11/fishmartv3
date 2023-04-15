import React from "react";
import { ReactComponent as LogoS } from "./img/logo.svg";
import { Link } from "react-router-dom";

export default function LogoSvg() {
  return (
    <Link to="/">
      <div className="logo">
        <LogoS />
        <div>FISH FISH</div>
      </div>
    </Link>
  );
}
