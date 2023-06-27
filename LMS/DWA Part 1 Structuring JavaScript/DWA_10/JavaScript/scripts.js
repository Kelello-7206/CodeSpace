const MAX_NUMBER = 12;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;
const RESET =parseInt(0);

/*Global constants set at the top and never change*/

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const reset = document.querySelector('[data-key="reset"]');

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


  const resetHandler = () => {
    const newValue = parseInt(RESET) ;
    number.value = newValue

   for(let i = number.value; i <= 10; i++){
    if(number.value <= 10){
      alert(" the counter has been reset");
    }break
   }
  }

/*addEventListener listens for the event and then does something*/
subtract.addEventListener("click", subtractHandler);

add.addEventListener("click", addHandler);

reset.addEventListener("click", resetHandler);