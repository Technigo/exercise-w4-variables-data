/*
1) (This has a DEMO solution.)
Create a variable that stores the name of your cafe.
Print out a greeting such as "Welcome to Technigo Cafe! What would you like to order today?"
Where Technigo Cafe is replaced by the name of your cafe that is stored in the variable.
*/

// HINT: Don't use var, stick to let and const.

const cafeName = "Fika Cafe";
alert(`Welcome to ${cafeName}! What would you like to order today?`);

/*

2)
Create a variable that stores the price of a coffee.
Create a variable that stores how many coffees the customer wants.
Print out the total price such as "There you go, that'll be 10 euros"
Where 10 is replaced by the calculation of the total price.
*/

const coffeePrice = 3.5; // Price of one coffee in euros

// Prompt the user for the number of coffees
const numberOfCoffees = prompt("How many coffees would you like?");

// Calculate the total price
const totalPrice = coffeePrice * numberOfCoffees;

// Display the total price
alert("There you go, that'll be " + totalPrice + " euros");

/*
3)
Create a variable that stores a boolean.
Print out "You said this coffee is the best, that was actually true"
Where true is replaced by your varible
    */

const coffeeIsBest = prompt("Do you think this coffee is the best? (yes/no)");

if (coffeeIsBest === "yes") {
    alert("You said this coffee is the best, that was actually true");
} else {
    alert("You said this coffee is not the best, that's interesting");
}


/*
4)
Create a variable called cafeGuests, that shows us how many cafeGuests we have.
Assign it a value.
Print it out.
Assign it a new value.
Print it out. => This should give you the new value.
*/

let cafeGuests = 10;
// alert("We have ${cafeGuests} guests.");

alert(`we have ${cafeGuests} guests`);

cafeGuests = 15;
// alert("We have ${cafeGuests} guests.");

alert(`now we have ${cafeGuests} guests`);


/*
5)
Create a variable called maxGuests, that shows us how many guests are allowed in the cafe.
Assign it a value.
Print it out.
assign it a new value.
Print it out. => This should give you an error because it shouldn't be able to be changed.
*/


const maxGuests = 20;
alert(`we can have only ${maxGuests} guests`);

//maxGuests = 30;
//alert(`we can have only ${maxGuests} guests`);

/*
6)
Create a variable that stores a string.
Print out that string in only UPPERCASE letters.
*/

const guestName = prompt("what is your name?");

const upperguestName = guestName.toUpperCase()

// console.log(GuestName.toUpperCase);
// // will give you "JENNIE"


alert(`Hello ${upperguestName} welcome!`);

/*
7)
Print out the same string in only lowercase letters.
*/


const lowerguestName = guestName.toLowerCase()
alert(`Hello ${lowerguestName} welcome!`);




/*
8) **BONUS**
Print out the string "Today we have a special summer deal!". 
Then figure out a way to replace the word "summer" in the string with the word "winter"
Should give you => "Today we have a special winter deal!"
(check for a specific string method...)
*/
