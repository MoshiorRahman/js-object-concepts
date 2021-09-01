const Kebria = {
    id: 101,
    name: 'RJ Kebria',
    money: 5000,
    treatDey: function (expense, bokshis, tax) {
        this.money = this.money - expense - bokshis - tax;
        console.log('here555', this)
        return this.money;
    }
}
const heroBalam = {
    id: 102,
    name: 'Hero Balam',
    money: 6000,

}
const normalGolam = {
    id: 102,
    name: 'Normal Golam',
    money: 8000,

}
//1. call
// Kebria.treatDey.call(normalGolam, 700, 50, 70);
// Kebria.treatDey.call(normalGolam, 300, 50, 30);

// 2. apply
Kebria.treatDey.apply(heroBalam, [500, 100, 50]);
Kebria.treatDey.apply(heroBalam, [1000, 200, 100]);

Kebria.treatDey.apply(normalGolam, [1000, 200, 100])