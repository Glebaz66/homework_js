// -------------------------------1-------------------------------

// function Account(login, email, friendsCount){
//     this.login = login;
//     this.email = email;
//     this.friendsCount = friendsCount;

//     this.getAccountInfo = function(){
//         console.log("login is ", this.login);
//         console.log('email is', this.email);
//         console.log('friendsCount is', this.friendsCount);
//     }
// }

// const ivan = new Account('Ivan', 'dfsf@sdfsdf.com', 3);

// ivan.getAccountInfo();


// -------------------------------1-------------------------------

// -------------------------------2-------------------------------

function StringBuilder(string = "") {
    this.value = string;

    this.getValue = function getValue(){
        console.log(myString);
    }
    this.append = function append(){

    }
    this.prepend = function prepend(){

    }
    this.append = function pad(){

    }
  }
  
  
  const myString = new StringBuilder('.');
  getValue(myString);
  
  myString.append('^'); 
  myString.showValue(); // '.^'
  
  myString.prepend('^'); 
  myString.showValue(); // '^.^'
  
  myString.pad('='); 
  myString.showValue(); // '=^.^='
  
// -------------------------------2-------------------------------

// -------------------------------2-------------------------------



// -------------------------------2-------------------------------