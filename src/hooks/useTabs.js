import React, { useState } from 'react'

export default function useTabs(components,tabsName) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  
  function goToStep(index) {
    setCurrentStepIndex(index);
    console.log("hi there");
  }

  return {
    currentTab:components[currentStepIndex],
    goTo:goToStep,
    tabs:tabsName,
    currentStepIndex
  }
}
