import React from "react";

const LOCAL_STORAGE = {
  saveToLocalStorage: (name, itemToSave) => {
    let itemJSON = JSON.stringify(itemToSave);
    localStorage.setItem(name, itemJSON);
  },
};

export { LOCAL_STORAGE };
