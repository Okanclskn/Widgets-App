import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }

      setDropdownVisibility(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          className={`ui selection dropdown ${
            dropdownVisibility ? "visible active" : null
          }`}
          onClick={() => setDropdownVisibility(!dropdownVisibility)}
        >
          <i className="dropdown icon"></i>
          <div className="text">
            {selected ? selected.label : "Select a color"}
          </div>
          <div
            className={`menu ${
              dropdownVisibility ? "visible" : null
            } transition`}
          >
            {options.map((option) => {
              if (selected) {
                if (option?.value === selected.value) return null;
              }
              return (
                <div
                  key={option.id}
                  className="item"
                  onClick={() => {
                    onSelectedChange(option);
                  }}
                >
                  {option.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
