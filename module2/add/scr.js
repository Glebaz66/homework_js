// --------------------------------1--------------------------------
const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

console.log(users.length);

console.log(users[0]); 
console.log(users[1]); 
console.log(users[2]); 
console.log(users[3]); 
// --------------------------------1--------------------------------

// --------------------------------2--------------------------------

const users = ["Mango", "Poly", "Ajax", "Chelsey"];


console.log(users.shift());

console.log(users.pop()); 

users.unshift ("добавленое имя");
console.log(users);

users.splice(3, 0, "имя 1", "имя 2")
console.log(users);

// --------------------------------2--------------------------------

// --------------------------------3--------------------------------
let arr = [];
let string = prompt('Введите что-то: ');
// Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
console.log(arr = string.split(" "));
// Вывести в консоли общую длину массива arr
console.log("arr length:", arr.length);
// Используя цикл, вывести в консоль все индексы массива arr

// Используя цикл, вывести в консоль все элементы массива arr
let el = [];
for (el of arr) {
    console.log(el);
}
// Используя цикл, bывести в консоли все пары индекс:значение массива arr

// --------------------------------3--------------------------------

// --------------------------------4--------------------------------

let counter = 0;

while (counter < 10) {
  console.log("counter: ", counter);

  counter += 1;
}

let input;
do {
    input = prompt('Введите число больше 100', '');

    if (input < 100){
        alert('Введить можно только числа, больше 100')
        }
        if (input == null){
            alert('Приходите еще!')
            }
    console.log(input);
    
    
} while(input <= 100);


// --------------------------------4--------------------------------

// --------------------------------5--------------------------------

const min = 1;
const max = 100;

for (let i = 0; i <= max; i++){
    if(i % 3){
        console.log('Fizz');
    }
    if (i % 5){
        console.log('Buzz');
        }
        console.log(i);
        
}

// --------------------------------5--------------------------------

// --------------------------------6--------------------------------

const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const newArray = [];

for (i = 0; i <= numbers.length -1; i++){
    if(numbers[i] > num){
        newArray.push(numbers[i])
    }
}   console.log(newArray);

// --------------------------------6--------------------------------

// --------------------------------7--------------------------------

const string = "May the force be with you";
let longestWord = '';


let strSplit = string.split(' ');
console.log(strSplit);

for(let i = 0; i < strSplit.length -1; i++){
    if(strSplit[i].length > longestWord.length){
        longestWord = strSplit[i];
    }
}
    console.log(longestWord); // 'force'

// --------------------------------7--------------------------------

// --------------------------------8--------------------------------

let string;
let arr = [];
let summ = 0;
let integerArr = [];

do {
    string = prompt('Введите число');
    arr.push(string);
    if (string === null || string === ' ' || string === '') break;
} while(string % 1 == 0)

arr.pop()

for(let i = 0; i <= arr.length - 1; i++) {
    integerArr.push(arr[i]);
}
console.log(integerArr)

for (let j = 0; j <= integerArr.length - 1; j++) {
    summ = summ + parseInt(integerArr[j]);
}
console.log('Сумма чисел: ',summ)

// --------------------------------8--------------------------------

// --------------------------------9--------------------------------

// const numbers = [12, 15, 25, 37, 41];
// let input;



// --------------------------------9--------------------------------
