import React from "react";

export default function Mac(props) {
  return (
    <div className="mac-wrapper">
      {props.macData.map(macsvg => {
        return (
          <div className="mac-icons">
            <img src={macsvg.icon} alt={macsvg.name} />
            <p>{macsvg.name}</p>
          </div>
        );
      })}
    </div>
  );
}
