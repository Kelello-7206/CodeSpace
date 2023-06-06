// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    //Checks if there is no input
    if (dividend === '' || divider === '') {
      throw "Division not performed. Both values are required in inputs. Try again";
    }

    //Checks if the input iss a number
    if (isNaN(dividend) || isNaN(divider)) {
      throw "Something critical went wrong. Please reload the page";
    }

    //Checks if input is less then zero
    if (dividend <= 0 || divider <= 0) {
      throw "Division not performed. Invalid number provided. Try again";
    }

    //Math trunc removes the decimal places
    result.innerText = Math.trunc(dividend / divider);

  } catch (error) {
    result.innerText = error;

    //console logs the error
    console.error(error)
  }
});
