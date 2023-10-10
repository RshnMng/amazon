import { SET_UP_DATA } from "./setPage.js";
import { products } from "./product.js";

const SEARCH = {
  searchResults: [],
  getSEARCH_BTN: function () {
    const SEARCH_BTN = document.querySelector(".search-btn");
    return SEARCH_BTN;
  },
  getSEARCH_BAR: function () {
    const SEARCH_BAR = document.querySelector(".search-bar");
    return SEARCH_BAR;
  },
  addSEARCH_EVENT_LISTENERS: function (searchBar, searchBtn) {
    searchBar.addEventListener("keyup", (event) =>
      this.handleSearch(searchBar)
    );
    searchBtn.addEventListener("click", (event) =>
      this.handleSearch(searchBar)
    );
  },
  handleSearch: function (searchBar) {
    let searchArr = this.getSearchText(searchBar);

    if (event.key == " ") {
      this.disableSpaceBar();
    } else if (searchBar.value.length < 4) {
      this.emptySearchResultsArray();
      SET_UP_DATA.setUpPage(products);

      return;
    } else if (event.key === "Backspace") {
      this.emptySearchResultsArray();
    } else {
      this.cycleThroughKeyWords(searchArr, products);
    }
  },
  getSearchText: function (searchBar) {
    let searchText = searchBar.value;
    let searchContent = searchText.toLowerCase();
    let searchArr = searchContent.split(" ");
    return searchArr;
  },
  disableSpaceBar: function () {
    return;
  },
  emptySearchResultsArray: function () {
    return (this.searchResults = []);
  },
  cycleThroughKeyWords: function (searchArr, products) {
    products.map((product) => {
      let productKeyWords = product.keywords;
      productKeyWords.forEach((keyword) => {
        if (
          keyword.includes(searchArr) &&
          !this.searchResults.includes(product)
        ) {
          this.searchResults.push(product);
        } else {
          return;
        }
      });
    });
    this.displaySearchProducts(this.searchResults);
  },

  displaySearchProducts: function (searchResults) {
    SET_UP_DATA.setUpPage(searchResults);
  },
};

export { SEARCH };
