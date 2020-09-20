import React from "react";

import "./styles.css";

export default (props: any) => {
  return (
    <div className="keyboard">
      <button className="button">AC</button>
      <button className="button">±</button>
      <button className="button">%</button>
      <button className="button">÷</button>

      <button className="button">7</button>
      <button className="button">8</button>
      <button className="button">9</button>
      <button className="button">X</button>

      <button className="button">4</button>
      <button className="button">5</button>
      <button className="button">6</button>
      <button className="button">-</button>

      <button className="button">1</button>
      <button className="button">2</button>
      <button className="button">3</button>
      <button className="button">+</button>

      <button className="button">0</button>
      <button className="button">.</button>
      <button className="button">=</button>
    </div>
  );
}