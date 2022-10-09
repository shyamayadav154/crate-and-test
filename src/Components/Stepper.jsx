import React from "react";
import "./stepper.css";

const s = [{ title: "one" }, { title: "two" }, { title: "three" }];

export default function Stepper({ steps = s, activeStep = 0,goTo }) {
  const lastIndex = steps.length - 1;
  const isColored = index => index<activeStep;
  const isVisited = index => index<=activeStep;
  return (
    <ol className="timelines">
      {steps.map((step, index) => (
        <li style={{flex:lastIndex!== index && 1}} className="timeline">
          <div className="flex-item-center">
            <div onClick={()=>goTo(index)} className={`circle ${isVisited(index) && "active"} `}></div>
            {index !== lastIndex && 
            <div style={{background:isColored(index) && 'yellow'}}  className="line"></div>
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
