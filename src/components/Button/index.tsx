import React from "react";

import "./styles.css";

interface ButtonProp {
  label: string;
  click?: Function;

  operation?: boolean;
  double?: boolean;
}

export default (props: ButtonProp) => {
  const { label, operation, double, click } = props;

  let classes = 'button ';
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