import React from "react";
import { Listbox, Transition } from "@headlessui/react";
import "./select.styles.scss";

const o = [
  { name: "option 1", value: 1 },
  { name: "option 2", value: 2 },
  { name: "option 3", value: 3 },
  { name: "option 4", value: 4 },
  { name: "option 5", value: 5 },
  { name: "option 6", value: 6 },
];

export default function SelectMenu({ label, name, onChange, options = o }) {
  const [selected, setSelected] = React.useState(null);

  function selectHandler(item) {
    setSelected(item);
    //mock input event
    // onChange({target:{
    //   value:item.value,
    //   name:name,
    // }})
  }
  return (
    <div className="dropdown">
      <label className="dropdown__label" htmlFor="">
        {label}
      </label>
      <Listbox value={selected} onChange={selectHandler}>
        <div className="dropdown__container">
          <Listbox.Button
            className={`dropdown__button ${selected && "dropdown--selected"}`}
          >
            {selected ? selected.name : "Select an option"}
          </Listbox.Button>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="dropdown__options">
              {options.map((option, index) => (
                <Listbox.Option className={({active})=>`${active && "active"}`} key={index} value={option}>
                  {({ selected,active }) => (
                    <>
                      <div className={`dropdown__option ${!active && selected && "s"}  `}>
                        {option.name}
                      </div>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
