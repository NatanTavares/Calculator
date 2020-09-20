import React from "react";

import "./styles.css";

interface ButtonProp {
  label: String
}

export default (props: ButtonProp) => {
  const { label } = props;
  return (
    <button className="button">{label}</button>
  );
}