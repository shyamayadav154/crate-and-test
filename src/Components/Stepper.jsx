import React from "react";
import "./stepper.css";

const s = [{ title: "one" }, { title: "two" }, { title: "three" }];

export default function Stepper({ steps = s, activeStep = 0 }) {
  const lastIndex = steps.length - 1;
  return (
    <ol className="timelines">
      {steps.map((step, index) => (
        <li style={{flex:lastIndex!== index && 1}} className="timeline">
          <div className="flex-item-center">
            <div className={`circle ${activeStep === index && "active"} `}></div>
            {index !== lastIndex && 
            <div className="line"></div>
            }
          </div>

          <div className="timeline-title">
            <div>{step.title}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}
