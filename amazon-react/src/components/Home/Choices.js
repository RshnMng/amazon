import React from "react";

export default function Choices({ keys, choices, id }) {
  let i = 0;
  let options = choices.map((option) => {
    i++;
    return (
      <button id={id} key={i}>
        {option}
      </button>
    );
  });

  return (
    <div className="option-label style-type">
      {keys}
      {options}
    </div>
  );
}
