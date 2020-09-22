import React, { Component } from "react";
import Display from "../Display";
import Button from "../Button";

import "./styles.css";

export default class Calculator extends Component {

  render() {
    return (
      <div className="Calculator">
        <Display value={100} />
        
        {/** Keyboard */}
        <Button label="AC" />
        <Button label="±" />
        <Button label="%" />
        <Button label="÷" operation />

        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="x" operation />

        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" operation />

        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" operation />

        <Button label="0" double />
        <Button label="." />
        <Button label="=" operation />
      </div>
    );
  }
}
