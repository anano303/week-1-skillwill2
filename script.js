// const user = [
//   { name: "temo", age: 25 },
//   { name: "lasha", age: 21 },
//   { name: "ana", age: 28 },
// ];

// const findSmallestAge = (users) => {
//   const smallestAge = Math.min(...users.map((user) => user.age));
//   const smallestAgePerson = users.find((user) => user.age === smallestAge);

//   return `The person with the smallest age is ${smallestAgePerson.name} with age ${smallestAge}`;
// };

// console.log(findSmallestAge(user));

//ცვლის ორივე ობიექტს
// const originalUser = { name: "temo", age: 25, city: "Tbilisi" };
// const copyUser = originalUser;
// copyUser.name = "vaja";
// copyUser.age = 28;
// copyUser.city = "batumi";

// console.log(originalUser, copyUser);

//ცვლის მეორე ობიექტს მხოლოდ
// const originalUser = { name: "temo", age: 25, city: "Tbilisi" };
// const copyUser = { ...originalUser };
// copyUser.name = "vaja";
// copyUser.age = 28;
// copyUser.city = "batumi";

// console.log(originalUser, copyUser);

// function randomNumber() {
//   return parseInt(Math.random() * 6) + 1;
// }

// let rollA = randomNumber();
// let rollB = randomNumber();
// while ((rollA !== 3) & (rollB !== 3)) {
//   rollA = randomNumber();
//   rollB = randomNumber();

//   console.log(`მომხმარებელი A გააგორა: ${rollA}`);
//   console.log(`მომხმარებელი B გააგორა: ${rollB}`);

//   if (rollA === 3) {
//     console.log(`მომხმარებელი A გამარჯვებულია! მან გააგორა სამიანი პირველმა.`);
//   } else if (rollB === 3) {
//     console.log(`მომხმარებელი B გამარჯვებულია! მან გააგორა სამიანი პირველმა.`);
//   }
// }
