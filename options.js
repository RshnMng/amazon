const OPTIONS = {
	OPTION_DIVS: "",
	STYLE_DIV: [],
	getOPTION_DIVS: function () {
		let OPTION_DIVS = document.querySelectorAll(".option-div");
		return OPTION_DIVS;
	},
	getOPTION_ID: function (product) {
		let id = product.id;
		return id;
	},
	makeOptionsArray: function (products) {
		let PRODUCT_OPTION_ARR = [];
		products.forEach((product) => {
			if (product.options) {
				PRODUCT_OPTION_ARR.push({
					name: product.name,
					values: { ...product.options },
					index: product.id - 1,
				});
			}
		});

		return PRODUCT_OPTION_ARR;
	},
	filterProductsWithOptions: function (PRODUCT_OPTION_ARR, OPTION_DIVS) {
		let onlyProductsWithOptions = [];
		PRODUCT_OPTION_ARR.forEach((product) => {
			const optionDivByIndex = OPTION_DIVS[product.index];

			onlyProductsWithOptions.push({ optionDivByIndex, ...product.values });
		});
		return onlyProductsWithOptions;
	},
	getOptionCategories: function (onlyProductsWithOptions) {
		onlyProductsWithOptions.map((product) => {
			let id = product.optionDivByIndex.id;
			let styleOption = Object.keys(product);
			styleOption.shift();
			styleOption.map((style) => {
				this.STYLE_DIV.push(this.createOptionDisplay(style, product[style], id));
			});
		});
		this.addOptionsToPage(this.STYLE_DIV);
	},

	createOptionDisplay: function (style, optionChoice, id) {
		const STYLE_DIV = document.createElement("div");
		const STYLE = document.createElement("div");
		STYLE_DIV.classList.add(".option-div");
		STYLE.setAttribute("id", id);
		STYLE.classList.add("option-label");

		STYLE.innerText = style;
		STYLE_DIV.append(STYLE);

		optionChoice.forEach((choice) => {
			const STYLE_CHOICE = document.createElement("button");
			STYLE_CHOICE.classList.add("style-choice");
			STYLE_CHOICE.classList.add("option-button");
			STYLE_CHOICE.innerText = choice;
			STYLE_DIV.append(STYLE_CHOICE);
		});

		STYLE_DIV.classList.add("style-div");
		STYLE.classList.add("style-type");
		return STYLE_DIV;
	},
	addOptionsToPage(STYLE_DIV) {
		STYLE_DIV.forEach((styleDiv) => {
			let styleId = styleDiv.childNodes[0].id;
			let productDiv = document.getElementById(`${styleId}`);
			let optionDiv = productDiv.childNodes[11];
			optionDiv.append(styleDiv);
		});
	},
	getALL_OPTION_BTNS: function () {
		const ALL_OPTION_BTNS = document.querySelectorAll(".option-button");
		return ALL_OPTION_BTNS;
	},
	getALL_STYLE_DIVS: function () {
		const ALL_STYLE_DIVS = document.querySelectorAll(".style-div");
		return ALL_STYLE_DIVS;
	},
	highlightFirstStyleOption: function (styleDivs) {
		styleDivs.forEach((styleDiv) => {
			let firstOptionBtn = styleDiv.childNodes[1];
			firstOptionBtn.classList.add("clicked");
		});
	},
	addStyleEventToOptionBTNS: function (optionBtns) {
		optionBtns.forEach((choice) => {
			choice.addEventListener("click", this.highlightClickedOption);
		});
	},
	highlightClickedOption: function (event) {
		const PARENT_DIV = event.target.parentNode;

		PARENT_DIV.childNodes.forEach((optionBtn) => {
			optionBtn.classList.remove("clicked");
		});

		event.target.classList.add("clicked");
	},
};

export { OPTIONS };
