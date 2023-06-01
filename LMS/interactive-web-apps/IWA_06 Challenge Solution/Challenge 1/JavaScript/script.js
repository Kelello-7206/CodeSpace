const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// Only change below this line

const primaryValid = primaryPhone;
const secondaryValid = secondaryPhone;


if (primaryPhone === typeof Number) {
  console.log("Primary phone is valid numerical string:", true);
} else {
  console.log("Primary phone is valid numerical string:", false);
}

if (secondaryPhone !== typeof Number) {
  console.log("Secondary phone is valid numerical string:", true);
} else {
  console.log("Secondary phone is valid numerical string:", false);
}

//===	equal value and type

// !==	not equal value or type