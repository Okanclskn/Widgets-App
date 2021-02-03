import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import "./mystyle.css";

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
  return (
    <div>
      {/*<Accordion items={items} />*/}
      <Search />
    </div>
  );
};
