/*
1) (This has a DEMO solution.)
Create a variable that stores the name of your cafe.
Print out a greeting such as "Welcome to Technigo Cafe! What would you like to order today?"
Where Technigo Cafe is replaced by the name of your cafe that is stored in the variable.
*/
const cafeName = "Xings Cafe";
alert(`Welcome to ${cafeName}`);
const name = prompt("What's your name?");
console.log("username:", name);

const cafe = prompt(`Hello ${name.toUpperCase()}, what would you like to order today?`);
console.log("type of coffee:", cafe);
/*
2)
Create a variable that stores the price of a coffee.
Create a variable that stores how many coffees the customer wants.
Print out the total price such as "There you go, that'll be 10 euros"
Where 10 is replaced by the calculation of the total price.
*/
// price of one coffee in euros
const coffeePrice = 5;
// prompt name for the number of coffees
const nrOfCoffees = prompt("How many coffees would you like?");
// calculate the total price
const totalPrice = coffeePrice * nrOfCoffees;

// display the total price
alert("Here you go, that'll be " + totalPrice + " euros! Have a good day!");
console.log("number of coffee:", nrOfCoffees);
/*
3)
Create a variable that stores a boolean.
Print out "You said this coffee is the best, that was actually true"
Where true is replaced by your varible
*/
const goodCaffe = prompt("Do you like the cafe? (yes/no)")

if (goodCaffe === "yes") {
    alert("You said this coffee is the best, that was actually true")
} else {
    alert("You said this coffee is the best, that is interesting")
};
console.log("yes or no?", goodCaffe);
/*
4)
Create a variable called cafeGuests, that shows us how many cafeGuests we have.
Assign it a value.
Print it out.
Assign it a new value.
Print it out. => This should give you the new value.
*/
// let value changable
let cafeGuests = 5;
alert(`we have ${cafeGuests} guests today!`);
console.log("nr of guests:", cafeGuests);
// assign new value
cafeGuests = 9;
alert(`we have ${cafeGuests} guests today!`);
console.log("new nr of guests:", cafeGuests);
/*
5)
Create a variable called maxGuests, that shows us how many guests are allowed in the cafe.
Assign it a value.
Print it out.
assign it a new value.
Print it out. => This should give you an error because it shouldn't be able to be changed.
*/
const maxGuests = 8;
console.log("max nr of guests:", maxGuests);
alert(`The max guests of ${maxGuests} is allowed in the cafe.`);

// maxGuests = 10;
// console.log("new max nr of guests:", maxGuests);

// compare number of guests with max number of guests
const nrOfGuests = prompt("How many guests do we have now?");
console.log("nr of guests:", nrOfGuests);
if ( nrOfGuests <= maxGuests) {
    alert("Welcome in!")
} else {
    alert("Sorry! There are too many!");
}


/*
6)
Create a variable that stores a string.
Print out that string in only UPPERCASE letters.
*/
const user = prompt("What's your name?");
alert(`Hello ${user.toUpperCase()}, how are you today?`);
console.log("name with upperCase:", user);
/*
7)
Print out the same string in only lowercase letters.
*/
const username =prompt("What's your name?");
alert(`Hello ${username.toLowerCase()}, how are you today?`);
console.log("name with lowerCase:", username);
/*
8) **BONUS**
Print out the string "Today we have a special summer deal!". 
Then figure out a way to replace the word "summer" in the string with the word "winter"
Should give you => "Today we have a special winter deal!"
(check for a specific string method...)
*/
