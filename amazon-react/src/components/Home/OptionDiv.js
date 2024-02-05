import React, { useState, useEffect } from "react";
import AddedDiv from "./AddedDiv";
import Choices from "./Choices";

export default function OptionDiv({ id, options }) {
  const [selected, setSelected] = useState(false);
  const [choiceElements, setChoiceElements] = useState("");

  useEffect(() => {
    if (options) {
      let keys = Object.keys(options);
      let choiceElements = keys.map((key) => {
        return <Choices keys={key} choices={options[key]} />;
      });

      setChoiceElements(choiceElements);
    }
  }, []);

  function showAdded() {
    setSelected((prevState) => !prevState);
    setTimeout(() => setSelected((prevState) => !prevState), 2000);
  }
  return (
    <>
      <div id={id} className="option-div">
        {choiceElements}
      </div>
      {/* above id was set to by [OPTIONS.getOPTION_ID(product)] */}
      {selected && <AddedDiv id={id} />}
      <button id={id} className="add-btn js-add-btn" onClick={showAdded}>
        Add to Cart
      </button>
    </>
  );
}
