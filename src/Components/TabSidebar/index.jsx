import React from 'react'
import Button from '../Button';
import './tabSidebar.styles.scss'

export default function TabSidebar({tabs,goTo,currentStepIndex}) {
  console.log(tabs)
  const isCurrentTabSelected = (index)=> currentStepIndex === index;

  return (
    <div className="tab-sidebar">
      <div className="tab-sidebar__container">
        {tabs.map((tab, index) => (
          <Button
          onClick={()=>goTo(index)}
            backgroundColor={
              isCurrentTabSelected(index) ? "var(--tertiary-color)" : "inherit"
            }
            padding="15px 0"
            width="80%"
            rounded="var(--rounded-full)"
            color="white"
            borderColor="var(--text-gray)"
          >
            {tab}
          </Button>
        ))}
      
      </div>
    </div>
  );
}
