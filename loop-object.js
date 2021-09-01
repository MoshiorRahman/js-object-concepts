const bottle = {
    color: 'yello',
    hold: 'water',
    price: 50,
    isCleaned: true
}
/* 
for(let i=0; i<10; i++){}
for(const name of names){} // array
for(const prop in student){} // object
*/

//use for in......//
for (const prop in bottle) {
    //1. for getting properties name
    // console.log(prop)

    //2.  for getting value
    // console.log(bottle[prop])

    //3. getting properties and value together
    // console.log(prop, bottle[prop])
}

//use for of......//
const keys = Object.keys(bottle);
// console.log(keys)
for (prop of keys) {
    // console.log(prop, bottle[prop])
}

// use advanced.......//
const entries = Object.entries(bottle)
// console.log(entries)
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value)
}