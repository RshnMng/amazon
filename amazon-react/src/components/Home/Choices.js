import React from "react";

export default function Choices({ keys, choices }) {
  console.log(choices);
  console.log(keys);
  return <>check</>;
}

//map through keys and then map through keys to add elements in thier proper place

// the following is the code from vanilla js setting the  choice elements / make sure the following
// classes and id's are in the right place for styling

// displayOptions: function (productOptions, optionDiv, id) {
//     for (const style in productOptions) {
//       let options = productOptions[style];
//       const STYLE_DIV = document.createElement("div");
//       const STYLE = document.createElement("div");
//       STYLE_DIV.classList.add(".option-div");
//       STYLE.setAttribute("id", id);
//       STYLE.classList.add("option-label");
//       STYLE.innerText = style;
//       STYLE_DIV.append(STYLE);
//       STYLE_DIV.classList.add("style-div");
//       STYLE.classList.add("style-type");

//       optionDiv.append(STYLE_DIV);
//       this.displayButtons(options, STYLE_DIV);
//       let optionBtns = OPTIONS.getALL_OPTION_BTNS();
//       let styleDivs = OPTIONS.getALL_STYLE_DIVS();
//       OPTIONS.highlightFirstStyleOption(styleDivs);
//       OPTIONS.addStyleEventToOptionBTNS(optionBtns);
//     }
//   },
//   displayButtons: function (options, styleCategory) {
//     options.forEach((option) => {
//       let optionButton = document.createElement("button");
//       optionButton.classList.add("style-choice");
//       optionButton.classList.add("option-button");
//       optionButton.innerText = option;
//       styleCategory.append(optionButton);
//     });
//   },
