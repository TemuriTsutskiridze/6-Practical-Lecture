// 1.დაწერე პროგრამა, რომელიც მიიღებს კვირის დღეს ინფუთად და დააბრუნებს მესიჯს იმის მიხედვით, სამუშაო დღეა თუ შაბათ-კვირა.

// let day = prompt("შეიყავანე კვირის დღე: ").toLowerCase();

// let output;
// switch(day) {
//     case "monday":
//     case "tuesday":
//     case "wednesday":
//     case "thursday":
//     case "friday":
//         output = "weekday";
//         break;
//     case "saturday":
//     case "sunday":
//         output = "weekend";
//         break;
//     default:
//         output = "wrong input";

// }

// console.log(output);

// 2.დაწერე პროგრამა, რომელიც მიიღებს რიცხვს ინფუთის სახით და გამოითვლის მის ფაქტორიალს (გამოიყენე while და for)

// for
// let number = Number(prompt("Enter the number: "));
// let result = 1;

// for (let i = 1; i <= number; i++) {
//     result = result * i;
// }
// console.log(result);

// while

// let i = 1;
// while (i <= number) {
//     result *= i;
//     i++;
// }
// console.log(result);

// 3.დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს შემთხვევითობის პრინციპით შექმნილი მთელი რიცხვი 0დან 10მდე. განაგრძეთ გამოცნობის მოთხოვნა, სანამ ისინი სწორად გამოიცნობენ, do while loop-ის გამოყენებით.

// let random = Math.floor(Math.random() * 10);
// let input;
// do {
//     input = Number(prompt("Enter the number: "));
//     if (input !== random) {
//         console.log("Try again!");
//     }
// } while (input !== random) ;
// console.log("Good Guess");

// 4. looping a triangle (from eloquent javascript)
// დაწერე პროგრამა, რომელიც გამოაკონსოლებს მართხუთხა სამკუთხედს (სიმაღლით 7)

// for (let i = 1; i < 8; i++) {
//     console.log("#".repeat(i))
// }

// for (let line = "#"; line.length < 8; line += "#") {
//     console.log(line);
// }

// 5. fizzbuzz (from eloquent javascript)
// დაწერე პროგრამა, რომელიც დაბეჭდავს რიცხვებს 1_დან 100_მდე, ორი გამონაკლისით - დაბეჭდოს "Fizz" იმ რიცხვების მაგივრად, რომლიბიც იყოფა მხოლოდ 3_ზე, დაბეჭდოს "Buzz" იმ რიცხვების მაგივრად, რომლებიც იყოფა მხოლოდ 5_ზე  და დაბეჭდოს "FizzBuzz" იმ რიცხვების მაგივრად, რომლებიც იყოფა 3_ზეც და 5_ზეც.

// for (let i = 1; i < 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 1; i < 100; i++) {
//     let output = "";
//     if (i % 3 === 0) {
//         output = output + "Fizz";
//     }
//     if (i % 5 === 0) {
//         output += "Buzz";
//     }
//     console.log(output && i);
// }

// 6. chessboard (eloquent javascript)
// დაწერე პროგრამა, რომელიც გამოაკონსოლებს ჭადრაკის ფორმის(8x8) სტრინგს.

// let size = 8;
// let output = "";
// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         output += "#";
//     }
//     output += "\n";
// }
// console.log(output);

// let size = 8;
// let output = "";
// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         if ((i + j) % 2 === 0) {
//             output += " ";
//         } else {
//             output += "#";
//         }
//     }
//     output += "\n";
// }
// console.log(output);
