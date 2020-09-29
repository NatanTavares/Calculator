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

    if (digit !== '.') {
      const index = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      
      values[index] = newValue;
      
      this.setState({ values });
      console.log('> Values:', values);
    }
  }

  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation: string) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === '=';
      const currentOperation = this.state.operation;
      console.log('> currentOperation:', currentOperation);

      const values = [...this.state.values];

      try {
        if (currentOperation != null) {
          switch (currentOperation) {
            case 'x':
              values[0] = values[0] * values[1];
              break;
            case '÷':
              values[0] = values[0] / values[1];
              break;
            case '%':
              values[0] = values[0] * values[1] / 100;
              break;
            default:
              values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
              break;
          }
        }
      } catch(err) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      });
    }
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
