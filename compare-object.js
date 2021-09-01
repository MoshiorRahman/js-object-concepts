const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;

if (first == third) {
    // console.log('object are equal')
}
else {
    // console.log('object are different')
}
const firstConvert = JSON.stringify(first)
const secondConvert = JSON.stringify(second)

if (firstConvert === secondConvert) {
    console.log('object are equal')
}
else {
    console.log('object are different')
}