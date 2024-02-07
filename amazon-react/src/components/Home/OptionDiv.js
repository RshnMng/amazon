import React, { useState, useEffect, useContext } from "react";
import { products } from "../../data/product";
import AddedDiv from "./AddedDiv";
import Choices from "./Choices";
import { LOCAL_STORAGE } from "../../functions/LocalStorage";
import { localStorageContext } from "../../App.js";
import { Context } from "../../App.js";

export default function OptionDiv({ id, options }) {
  const [selected, setSelected] = useState(false);
  const [choiceElements, setChoiceElements] = useState("");
  const cartItems = useContext(localStorageContext);
  const value = useContext(Context);
  const updateCount = value.updateCount;

  useEffect(() => {
    if (options) {
      let keys = Object.keys(options);
      let choiceElements = keys.map((name) => {
        id += 1;
        return <Choices keys={name} choices={options[name]} id={id} key={id} />;
      });

      setChoiceElements(choiceElements);
    }
  }, []);

  function handleClick(event) {
    showAdded();
    addProductToLocal(event);
    updateCount();
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
    LOCAL_STORAGE.saveToLocalStorage("cartItems", cartItems);
  }

  return (
    <>
      <div id={id} className="option-div">
        {choiceElements}
      </div>
      {selected && <AddedDiv id={id} />}
      <button id={id} className="add-btn js-add-btn" onClick={handleClick}>
        Add to Cart
      </button>
    </>
  );
}
