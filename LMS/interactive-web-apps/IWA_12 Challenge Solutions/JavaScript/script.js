// scripts.js

const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

const book1 = document.querySelector("#book1");
const status1 = book1.querySelector(".status");
const reserve1 = book1.querySelector(".reserve");
const checkout1 = book1.querySelector(".checkout");
const checkin1 = book1.querySelector(".checkin");

const status1a = status1.textContent;
checkin1.style.color = "black";

if (status1a in STATUS_MAP) {
  status1.style.color = STATUS_MAP[status1a].color;

  reserve1.disabled = !STATUS_MAP[status1a].canReserve;
  checkout1.disabled = !STATUS_MAP[status1a].canCheckout;
  checkin1.disabled = !STATUS_MAP[status1a].canCheckIn;
} else {
  // If the text content is not a valid key, disable the buttons
  reserve1.disabled = true;
  checkout1.disabled = true;
  checkin1.disabled = true;
}

const book2 = document.querySelector("#book2");
const status2 = book2.querySelector(".status");
const reserve2 = book2.querySelector(".reserve");
const checkout2 = book2.querySelector(".checkout");
const checkin2 = book2.querySelector(".checkin");

const status2a = status2.textContent;
checkin2.style.color = "black";

if (status2a in STATUS_MAP) {
  status2.style.color = STATUS_MAP[status2a].color;

  reserve2.disabled = !STATUS_MAP[status1a].canReserve;
  checkout2.disabled = !STATUS_MAP[status1a].canCheckout;
  checkin2.disabled = !STATUS_MAP[status1a].canCheckIn;
} else {
  // If the text content is not a valid key, disable the buttons
  reserve2.disabled = true;
  checkout2.disabled = true;
  checkin2.disabled = true;
}

const book3 = document.querySelector("#book3");
const status3 = book3.querySelector(".status");
const reserve3 = book3.querySelector(".reserve");
const checkout3 = book3.querySelector(".checkout");
const checkin3 = book3.querySelector(".checkin");

const status3a = status3.textContent;
checkin3.style.color = "lightgrey";

if (status3a in STATUS_MAP) {
  status3.style.color = STATUS_MAP[status3a].color;
  reserve3.disabled = !STATUS_MAP[status3a].canReserve;
  checkout3.disabled = !STATUS_MAP[status3a].canCheckout;
  checkin3.disabled = !STATUS_MAP[status3a].canCheckIn;
} else {
  // If the text content is not a valid key, disable the buttons
  reserve3.disabled = true;
  checkout3.disabled = true;
  checkin3.disabled = true;
}
