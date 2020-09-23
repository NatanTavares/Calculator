import React, { Component } from "react";
import Display from "../Display";
import Button from "../Button";

import "./styles.css";

export default class Calculator extends Component {
  constructor(props: any) {
    super(props);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    console.log('Clear display');
  }

  addDigit(digit: String) {
    console.log(digit);
  }

  setOperation(operation: String) {
    console.log('> Operation:', operation);
  }

  render() {
    return (
      <div className="Calculator">
        <Display value={100} />
        
        {/** Keyboard */}
        <Button label="AC" click={this.clearMemory} />
        <Button label="±" click={this.setOperation} />
        <Button label="%" click={this.setOperation} />
        <Button label="÷" click={this.setOperation} operation />

        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="x" click={this.setOperation} operation />

        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation />

        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation />

        <Button label="0" click={this.addDigit} double />
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation />
      </div>
    );
  }
}
