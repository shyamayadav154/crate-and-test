import React, { useState } from "react";

export default function useMultiStep(steps) {
    
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => {
      if (steps >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goToStep(index) {
    setCurrentStepIndex(index);
    console.log('hi there')
  }
  return {
    currentStepIndex,
    step: currentStepIndex+1,
    currentFormInputs: steps[currentStepIndex],
    steps:steps.length,
    goToStep,
    next,
    back,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
}
