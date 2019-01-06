// Задача №1

// function ask(question, answer, ok, fail) { 
// var result = prompt(question, ''); 
// if (result.toLowerCase() == answer.toLowerCase()) ok(); 
// else fail(); 
// } 

// var user = { 
// login: 'Василий', 
// password: '12345', 

// loginOk: function() { 
// alert( this.login + ' вошёл в сайт' ); 
// }, 

// loginFail: function() { 
// alert( this.login + ': ошибка входа' ); 
// }, 

// checkPassword: function() { 
// ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this)); 
// } 
// };

// user.checkPassword();

// var vasya = user;
// user = null;
// vasya.checkPassword();

// Задача №2
// "use strict"; 

// function ask(question, answer, ok, fail) { 
//     var result = prompt(question, ''); 
//         if (result.toLowerCase() == answer.toLowerCase()) ok(); 
//         else fail(); 
// } 

// var user = { 
//     login: 'Василий', 
//     password: '12345', 

// // метод для вызова из ask 
//     loginDone: function(result) { 
//         alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') ); 
//     }, 

//     checkPassword: function() { 
 
//         ask("Ваш пароль?", this.password, 
    
//             this.loginDone.bind(this, true),
            
//             this.loginDone.bind(this, false) 
         
//         ); 
//     } 
// }; 

// var vasya = user; 
// user = null; 
// vasya.checkPassword();

// Задача №3
// Исходная Функция
// function sum(arr) {
//     return arr.reduce(function(a, b) {
//       return a + b;
//     });
//   }
  
//   console.log( sum([1, 2, 3]) );

// Одалживание
// function sumArgs() {
//     arguments.reduce = [].reduce;
//     return arguments.reduce(function(a, b) {
//         return a + b;
//     });
// }
  
// console.log( sumArgs(1, 2, 3, 5) );

// Call
// function sumArgs() {
//     return [].reduce.call(arguments, function(a, b) {
//         return a + b;
//     });
// }
  
// console.log( sumArgs(1, 2, 3, 5) );

// Задача №4

// function sum() {
//     return [].reduce.call(arguments, function(a, b) {
//       return a + b;
//     });
//   }
  
//   function mul() {
//     return [].reduce.call(arguments, function(a, b) {
//       return a * b;
//     });
//   }
  
//   function applyAll(func){
//       return func.apply(this, [].slice.call(arguments, 1));
//   }

//   console.log( applyAll(sum, 1, 2, 3) );
//   console.log( applyAll(mul, 2, 3, 4) );