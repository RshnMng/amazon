const Util = {
  convertIntoFloatNumber: function (data) {
    let number = Number(data);
    let float = number / 100;
    let price = float.toFixed(2);
    return price;
  },
};

export { Util };
