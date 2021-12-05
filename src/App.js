import React, { Component } from 'react';
import { Button, Input, ClearButton } from './Components';
import { connect } from 'react-redux';
import {
  handleAdditionOfInput,
  handleEqualTo,
  clearInputExpression,
  removePreviousInputExpression,
  handleOperatorInput
} from '../src/store/actions/calculate';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: "",
      previousInput: "",
      invalidExpression: false
    }
  }

  addToInput = val => {
    const { addToExpression } = this.props;
    addToExpression(val);
  }

  handleEqualTo = () => {
    const { handleExpressionEqualTo } = this.props;
    handleExpressionEqualTo();
  }

  clearInput = () => {
    const { clearInputExpression } = this.props;
    clearInputExpression();
  }

  removePreviousInput = () => {
    const { removePreviousInputExpression } = this.props;
    removePreviousInputExpression();
  }

  handleOperator = val => {
    const { handleOperator } = this.props;
    handleOperator(val);
  }

  render(){
    const { input, invalidExpression } = this.props;
    return (
      <div className="app">
        <div className="calculator-wrapper">
          <Input input={input} styleToggle={invalidExpression}></Input>
          <hr className='hrr' />
          <div className="row">
            <ClearButton
              handleClick={()=> {
                this.clearInput()
              }}
            >
              CLEAR
            </ClearButton>
            {/* <ClearButton
              handleClick={()=> {
                this.removePreviousInput()
              }}
            >
              C
            </ClearButton> */}
            <Button handleClick={this.handleOperator}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.handleOperator}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.handleOperator}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.handleOperator}>%</Button>
          </div>
          
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.handleOperator}>/</Button>
            <Button handleClick={() => {this.handleEqualTo()}}>=</Button>
            {/* <Button handleClick={() => {this.handleEqualTo()}}>=</Button>
            <Button handleClick={this.handleOperator}>/</Button> */}
          </div>
          
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  input: state.calculator.input,
  previousInput: state.calculator.previousInput,
  invalidExpression: state.calculator.invalidExpression
})

const mapDispatchToProps = (dispatch) => ({
  addToExpression: (input) => {
    dispatch(handleAdditionOfInput(input));
  },
  handleExpressionEqualTo: () => {
    dispatch(handleEqualTo())
  },
  clearInputExpression: () => {
    dispatch(clearInputExpression())
  },
  removePreviousInputExpression: () => {
    dispatch(removePreviousInputExpression())
  },
  handleOperator: (input) => {
    dispatch(handleOperatorInput(input))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
