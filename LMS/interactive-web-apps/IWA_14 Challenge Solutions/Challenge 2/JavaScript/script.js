
function add (a, b) {
    return a + b;
}
function multiply (a, b) {
    return a * b;
}
function internal() {
    const added = this.add(this.internal.a, this.internal.b);
    const multipied = this.multiply(this.internal.a, this.internal.b);
    return added * multipied
}; 

/**
 * this function reads the internal objects of both the examples
 * the (this) attaches/call the function add thats above and in the backets it calls the interals
 * the return will simply multiply both the const added and multipied
 */

// Not allowed to change below this
const example1 = {
    internal: {
        a: 2,
        b: 4,
        c: 8,
    },
    add,
    multiply,
  calculate: internal
}
const example2 = {
    internal: {
        a: 2,
        b: 2,
        c: 3,
    },
    add,
    multiply,
  calculate: internal
}
console.log(example1.calculate())
console.log(example2.calculate())