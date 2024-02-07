import React from "react";

const LOCAL_STORAGE = {
  saveToLocalStorage: (name, itemToSave) => {
    let itemJSON = JSON.stringify(itemToSave);
    localStorage.setItem(name, itemJSON);
  },
  getLocalStorage: (name) => {
    const itemJSON = localStorage.getItem(name);
    const item = JSON.parse(itemJSON);
    return item;
  },
};

export { LOCAL_STORAGE };
