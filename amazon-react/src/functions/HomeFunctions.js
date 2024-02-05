import React from "react";

const HomeFunctions = {
  setUpPage: () => {
    HomeFunctions.addAndLoopAddedDivs();
    // HomeFunctions.createNOT_FOUND();
    // HomeFunctions.postNOT_FOUND();
    // HomeFunctions.handleSearchBTNS();
    // HomeFunctions.ADD_OPTIONS();
  },
  addAndLoopAddedDivs: function () {
    const ADD_DIVS = this.getADD_DIVS();
    const ALL_BTNS = this.getALL_BTNS();
    this.loopAddDiv(ADD_DIVS);
    this.addClickEvent(ALL_BTNS, ADD_DIVS);
  },
};

export { HomeFunctions };
