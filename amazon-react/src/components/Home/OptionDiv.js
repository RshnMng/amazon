import React, { useState, useEffect, useContext } from "react";
import { products } from "../../data/product";
import AddedDiv from "./AddedDiv";
import Choices from "./Choices";
import { LOCAL_STORAGE } from "../../functions/LocalStorage";
import { localStorageContext } from "../../App.js";

export default function OptionDiv({ id, options }) {
  const [selected, setSelected] = useState(false);
  const [choiceElements, setChoiceElements] = useState("");
  const cartItems = useContext(localStorageContext);

  useEffect(() => {
    if (options) {
      let keys = Object.keys(options);
      let choiceElements = keys.map((key) => {
        return <Choices keys={key} choices={options[key]} />;
      });

      setChoiceElements(choiceElements);
    }
  }, []);

  function handleClick(event) {
    showAdded();
    addProductToLocal(event);
  }

  function showAdded() {
    setSelected((prevState) => !prevState);
    setTimeout(() => setSelected((prevState) => !prevState), 2000);
  }

  function addProductToLocal(event) {
    const productIndex = event.target.id;
    const selectedItem = products[productIndex - 1];
    const productQuantity = document.getElementById(`drop-menu-${id}`).value;
    selectedItem.productQuantity = productQuantity;
    cartItems.push(selectedItem);

    // 3. fix errors in console
    // 4. fix price cents display so it looks like dollars and cents

    LOCAL_STORAGE.saveToLocalStorage("cartItems", cartItems);
  }

  return (
    <>
      <div key={id}>
        <div id={id} key={id} className="option-div">
          {choiceElements}
        </div>
        {/* above id was set to by [OPTIONS.getOPTION_ID(product)] */}
        {selected && <AddedDiv id={id} />}
        <button id={id} className="add-btn js-add-btn" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </>
  );
}
