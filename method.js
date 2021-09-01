const student = {
    id: 101,
    name: 'RJ Kebria',
    money: 5000,
    major: 'mathmetics',
    isRich: false,
    subjects: ['english', 'economics', 'calculus'],
    bastFriend: {
        name: 'kundu',
        major: 'mathmetick',

    },
    takeExam: function () {
        console.log(this.name, 'taking exam')
    },
    treatDe: function (expense, boksish) {
        this.money = this.money - expense - boksish;
        return this.money;
    }
}
student.takeExam();
const remaining1 = student.treatDe(800, 60);
const remaining2 = student.treatDe(700, 40);
console.log(remaining2);