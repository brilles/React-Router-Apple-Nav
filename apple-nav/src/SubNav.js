import React from "react";

export default function SubNav(props) {
  return (
    <div className="mac-wrapper">
      {props.data.map(item => {
        return (
          <div key={item.name} className="mac-icons">
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}
