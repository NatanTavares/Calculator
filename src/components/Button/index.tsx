import React from "react";

import "./styles.css";

interface ButtonProp {
  label: String;
  click?: Function;

  operation?: Boolean;
  double?: Boolean;
}

export default (props: ButtonProp) => {
  const { label, operation, double, click } = props;

  let classes = 'button';
  classes += operation ? 'operation' : '';
  classes += double ? 'double' : '';

  return (
    <button 
      className={classes} 
      onClick={
        event => click && click(label)
    }>
      {label}
    </button>
  );
}