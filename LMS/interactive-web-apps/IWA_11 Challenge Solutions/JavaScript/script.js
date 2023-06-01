const order1 = document.querySelector('[data-key="order1"]');
const biscuits1 = order1.querySelector(".biscuits .count");
const donuts1 = order1.querySelector(".donuts .count");
const pancakes1 = order1.querySelector(".pancakes .count");
const status1 = order1.querySelector(".status dd");

//The getAttribute method is used to get the value of a specified attribute of an element

biscuits1.innerHTML = order1.getAttribute("data-biscuits");
donuts1.innerHTML = order1.getAttribute("data-donuts");
pancakes1.innerHTML = order1.getAttribute("data-pancakes");
status1.innerHTML = order1.querySelector("data-delivered ") === status1 ? "Delivered" : "Pending";

//The "innerHTML" property is used to set or retrieve the HTML content inside an element

const order2 = document.querySelector('[data-key="order2"]');
const biscuits2 = order2.querySelector(".biscuits .count");
const donuts2 = order2.querySelector(".donuts .count");
const pancakes2 = order2.querySelector(".pancakes .count");
const status2 = order2.querySelector(".status dd");

biscuits2.innerHTML = order2.getAttribute("data-biscuits");
donuts2.innerHTML = order2.getAttribute("data-donuts");
pancakes2.innerHTML = order2.getAttribute("data-pancakes");
status2.innerHTML = order2.querySelector("data-delivered ") === status2 ? "Delivered" : "Pending";

const order3 = document.querySelector('[data-key="order3"]');
const biscuits3 = order3.querySelector(".biscuits .count");
const donuts3 = order3.querySelector(".donuts .count");
const pancakes3 = order3.querySelector(".pancakes .count");
const status3 = order3.querySelector(".status dd");

biscuits3.innerHTML = order3.getAttribute("data-biscuits");
donuts3.innerHTML = order3.getAttribute("data-donuts");
pancakes3.innerHTML = order3.getAttribute("data-pancakes");
status3.innerHTML = order3.querySelector("data-delivered ") === status3 ? "Pending":"Delivered";
