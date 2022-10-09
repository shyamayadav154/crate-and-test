import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import DropdownSearch from "./Components/DropdownSearch";
import useMultiStep from "./hooks/useMultiStep";
import AddressForm from "./Components/AddressForm";
import UserForm from "./Components/UserForm";
import AccountForm from "./Components/AccountForm";
import Stepper from "./Components/Stepper";

const INITAL_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  accountName: "",
  accountNo: "",
  routingNo: "",
  accountType: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
};

function App() {
  const [data, setData] = useState(INITAL_DATA);

  function updateFields(fields){
    console.log(data)

    setData(prev=>{
      return {...prev,...fields}
    })


  }

  const { steps,step, currentStepIndex, currentFormInputs, back, next, isFirstStep,goToStep, isLastStep } =
    useMultiStep([
      <UserForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmitHandler(e) {
    e.preventDefault();
    if(!isLastStep) return next()
    alert('account created successfully')
  }
  console.log(currentFormInputs);
  return (
    <div className="grid-center">
      {/* <DropdownSearch/> */}
      <h1>form multi step</h1>

      <Stepper goTo={goToStep} activeStep={currentStepIndex}/>

      <section className="card">
        <form>
          <div>
            {step}/{steps}
          </div>
          
          {currentFormInputs}

          {isFirstStep ? null : (
            <button type="button" onClick={back}>
              back
            </button>
          )}

          <button type="submit" onClick={onSubmitHandler}>
            {isLastStep ? "submit" : "next"}
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
