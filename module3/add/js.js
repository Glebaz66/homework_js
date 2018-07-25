// --------------------------------1--------------------------------------

// function checkNumberType(num) {
//     return num % 2 === 0 ? "Odd" : "Even"
// }

// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd

// --------------------------------1--------------------------------------

// --------------------------------2--------------------------------------
let cutString = (str) => {

    if(str.length > 40){
        return str.substring(40) + '...'
    } else {
        return str
    } 
}

cutString()

    console.log(
        cutString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
      );
// --------------------------------2--------------------------------------