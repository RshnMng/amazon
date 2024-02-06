import React from "react";

export default function Choices({ keys, choices }) {
  let options = choices.map((option) => {
    return <button>{option}</button>;
  });
  let i = 0;
  return (
    <>
      <div key={(i += 1)} className="option-label style-type">
        {keys}
        {options}
      </div>
    </>
  );
}
