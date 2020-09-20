import React, { Component } from "react";
import Button from "../Button";

import "./styles.css";

export default class Calculator extends Component {
  
  render() {
    return (
      <div className="Calculator">
        <p>I'm a calculator</p>
        <Button />
      </div>
    );
  }
}
