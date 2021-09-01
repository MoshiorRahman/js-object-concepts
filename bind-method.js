const Kebria = {
    id: 101,
    name: 'RJ Kebria',
    money: 5000,
    treatDey: function (expense) {
        this.money = this.money - expense;
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
Kebria.treatDey(100)

const heroTreatDey = Kebria.treatDey.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(50);

const normalGolamTreatDey = Kebria.treatDey.bind(normalGolam);
normalGolamTreatDey(800)