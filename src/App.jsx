import { useState } from "react";
import "./App.scss";
import AccountForm from "./Components/AccountForm";
import AddressForm from "./Components/AddressForm";
import TabSidebar from "./Components/TabSidebar";
import UserTabs from "./Components/UserTabs";
import useTabs from "./hooks/useTabs";

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

const topButton = [
  { id: 1, name: "Add User", icon: "user" },
  { id: 2, name: "All Users & Permission", icon: "All User" },
];

function App() {
  const [data, setData] = useState(INITAL_DATA);

  function updateFields(fields) {
    console.log(data);

    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  // const { steps,step, currentStepIndex, currentFormInputs, back, next, isFirstStep,goToStep, isLastStep } =
  //   useMultiStep([
  //     <UserForm {...data} updateFields={updateFields} />,
  //     <AccountForm {...data} updateFields={updateFields} />,
  //     <AddressForm {...data} updateFields={updateFields} />,
  //   ]);

  const [headButton, setHeadButton] = useState(topButton[0]);

  const { goTo, currentTab, tabs, currentStepIndex } = useTabs(
    [<UserTabs />, <AccountForm />, <AddressForm />],
    ["User", "Account", "Address"]
  );
  console.log(tabs);
  return (
    <>
      <TabSidebar currentStepIndex={currentStepIndex} tabs={tabs} goTo={goTo} />
      <main className="container-with-sidebar">
        <div className="">
          {/* <UserTabs /> */}
          <div style={{display:"flex",justifyContent:"center"}}>{currentTab}</div>
        </div>
      </main>
    </>
  );
}

export default App;
