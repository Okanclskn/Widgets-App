import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";
const options = [
  {
    id: 1,
    label: "Afrikaans",
    value: "af",
  },
  {
    id: 2,
    label: "Arabic",
    value: "ar",
  },
  {
    id: 3,
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(null);
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          ></input>
        </div>
      </div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label={"Select a Language"}
      ></Dropdown>
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={searchText} />
    </div>
  );
};

export default Translate;
