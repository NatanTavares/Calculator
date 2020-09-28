import React, { Component } from "react";
import Display from "../Display";
import Button from "../Button";

import "./styles.css";

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}

export default class Calculator extends Component {
  state = { ...initialState }
  
  constructor(props: any) {
    super(props);
    this.addDigit = this.addDigit.bind(this);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
  }

  addDigit(digit: string) {
    if (digit === '.' && this.state.displayValue.includes('.')) {
      return
    }

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
    const currentValue = clearDisplay ? '': this.state.displayValue;
    const displayValue = currentValue + digit;

    this.setState({ displayValue, clearDisplay: false });
  }

  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation: String) {
    console.log('> Operation:', operation);
  }

  render() {
    return (
      <div className="Calculator">
        <Display value={this.state.displayValue} />
        
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
