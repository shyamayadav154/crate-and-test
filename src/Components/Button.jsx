import React from "react";
import "./button.styles.scss";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Button({ padding,type,borderColor,width, rounded,children,color,backgroundColor,...props }) {
  return (
    <button 
    style={{padding,width,backgroundColor,color,borderRadius:rounded,border:"none",border:"1px solid "+borderColor}}
   className="button"
      {...props}
    >
      {children}
    </button>
  );
}
