import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import "./mystyle.css";
const options = [
  {
    id: 1,
    label: "The Color Red",
    value: "red",
  },
  {
    id: 2,
    label: "The Color Green",
    value: "2",
  },
  {
    id: 3,
    label: "A Shade of Blue",
    value: "blue",
  },
];
const items = [
  {
    title: "1",
    content: "1",
  },
  {
    title: "2",
    content: "2",
  },
  {
    title: "3",
    content: "3",
  },
  {
    title: "4",
    content: "4",
  },
];
export default () => {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      {/*<Accordion items={items} />*/}
      {/*<Search />*/}
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};
