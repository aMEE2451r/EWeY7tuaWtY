// 代码生成时间: 2025-08-19 05:07:32
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the types for the state
type MathState = {
  result: number,
  firstOperand: number,
  secondOperand: number,
  operation: string
};

// Define the types for the props
type MathToolboxProps = {
  // Additional props can be added here
};

const MathToolboxComponent = ({ }: MathToolboxProps) => {
  // Initialize state with default values
  const [state, setState] = useState<MathState>({
    result: 0,
    firstOperand: 0,
    secondOperand: 0,
    operation: ''
  });

  const { result, firstOperand, secondOperand, operation } = state;

  // Event handler for number inputs
  const handleNumberInput = (value: string) => {
    const number = parseFloat(value);
    if (operation) {
      setState(prevState => ({ ...prevState, secondOperand: number }));
    } else {
      setState(prevState => ({ ...prevState, firstOperand: number }));
    }
  };

  // Event handler for operation selection
  const handleOperationSelection = (op: string) => {
    setState(prevState => ({ ...prevState, operation: op }));
  };

  // Perform the calculation
  const calculate = () => {
    switch (operation) {
      case '+':
        setState({ ...state, result: firstOperand + secondOperand });
        break;
      case '-':
        setState({ ...state, result: firstOperand - secondOperand });
        break;
      case '*':
        setState({ ...state, result: firstOperand * secondOperand });
        break;
      case '/':
        setState(prevState => (prevState.secondOperand !== 0 ? { ...prevState, result: firstOperand / secondOperand } : prevState));
        break;
      default:
        break;
    }
  };

  // Reset the calculator state
  const reset = () => {
    setState({ result: 0, firstOperand: 0, secondOperand: 0, operation: '' });
  };

  return (
    <div>
      <input type="text" value={firstOperand} onChange={(e) => handleNumberInput(e.target.value)} />
      <input type="text" value={secondOperand} onChange={(e) => handleNumberInput(e.target.value)} />
      {['+', '-', '*', '/'].map((op) => (
        <button key={op} onClick={() => handleOperationSelection(op)}>{op}</button>
      ))}
      <button onClick={calculate}>Calculate</button>
      <button onClick={reset}>Reset</button>
      <div>Result: {result}</div>
    </div>
  );
};

// PropTypes validation
MathToolboxComponent.propTypes = {
  // Define propTypes here, if necessary
};

export default MathToolboxComponent;