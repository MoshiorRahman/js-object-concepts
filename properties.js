const bottle = { color: 'yello', hold: 'water', price: 50, isCleaned: true }

//getting all properties and values ..//
//1. get properties
const keys = Object.keys(bottle);
// console.log(keys)
//2. get values
const values = Object.values(bottle);
// console.log(values)
//3. get values and properties together
const pairs = Object.entries(bottle);
// console.log(pairs)

// seal and freeze............//
// Object.seal(bottle);
Object.freeze(bottle)
bottle.price = 100;
bottle.height = 17;
delete bottle.isCleaned;
console.log(bottle)