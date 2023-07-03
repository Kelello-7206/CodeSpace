const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// console log each name to the console
names.forEach(name => { console.log(name);});

// console log each name with a matching province
names.forEach((name, i) =>{ console.log(`${name} (${provinces[i]})`)});

// all province names and turn the string to all uppercase
const upperCase = provinces.map(upper => upper.toUpperCase());
console.log(upperCase);

//map that has the amount of characters in each name
const name1 = names.map(name1 => name1.length);
console.log(name1);

// const name1 = names.map(name1 => name1.length);
// for(let i = 0;i < name1.length;i++ ){
//   console.log(name1)
// } // console logs 7 times

// Sort all provinces 
const sort = provinces.sort()
console.log(sort);

//removes all provinces that have the word "Cape" in them
const filter = provinces.filter( removeCape => !removeCape.includes('Cape'));
console.log(filter.length);

//determine whether  name contains 'S' 
const sWord = names.map(name => name.includes('S')).toString().toLowerCase()
console.log(sWord)

// reduce turns the names and provinces into an object
const namesAndProvinces = names.reduce((obj, name, i) => {
  obj[name] = provinces[i];
  return obj;
}, {})
console.log(namesAndProvinces);


const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Use forEach to console log each product name to the console
products.forEach(product => {
  console.log(product.product);
});

// // Use filter to filter out products that have a name longer than 5 characters
// const filteredProducts = products.filter(product => product.product.length <= 5);
// console.log(filteredProducts);

// // Using both filter and map, convert all prices that are strings to numbers,
// // and remove all products from the array that do not have prices.
// // After this has been done, use reduce to calculate the combined price of all remaining products.
// const totalPrice = products
//   .filter(product => typeof product.price === 'number' || !isNaN(Number(product.price)))
//   .map(product => ({ ...product, price: Number(product.price) }))
//   .reduce((total, product) => total + product.price, 0);
// console.log(totalPrice);

// // Use reduce to concatenate all product names to create a string
// const productNamesString = products.reduce((str, product, index) => {
//   if (index === 0) {
//     return product.product;
//   } else if (index === products.length - 1) {
//     return str + ' and ' + product.product;
//   } else {
//     return str + ', ' + product.product;
//   }
// }, '');
// console.log(productNamesString);

// // Use reduce to calculate both the highest and lowest-priced items
// const { highest, lowest } = products.reduce((result, product) => {
//   if (product.price > result.highest.price) {
//     result.highest = product;
//   }
//   if (product.price < result.lowest.price) {
//     result.lowest = product;
//   }
//   return result;
// }, { highest: { price: -Infinity }, lowest: { price: Infinity } });
// console.log(`Highest: ${highest.product}. Lowest: ${lowest.product}`);

// // Using only Object.entries and reduce, recreate the object with the exact same values.
// // However, change the object keys as specified
// const transformedProducts = Object.entries(products).reduce((obj, [key, value]) => {
//   const transformedKey = key === 'product' ? 'name' : (key === 'price' ? 'cost' : key);
//   obj[transformedKey] = value;
//   return obj;
// }, {});
// console.log(transformedProducts);

