import React, { useState } from "react";
import AddedDiv from "./AddedDiv";

export default function OptionDiv({ id }) {
  const [selected, setSelected] = useState(false);

  function showAdded() {
    setSelected((prevState) => !prevState);
    setTimeout(() => setSelected((prevState) => !prevState), 2000);
  }
  return (
    <>
      <div id={id} className="option-div"></div>
      {/* above id was set to by [OPTIONS.getOPTION_ID(product)] */}
      {selected && <AddedDiv id={id} />}
      <button id={id} className="add-btn js-add-btn" onClick={showAdded}>
        Add to Cart
      </button>
    </>
  );
}
