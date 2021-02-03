import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOnClikTitle = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="ui styled accordion">
      {items.map((item, index) => {
        const active = index === activeIndex ? "active" : "";
        return (
          <React.Fragment key={item.title}>
            <div
              className={`title ${active}`}
              onClick={() => handleOnClikTitle(index)}
            >
              <i className="dropdown icon"></i>
              {item.title}
            </div>
            <div className={`content ${active}`}>
              <p>{item.content}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Accordion;
