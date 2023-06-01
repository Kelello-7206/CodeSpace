let state = "idle"
let user = null
let calculated = "1"

// Only allowed to change below

const logCalc = () => {
  const isString = typeof calculated === "string"; // "numerical-string" not a valid string type in JavaScript, so the comparison would always return false
  const calculatedAsNumber = isString ? parseFloat(calculated) : calculated; // parseNumber() is not a built-in function in JavaScript; 
  calculated = calculatedAsNumber + 1;
};

const calcUser = () => {
  logCalc();
  if (calculated > 2) {
    user = "John";
    state = "requesting";
  }
  if (calculated > 3) state = "idle";
};

const checkUser = () => {
  if (user && state === "requesting") {
    console.log(`User: ${user} (${calculated})`);
  }
};

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()
