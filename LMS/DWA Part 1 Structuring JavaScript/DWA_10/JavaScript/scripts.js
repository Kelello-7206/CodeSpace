/*NOTE used prettier extension to format the code*/

const MAX_NUMBER = 15;
const MIN_NUMBER = -10;
const STEP_AMOUNT = 5;

/*Global constants set at the top and never change*/

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');

const subtractHandler = () => {
  const newValue = parseInt(number.value) - STEP_AMOUNT;
  number.value = newValue;

  if (add.disabled === true) {
    add.disabled = false;
  }

  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }
};

  /*parseInt treats the value as a number not a character*/

  const addHandler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT;
    number.value = newValue;

    if (subtract.disabled === true) {
      subtract.disabled = false;
    }

    if (newValue >= MAX_NUMBER) {
      add.disabled = true;
    }
  };

/*addEventListener listens for the event and then does something*/
subtract.addEventListener("click", subtractHandler);

add.addEventListener("click", addHandler);
