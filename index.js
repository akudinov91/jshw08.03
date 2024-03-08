//Задача 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое
//больше, чем второе; и 0 – если числа равны.

// function compareNumbers(number1, number2) {
//   if (number1 < number2) {
//     return -1;
//   } else if (number1 > number2) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// let result = compareNumbers(9, 10);
// console.log(result);

// result = compareNumbers(10, 9);
// console.log(result);

// result = compareNumbers(4, 4);
// console.log(result);

//Задача 2. Написать функцию, которая вычисляет факториал переданного ей числа.

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// const number = 5;
// const result = factorial(number);
// console.log(`Факториал ${number} равен: ${result}`);

// Задача 3.Написать функцию, которая принимает три отдельные
// цифры и превращает их в одно число. Например: цифры
// 1, 4, 9 превратятся в число 149

// function combineDigits(digit1, digit2, digit3) {
//   let combinedNumber = parseInt("" + digit1 + digit2 + digit3);
//   return combinedNumber;
// }
// let result = combineDigits(1, 4, 9);
// console.log(result);

// Задача 4. Написать функцию, которая принимает длину и ширину
// прямоугольника и вычисляет его площадь. Если в функцию
// передали 1 параметр, то она вычисляет площадь квадрата

// function calculateRectangleArea(length, width) {
//   if (width === undefined) {
//     return length * length;
//   } else {
//     return length * width;
//   }
// }
// console.log(calculateRectangleArea(5, 7));
// console.log(calculateRectangleArea(5));

// Задача 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это
// число, равное сумме всех своих собственных делителей.

// function isPerfectNumber(number) {
//   if (number <= 0) {
//     return false;
//   }

//   let sum = 0;
//   for (let i = 1; i < number; i += 1) {
//     if (number % i === 0) {
//       sum += i;
//     }
//   }

//   return sum === number;
// }
// const exampleNumber = 47;
// if (isPerfectNumber(exampleNumber)) {
//   console.log(`${exampleNumber} - совершенное число`);
// } else {
//   console.log(`${exampleNumber} - не совершенное число`);
// }

// Задача 6. Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит только
// те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать,
// совершенное число или нет.

// function isPerfectNumber(num) {
//   let sum = 0;
//   for (let i = 1; i <= num / 2; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }
//   return sum === num;
// }

// function printPerfectNumbers(min, max) {
//   for (let i = min; i <= max; i++) {
//     if (isPerfectNumber(i)) {
//       console.log(i);
//     }
//   }
// }
// const minRange = 1;
// const maxRange = 10000;

// console.log(`Совершенные числа в диапазоне от ${minRange} до ${maxRange}:`);
// printPerfectNumbers(minRange, maxRange);

//Задача 7.Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были
//переданы, то выводить их как 00

// function formatTime(hours, minutes, seconds) {
//   if (minutes === undefined) {
//     minutes = 0;
//   }
//   if (seconds === undefined) {
//     seconds = 0;
//   }

//   const formattedHours = hours < 10 ? "0" + hours : hours;
//   let formattedMinutes;
//   if (minutes < 10) {
//     formattedMinutes = "0" + minutes;
//   } else {
//     formattedMinutes = minutes;
//   }

//   let formattedSeconds;
//   if (seconds < 10) {
//     formattedSeconds = "0" + seconds;
//   } else {
//     formattedSeconds = seconds;
//   }

//   console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
// }

// formatTime(9, 5, 30);
// formatTime(15, 45);
// formatTime(3);

// Задача 8. Написать функцию, которая принимает часы, минуты и
// секунды и возвращает это время в секундах.

// function timeToSeconds(hours, minutes, seconds) {
//   if (hours < 0 || minutes < 0 || seconds < 0) {
//     console.log(
//       "Пожалуйста, введите корректные значения для часов, минут и секунд."
//     );
//     return null;
//   }

//   let totalSeconds = hours * 3600 + minutes * 60 + seconds;
//   return totalSeconds;
// }

// let minutes = 20;
// let seconds = 35;
// let hours = 4;

// let result = timeToSeconds(hours, minutes, seconds);

// if (result !== null) {
//   console.log(
//     `Время ${hours}:${minutes}:${seconds} в секундах: ${result} секунд.`
//   );
// }

// Задача 9. Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в
// виде строки «чч:мм:сс»

// function formatTime(seconds) {
//   if (isNaN(seconds) || seconds < 0) {
//     return "Некорректное значение";
//   }

//   const hours = Math.floor(seconds / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const remainingSeconds = seconds % 60;

//   const formattedHours = (hours < 10 ? "0" : "") + hours;
//   const formattedMinutes = (minutes < 10 ? "0" : "") + minutes;
//   const formattedSeconds =
//     (remainingSeconds < 10 ? "0" : "") + remainingSeconds;

//   return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
// }

// const totalSeconds = 3665;
// const formattedTime = formatTime(totalSeconds);
// console.log(formattedTime);

// Задача 10. Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2
// даты, и возвращает результат в виде строки «чч:мм:сс». При
// выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
// узнайте разницу в секундах, а потом разницу переведите
// обратно в «чч:мм:сс»
