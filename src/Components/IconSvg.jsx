import React from "react";
import { Link } from "react-router-dom";

export default function IconSvg(props) {
  return (
    <div className="lastChild">
      <Link to={props.path}>{props.svg}</Link>
    </div>
  );
}
