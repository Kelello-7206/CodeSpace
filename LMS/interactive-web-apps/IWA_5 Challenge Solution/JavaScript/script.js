const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING = "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = "0";

const location = "RSA";
const currency = "R";
const customers = 1;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

const totalCost = shoes + toys + shirts + batteries + pens;
let shipping = 0;

if (totalCost >= 1000 && customers === 1) {
  if (location === "RSA") {
    shipping = 400;
  }
  if (location === "NAM" && customers === 1) {
    shipping = 600;
  }
  if (location === "NK") {
    console.log(BANNED_WARNING);
    shipping = null;
  }
  if (customers > 2) {
    console.log("Price", totalCost + shipping);
  }
}

if (location !== "NK") {
    console.log("Price:", currency, totalCost + shipping);
  }

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
  console.log("Price:", currency, totalCost + shipping);
}




