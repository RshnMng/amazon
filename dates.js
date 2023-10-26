const DATES = {
  days: {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    0: "Sunday",
  },
  months: {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  },
  nextDay: "",
  threeDay: "",
  fiveDay: "",
  nextDayMonth: "",
  threeDayMonth: "",
  fiveDayMonth: "",
  nextDayDate: "",
  threeDayDate: "",
  fiveDayDate: "",
  getDates: function () {
    let currentDate = new Date();
    let day = currentDate.getDay();
    let month = currentDate.getMonth();
    let date = currentDate.getDate();
    this.getFutureDayOfWeek(day);
    this.getFutureMonth(month, date);
  },
  getFutureDayOfWeek: function (day) {
    this.nextDay = this.getNextDayDay(day);
    this.threeDay = this.getThreeDaysDay(day);
    this.fiveDay = this.getFiveDaysDay(day);
  },
  getFutureMonth: function (month, date) {
    if (
      month == 0 ||
      month == 2 ||
      month == 4 ||
      month == 6 ||
      month == 7 ||
      month == 9 ||
      month == 11
    ) {
      this.handle31Days(month, date);
    } else if (month == 1) {
      this.handleFeb(month, date);
    } else {
      this.handle30Days(month, date);
    }
  },
  handle31Days: function (month, date) {
    this.nextDay31Month(month, date);
    this.threeDay31Month(month, date);
    this.fiveDay31Month(month, date);
  },
  handle30Days: function (month, date) {
    this.nextDay30month(month, date);
    this.threeDay30Month(month, date);
    this.fiveDay30Month(month, date);
  },
  handleFeb: function (month, date) {
    this.handleNextDayFeb(month, date);
    this.handleThreeDayFeb(month, date);
    this.handleFiveDayFeb(month, date);
  },
  fiveDay31Month: function (month, date) {
    if (date >= 27 && month == 11) {
      let dateIndex = date + 5 - 31;
      let monthIndex = month + 1 - 12;
      let fiveDayShippingMonth = DATES.months[monthIndex];
      let fiveDayShippingDate = dateIndex;

      this.fiveDayMonth = fiveDayShippingMonth;
      this.fiveDayDate = fiveDayShippingDate;
    } else if (date >= 27 && month != 11) {
      let dateIndex = date + 5 - 31;
      let monthIndex = month + 1;
      let fiveDayShippingMonth = DATES.months[monthIndex];
      let fiveDayShippingDate = dateIndex;

      this.fiveDayMonth = fiveDayShippingMonth;
      this.fiveDayDate = fiveDayShippingDate;
    } else {
      let dateIndex = date + 5;
      let fiveDayShippingMonth = DATES.months[month];
      let fiveDayShippingDate = dateIndex;

      this.fiveDayMonth = fiveDayShippingMonth;
      this.fiveDayDate = fiveDayShippingDate;
    }
  },
  threeDay31Month: function (month, date) {
    if (date >= 29 && month == 11) {
      let dateIndex = date + 3 - 31;
      let monthIndex = month + 1 - 12;
      let threeDayShippingMonth = DATES.months[monthIndex];
      let threeDayShippingDate = dateIndex;

      this.threeDayMonth = threeDayShippingMonth;
      this.threeDayDate = threeDayShippingDate;
    } else if (date >= 29 && month != 11) {
      let dateIndex = date + 3 - 31;
      let monthIndex = month + 1;
      let threeDayShippingMonth = DATES.months[monthIndex];
      let threeDayShippingDate = dateIndex;

      this.threeDayMonth = threeDayShippingMonth;
      this.threeDayDate = threeDayShippingDate;
    } else {
      let dateIndex = date + 3;
      let threeDayShippingMonth = DATES.months[month];
      let threeDayShippingDate = dateIndex;

      this.threeDayMonth = threeDayShippingMonth;
      this.threeDayDate = threeDayShippingDate;
    }
  },
  nextDay31Month: function (month, date) {
    if (date == 31 && month == 11) {
      let dateIndex = date + 1 - 31;
      let monthIndex = month + 1 - 12;
      let nextDayShippingMonth = DATES.months[monthIndex];
      let nextDayShippingDate = dateIndex;

      this.nextDayMonth = nextDayShippingMonth;
      this.nextDayDate = nextDayShippingDate;
    } else if (date == 31 && month != 11) {
      let dateIndex = date + 1 - 31;
      let monthIndex = month + 1;
      let nextDayShippingMonth = DATES.months[monthIndex];
      let nextDayShippingDate = dateIndex;

      this.nextDayMonth = nextDayShippingMonth;
      this.nextDayDate = nextDayShippingDate;
    } else {
      let dateIndex = date + 1;
      let nextDayShippingMonth = DATES.months[month];
      let nextDayShippingDate = dateIndex;

      this.nextDayMonth = nextDayShippingMonth;
      this.nextDayDate = nextDayShippingDate;
    }
  },
  nextDay30month: function (month, date) {
    if (date == 30 && month == 11) {
      let dateIndex = date + 1 - 30;
      let monthIndex = month + 1 - 12;
      let nextDayShippingMonth = DATES.months[monthIndex];
      let nextDayShippingDate = dateIndex;

      this.nextDayMonth = nextDayShippingMonth;
      this.nextDayDate = nextDayShippingDate;
    } else if (date == 30 && month != 11) {
      let dateIndex = date + 1 - 30;
      let monthIndex = month + 1;
      let nextDayShippingMonth = DATES.months[monthIndex];
      let nextDayShippingDate = dateIndex;

      this.nextDayMonth = nextDayShippingMonth;
      this.nextDayDate = nextDayShippingDate;
    } else {
      let dateIndex = date + 1;
      let nextDayShippingMonth = DATES.months[month];
      let nextDayShippingDate = dateIndex;

      this.nextDayMonth = nextDayShippingMonth;
      this.nextDayDate = nextDayShippingDate;
    }
  },
  threeDay30Month: function (month, date) {
    if (date >= 28) {
      let dateIndex = date + 3 - 30;
      let monthIndex = month + 1;
      let threeDayShippingMonth = DATES.months[monthIndex];
      let threeDayShippingDate = dateIndex;

      this.threeDayMonth = threeDayShippingMonth;
      this.threeDayDate = threeDayShippingDate;
    } else {
      let dateIndex = date + 3;
      let threeDayShippingMonth = DATES.months[month];
      let threeDayShippingDate = dateIndex;

      this.threeDayMonth = threeDayShippingMonth;
      this.threeDayDate = threeDayShippingDate;
    }
  },
  fiveDay30Month: function (month, date) {
    if (date >= 26) {
      let dateIndex = date + 5 - 30;
      let monthIndex = month + 1;
      let fiveDayShippingMonth = DATES.months[monthIndex];
      let fiveDayShippingDate = dateIndex;

      this.fiveDayMonth = fiveDayShippingMonth;
      this.fiveDayDate = fiveDayShippingDate;
    } else {
      let dateIndex = date + 5;
      let fiveDayShippingMonth = DATES.months[month];
      let fiveDayShippingDate = dateIndex;

      this.fiveDayMonth = fiveDayShippingMonth;
      this.fiveDayDate = fiveDayShippingDate;
    }
  },
  handleNextDayFeb: function (month, date) {
    if (date == 28) {
      let nextDayShippingDate = 1;
      let nextDayShippingMonth = DATES.months[2];

      this.nextDayMonth = nextDayShippingMonth;
      this.nextDayDate = nextDayShippingDate;
    } else {
      let nextDayShippingDate = date + 1;
      let nextDayShippingMonth = DATES.months[month];

      this.nextDayMonth = nextDayShippingMonth;
      this.nextDayDate = nextDayShippingDate;
    }
  },
  handleThreeDayFeb: function (month, date) {
    if (date >= 25) {
      let threeDayShippingMonth = DATES.months[2];
      let threeDayShippingDate = date + 3 - 28;

      this.threeDayMonth = threeDayShippingMonth;
      this.threeDayDate = threeDayShippingDate;
    } else {
      let threeDayShippingMonth = DATES.months[month];
      let threeDayShippingDate = date + 3;

      this.threeDayMonth = threeDayShippingMonth;
      this.threeDayDate = threeDayShippingDate;
    }
  },
  handleFiveDayFeb: function (month, date) {
    if (date >= 24) {
      let fiveDayShippingMonth = DATES.monthsthree;
      let fiveDayShippingDate = date + 5 - 28;

      this.fiveDayMonth = fiveDayShippingMonth;
      this.fiveDayDate = fiveDayShippingDate;
    } else {
      let fiveDayShippingMonth = DATES.months[month];
      let fiveDayShippingDate = date + 5;

      this.fiveDayMonth = fiveDayShippingMonth;
      this.fiveDayDate = fiveDayShippingDate;
    }
  },
  getNextDayDay: function (day) {
    let nextDayShipping;
    let newDayIndex = day + 1;
    if (newDayIndex > 6) {
      newDayIndex = newDayIndex - 7;
      nextDayShipping = DATES.days[newDayIndex];
    } else {
      nextDayShipping = DATES.days[newDayIndex];
    }

    return nextDayShipping;
  },
  getThreeDaysDay: function (day) {
    let threeDayShipping;
    if (day >= 4) {
      let threeDayIndex = day + 3 - 7;
      threeDayShipping = DATES.days[threeDayIndex];
    } else {
      let threeDayIndex = day + 3;
      threeDayShipping = DATES.days[threeDayIndex];
    }

    return threeDayShipping;
  },
  getFiveDaysDay: function (day) {
    let fiveDayShipping;
    if (day >= 2) {
      let fiveDayIndex = day + 5 - 7;
      fiveDayShipping = DATES.days[fiveDayIndex];
    } else {
      let fiveDayIndex = day + 5;
      fiveDayShipping = DATES.days[fiveDayIndex];
    }

    return fiveDayShipping;
  },
};

export { DATES };
