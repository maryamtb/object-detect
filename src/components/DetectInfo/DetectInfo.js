import React from "react";
import "tachyons";

function convertPerc(value) {
  return parseFloat(value * 100).toFixed(2);
}

const DetectInfo = ({ imageInfo }) => {
  return (
    <div className="ml7 mt4 f4 measure-wide">
      <div className="center">
        <ul className="list pl0">
          {imageInfo.map((imageInfo, index) => (
            <li className="pb3" key={index}><strong>{imageInfo.name}</strong> detected with <strong>{convertPerc(imageInfo.value)}%</strong> accuracy
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetectInfo;
