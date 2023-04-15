import React from "react";
import { Link } from "react-router-dom";

export default function LinkHeader(props) {
  return (
    <Link to={props.path} className="linkHeader">
      {props.text}
    </Link>
  );
}
