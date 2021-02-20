import React from "react";

const ImageRecognition = ({ imageURL }) => {
  return (
    <div className="center">
        <div className="absolute mt4">
            <img src={imageURL} alt="" width="280px" height="auto"/>
        </div>
    </div>
  );
};

export default ImageRecognition;
