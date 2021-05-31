let firstName = "Fidel";
let lastName = "Castro";
let age = 26;
const HUMAN = true;
let howMany = "";
let cosas = [
  "blue",
  "ball",
  "nutella",
  "peanut butter",
  "beans",
  "tacos",
  "me",
  "computer",
];



let count = cosas.forEach((element) => {
  console.log(element);
  ++howMany;
  console.log(howMany);
});

count;


console.log(Array.isArray(cosas));