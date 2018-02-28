import React from 'react';
import './ShippingLabelMaker.css'
const Step1 = (props) => {

  if (props.currentStep !== 1) {
   return null;
  }
  
  return (
   
    <div className="form">
    
    <label className="desc" id="name" > Name</label>
    <input type="text" placeholder="name" name="name" className="name" value={props.inputValue.name}  onChange={props.changed}/>
    <label className="desc" id="street" >street</label>
    <input type="text" placeholder="street" name="street" className="street"  value={props.inputValue.street} onChange={props.steetchange}/>
    <label className="desc" id="city" >city</label>
    <input type="text" placeholder="city" className="city" name="city"  value={props.inputValue.city} onChange={props.cityChange}/>
    <label className="desc" id="sate" >sate</label>
    <input type="text" placeholder="sate" className="sate" name="sate" value={props.inputValue.state} onChange={props.sateChange}/>
    <label className="desc" id="zip">zip</label>
    <input type="text" placeholder="zip" className="zip" name="zip"  value={props.inputValue.zip} onChange={props.zipChange}/>
    </div>
    
    
  );
};

export default Step1;
