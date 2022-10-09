import React, { useRef, useState } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";
import "./dropdown.css";

const options = ["hello", "world", "this", "is", "dog"];

export default function DropdownSearch() {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const ref = useRef();
  useOnClickOutside(ref, () => setFilteredData([]));

  function onChangeHandlers(e) {
    const searchWord = e.target.value;
    setQuery(searchWord);
    const newFilter = options.filter((value) => {
      return value.includes(searchWord);
    });
    setFilteredData(newFilter);
  }

  function arrowClickHandler() {
    if (filteredData.length == 0) {
      setFilteredData(options);
    } else {
      setFilteredData([]);
    }
  }

  return (
    <section>
      <div className="container">
        <div className="dd-container">
          <input
            value={query}
            onChange={onChangeHandlers}
            className="fix-width"
            type="text"
            onBlur={() => setFilteredData([])}
            // onFocus={onChangeHandlers}
          />
          {filteredData.length > 0 && (
            <div ref={ref} className="dropdown-list">
              {filteredData.map((item) => {
                return (
                  <div
                    onMouseDown={() => setQuery(item)}
                    className="dropdown-item"
                    key={item}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <span className="arrow" onClick={arrowClickHandler}>
          down
        </span>
      </div>
    </section>
  );
}
