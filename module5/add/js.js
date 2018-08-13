// // // // // // const num = [1, 2, 3];
// // // // // // const dirty = arr => {
// // // // // //     for(let i = 0; i < arr.length; i += 1){
// // // // // //         arr[i] = arr[i] * 2;
// // // // // //     }
// // // // // // }
// // // // // // // dirty(num);
// // // // // // // console.log(num);

// // // // // // const pure = arr => {
// // // // // //     const newArr = [];
// // // // // //     for(let i = 0; i < arr.length; i += 1){
// // // // // //         newArr.push(arr[i] * 2);
// // // // // //     }
// // // // // //     return newArr
// // // // // // }

// // // // // // const updNum = pure(num);
// // // // // // console.log(num);
// // // // // // console.log('updNum ', updNum);


// // // // // //////////map

// // // // // // console.log([1, 2, 3].map(x => x * 5));

// // // // // function map(arr) {
// // // // //     const newArr = [];
// // // // //     for (i = 0; i < arr.length; i += 1){
// // // // //         const elem = arr[i];
// // // // //         newArr.push(arr[i] * 2);
// // // // //     }
// // // // //     return newArr;
// // // // // }

// // // // // const num = [1, 2, 3, 4, 5];
// // // // // const result = map(num);
// // // // // console.log('num ', num);
// // // // // console.log('result ', result);



// // // // const guests = [
// // // //     { name: 'mango', age : 2 },
// // // //     { name: 'poly', age : 5 },
// // // //     { name: 'ajax', age : 12 },
// // // // ];

// // // // const result = guests.map(guest => {
// // // //     if(guest.name === 'mango'){
// // // //         return {
// // // //             ...guest,
// // // //             age: guest.age + 1,
// // // //         };
// // // //     }

// // // //     return guest;
// // // // });

// // // // console.log('guests ', guests);

// // // // console.log('result', result);



// // // // ------------------------------filter-------------------------------------



// // // // function filter(arr, callback){
// // // //     const newArr = [];

// // // //     for (let i = 0; i < arr.lenght; i += i){
// // // //         const passes = callback(arr[i]);

// // // //         if (passes){
// // // //             newArr.push(arr[i]);
// // // //         }
// // // //     }

// // // //     return newArr;  
// // // // }


// // // // const result = filter(num, val => val > 1);

// // // // console.log(result);
// // // // const num = [1, 2, 3, 4, 5];


// // // // console.log(filtered);

// // // const guests = [
// // //     { name: 'mango', age : 2 },
// // //     { name: 'poly', age : 5 },
// // //     { name: 'ajax', age : 12 },
// // // ];

// // // // const filtered = guests.filter(guest => guest.age > 3);
// // // const filtered = guests.find(guest => guest.age > 3);

// // // console.log(filtered);



// // // ----------------------------for each


// // num = [1, 2, 3, 4, 5];
// // for (let i = 0; i < num.length; i += 1) {
// //     console.log(num[i]);
// // }
        

// // num.forEach(number => {
// //     console.log(number);
// // });




// // -----------------------------2-------------------------------------

// // const guests = [
// //     { name: "Mango", age: 20, isActive: true },
// //     { name: "Poly", age: 18, isActive: false },
// //     { name: "Ajax", age: 30, isActive: true },
// //     { name: "Chelsey", age: 45, isActive: false }
// //   ];

// //   const getPropValues = (arr, prop) => arr.map(el => el[prop])

// //   console.log(getPropValues (guests, 'name') );
  
// //   console.log( getPropValues(guests, "age") );

// //   console.log( getPropValues(guests, "isActive") );
  
// // -----------------------------2-------------------------------------

// // -----------------------------3-------------------------------------
// const guests = [
//     { name: 'Mango', inactiveDays: 15, isActive: true },
//     { name: 'Poly', inactiveDays: 8, isActive: false },
//     { name: 'Ajax', inactiveDays: 32, isActive: false },
//     { name: 'Chelsey', inactiveDays: 85, isActive: true },
//   ];

//  const setGuestState = (guests, period) => {
//     return guests.map(guest => {
//         if (guest.inactiveDays > period) {
//             return {
//                 ...guest,
//                 isActive: false,
//             };
//         }

//         return {
//             ...guest,
//             isActive: true,
//         };
//     });
// };



//   // Вызовы функции для проверки
//   console.log(
//     setGuestState(guests, 10)
//   );
  
//   console.log(
//     setGuestState(guests, 20)
//   );
  
//   console.log(
//     setGuestState(guests, 50)
//   );
// // -----------------------------3-------------------------------------

// // -----------------------------4-------------------------------------

const guests = [
    { name: "Mango", age: 20, isActive: true },
    { name: "Poly", age: 18, isActive: false },
    { name: "Ajax", age: 30, isActive: true },
    { name: "Chelsey", age: 45, isActive: false }
  ];
  
const getActiveGuests = (guests) => {
    
}

  // Вызовы функции для проверки
  console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
// // -----------------------------4-------------------------------------

// // -----------------------------5-------------------------------------
// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];

//   const getGuestsOlderThan = (guests, age) => {
//       return guests.filter(guest => guest.age > age);
//   }
//   // Вызовы функции для проверки
//   console.log(getGuestsOlderThan(guests, 25));
  
//   console.log(getGuestsOlderThan(guests, 35));
  
//   console.log(getGuestsOlderThan(guests, 55));
  
// // -----------------------------5-------------------------------------

// // -----------------------------6-------------------------------------
const guests = [
    { id: 1, name: 'Mango', age: 20 },
    { id: 2, name: 'Poly', age: 18 },
    { id: 3, name: 'Ajax', age: 30 },
    { id: 4, name: 'Chelsey', age: 45 },
  ];
  

  const getGuestById = (guests, id) => {
      return guests.filter(guest => guest.id === id);
  }
  // Вызовы функции для проверки
  console.log(
    getGuestById(guests, 3)
  );
  
  console.log(
    getGuestById(guests, 1)
  );
  
  console.log(
    getGuestById(guests, 5)
  );
// // -----------------------------6-------------------------------------