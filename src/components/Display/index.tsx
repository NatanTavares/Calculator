import React from "react";

import "./styles.css";

interface DisplayProp {
  value?: Number;
}

export default (props: DisplayProp) => {
  const value = props.value || 0;
  return (
    <div className="display">
      <span>{value}</span>
    </div>
  );
}