import React, { Component } from "react";
import Step1 from "../../../features/shipping-label-maker/ShippingLabelMaker";
import Step2 from "../../../features/shipping-label-maker/step2";
import Step3 from "../../../features/shipping-label-maker/step3";
import './wizard.css'

class BasicWizard extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
      to: { name: "", street: "", city: "", state: "", zip: "" }
    };
   
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  _next() {
    let currentStep = this.state.currentStep;
    if (currentStep >= 2) {
      currentStep = 3;
    } else {
      currentStep = currentStep + 1;
    }

    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    if (currentStep <= 1) {
      currentStep = 1;

    } else {
      currentStep = currentStep - 1;
    }

    this.setState({
      currentStep: currentStep
    });
  }
  handleChange = e => {
    let newto = Object.assign({}, this.state.to);
    newto.name = e.target.value;
    this.setState({ to: newto });
  };
  handleChangeStreet = e => {
    let newto = Object.assign({}, this.state.to);
    newto.street = e.target.value;
    this.setState({ to: newto });
  };
  handleCityChanget = e => {
    let newto = Object.assign({}, this.state.to);
    newto.city = e.target.value;
    this.setState({ to: newto });
  };
  handleZipChanget = e => {
    let newto = Object.assign({}, this.state.to);
    newto.zip = e.target.value;
    this.setState({ to: newto });
  };
  handleSateChange = e => {
    let newto = Object.assign({}, this.state.to);
    newto.state = e.target.value;
    this.setState({ to: newto });
  };
  

  render() {
    let heading;
    if (this.state.currentStep === 1) { heading = "Shipping Label Maker"}  
    else if (this.state.currentStep === 2) {heading = "Shipping Label Maker 2"}  
    else {heading = "Shipping Label Maker 3"}  
    let style = {
      width : (this.state.currentStep / 3 * 100) + '%'
    }
    return (
      <div className="container">
      <h1> {heading}</h1>
       <div className="progressbar">
      <div  style={style}></div>
    </div>
        <Step1
          currentStep={this.state.currentStep}
          changed={this.handleChange}
          inputValue={this.state.to}
          steetchange={this.handleChangeStreet}
          cityChange={this.handleCityChanget}
          zipChange={this.handleZipChanget}
          sateChange={this.handleSateChange}
        />
        <Step2 currentStep={this.state.currentStep} />
        <Step3 currentStep={this.state.currentStep} />
        <button className="btn" onClick={this._prev}>Prev</button>
        <button className="btn" onClick={this._next}>Next</button>
      </div>
    );
  }
}

export default BasicWizard;
