// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

try {
    if(dividend == '' && divider == '') throw "Division not performed. Both values are required in inputs. Try again"

    if(dividend <= 0 && divider <= 0) throw "Division not performed. Invalid number provided. Try again"

} catch (error) {
    result.innerText = error
}


//Math.trunc removes decimal places
  result.innerText = Math.trunc(dividend / divider);
});