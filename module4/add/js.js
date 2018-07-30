// ---------------------------1------------------------------
const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
};

user.mood = 'happy';

user.hobby = 'javascript';

delete user.premium;

for (const keys in user){
    console.log(keys, user[keys]);
}

const keys = Object.keys(user);

for (key of keys){
    console.log(keys);
}

const keys = Object.entries(user);

console.log(user);

// ---------------------------1------------------------------
// ---------------------------2------------------------------

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
};

let max = 0;
let maxName;

for (value in tasksCompleted) {
    if(max < tasksCompleted[value]){
        max = tasksCompleted[value];
        maxName = value;
    }    
}

console.log(maxName, max);

// ---------------------------2------------------------------

// ---------------------------3------------------------------

let countProps = (obj) => {
    let count = Object.keys(obj);
    return arr.length;
}

console.log(
    countProps({})
  ); // 0
  
  console.log(
    countProps(
        {a: 1, 
        b: 3, 
        c: 'hello',
        d: 'h'}
    )
  ); // 3
// ---------------------------3------------------------------

// ---------------------------4------------------------------

let isObjectEmpty = (obj) => {
    let arr = Object.keys(obj);
    return arr.length === 0 ? true : false
}

console.log(
    isObjectEmpty({})
  ); // true
  
  console.log(
    isObjectEmpty({a: 1})
  ); // false
  
  console.log(
    isObjectEmpty({a: 1, b: 2})
  ); // false
// ---------------------------4------------------------------

// ---------------------------5------------------------------
let total = 0;

const countTotalSalary = (obj) => {
    for(values in obj){
        total += obj[values];
    }
    return total
}

console.log(
    countTotalSalary({})
  ); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80
    })
  ); // 330
// ---------------------------5------------------------------

// ---------------------------6------------------------------
const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful'},
  { name: 'Ajax', age: 3, mood: 'tired' }
];

const getAllPropValues = (arr, prop) => {
    const arrey = [];
    for(let value of arr) {
        if (value.hasOwnProperty(prop)) arrey.push(value[prop]);
    }
    return arrey;
}

// Вызовы функции для проверки
console.log(
  getAllPropValues(users, 'name')
); // ['Poly', 'Mango', 'Ajax']

console.log(
  getAllPropValues(users, 'mood')
); // ['happy', 'blissful', 'tired']

console.log(
  getAllPropValues(users, 'active') 
); // []
// ---------------------------6------------------------------

// ---------------------------7------------------------------

const User = function(name, isActive, age, friends) {
  this.name = name;
  this.isActive = true;
  this.age = age;
  this.friends = friends;

  this.getUserInfo = function(){
    return `User ${name} is ${age} years old and has ${friends} friends`
  }
}

const addUser = new User('Poly', true, 23, 4);
console.log(addUser.getUserInfo());


// ---------------------------7------------------------------

// ---------------------------8------------------------------


const store = {
  products: ['bread', 'cheese', 'milk', 'apples'],
  managers: ['poly', 'mango', 'ajax'],
  addManager(manager) {
    this.managers.push(manager);
    
    console.log(this.managers);
  },
  removeManager(manager) {
    const idx = this.managers.indexOf(manager);
    
    this.managers.splice(idx, 1);
    
    console.log(this.managers);
  },
  getProducts() {
    console.log(this.products);
    
    return this.products;
  }
}

store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

store.removeManager('mango'); // ['poly', ajax', 'chelsey']

store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

// ---------------------------8------------------------------

// ---------------------------9------------------------------

function Account(
  { login, 
    password, 
    type = "regular" }
  ) {
  this.login = login;
  this.password = password;
  this.type = type;

  this.changePassword = function(newPassword) {
    this.password = newPassword;

    return (this.password);
  };

  this.getAccountInfo = function() {
    return(`
      Login: ${login}, 
      Pass: ${password}, 
      Type: ${type}
    `);
  };
}

const account = new Account({
  login: "Mango",
  password: "qwe123",
  type: "premium"
});

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

console.log(account.changePassword("asdzxc")); // 'asdzxc'

console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

// ---------------------------9------------------------------