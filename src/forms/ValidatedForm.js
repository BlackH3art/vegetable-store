import React, { Component } from 'react';
import { ValidatorError } from "./ValidatorError";
import { GetMessages } from "./ValidationMessages"; 

export class ValidatedForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      validationErrors: {}
    }
    this.formElements = {};
  }

  handleSubmit = () => {
    this.setState(state => {
      const newState = { ...state, validationErrors: {} }
      Object.values(this.formElements).forEach(element => {
        if (!element.checkValidity()) { 
          newState.validationErrors[element.name] = GetMessages(element)
        }
      })
      return newState;
    }, () => {
      if (Object.keys(this.state.validationErrors).length === 0) {
        const data = Object.assign(...Object.entries(this.formElements).map(e => ({
          [e[0]]: e[1].value
        })))
        this.props.submitCallback(data)
      }
    })
  }

  registerRef = (element) => {
    if (element !== null) {
      this.formElements[element.name] = element;
    }
  }

  renderElement = (modelItem) => {
    const name = modelItem.name || modelItem.label.toLowerCase();
    return (
      <div className="form-group" key={modelItem.label}>
        <label>{modelItem.labelText ? modelItem.labelText : modelItem.label}</label>
        <ValidatorError errors={this.state.validationErrors[name]} />
        <input className="form-control" name={name} ref={this.registerRef} {...this.props.defaultAttrs} {...this.props.modelItemAttrs} />
      </div>
    )
  }


  render() { 
    return ( 
      <>
        {this.props.formModel.map(ele => this.renderElement(ele))}
        <div className="text-center">
          <button className="btn-secondary btn m-1" onClick={this.props.cancelCallback}> {this.props.cancelText || "Cancel"} </button>
          <button className="btn-primary btn m-1" onClick={this.handleSubmit}> {this.props.submitText || "Order"} </button>
        </div>
      </>
     );
  }
}
 
