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

// optional 1
const obj = { a: 1, b: 7, c: 3, length: 2 };

console.log(Object.keys(obj).length);


// optional 2
const obj1 = { module: 35, video: 2 };

const obj2 = { module: 35, video: 2 };

console.log(obj1 === obj2);

//optional 3
const getGirlFriend = (name = "chokina") => "name"; console.log(getGirlFriend());