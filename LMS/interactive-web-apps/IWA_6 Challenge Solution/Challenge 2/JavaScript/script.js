const rent = 400;
const tax = "12%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
let taxAsDecimal = parseInt(tax) / 100;
let startingAfterTax = salary * (1 - taxAsDecimal);
let expenses = rent + transport + food;

if (hourOfDay === null && minuteOfDay === null) {
  console.log(Error);
} else {
  if (hourOfDay === 00 && minuteOfDay === 00) {
     balance = startingAfterTax - expenses;
  }
}

console.log("R" + balance.toFixed(2));
