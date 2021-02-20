import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <>
      <div>
        <h4 className="p1" style={{'fontWeight': 400, fontSize: '24px'}}>
          {"AI Object Detection #foodEdition"}
        </h4>
        <p>Insert the link of a food item below </p>
      </div>
      <div>
        <div className="center">
          <div className="form pa4 br3 shadow-5">
            <input className="w100 f6 pa2 center grow" type="text" placeholder="https://preppykitchen.com/wp-content/uploads/2019/08/panncake-feature-n-768x1088.jpg"onChange={onInputChange}/>
            <button className="w30 grow link center" onClick={onButtonSubmit}>Detect</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageLinkForm;
