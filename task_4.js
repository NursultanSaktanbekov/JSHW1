/* Задачи */

/* 1. Напишите скрипт, который считает количество секунд в часе. */

'use strict'

// let second = 60
// let hour = 60 
// let result = hour * second
// console.log("Количество секунд в часе:", result);

/* 2. Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.
 */

const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const currentTime = hours + ":" + minutes + ":" + seconds;
console.log("Текущее время: " + currentTime);





/* 3. В переменной day лежит какое-то число из интервала от 1 до 31. 
Определите в какую декаду месяца попадает это число (в первую, вторую или третью). */

// let day = 16;
// if (day > 0 && day <= 9) {
//     alert ('Now is the first decade');
// } else if (day >= 10 && day < 20) {
//     alert ('Now is the second decade');
// } else {
//     alert ('Now this is third decade');
// };

/* 4.  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень). */

// let month = 1;
// if (month >=1 && month < 3) {
//     alert ('It is winter now');
// } else if (month >=3 && month < 6) {
//     alert('Spring now')


// } else if (month >= 6 && month < 9) {
//     alert('It is summer now.')
//     } else if (month >= 9 && month <= 11) {
//     alert('It is fall now.');
//     } else if (month === 12) {
//     alert('It is winter now.');
//     } else {
//     alert('Error!');
//     };
    
