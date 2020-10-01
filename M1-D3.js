/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

const positiveNumbers = [0,1,2,3,4]
console.log(positiveNumbers)

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

const myInfo = {
    name: "Abdul",
    surname: "Mahmood",
    emailAddress: "abdul_mahmood@hotmail.co.uk",
    age: 24
}
console.log(myInfo)

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

myInfo.drivingLicense = true
console.log(myInfo)

/* EXERCISE 4
Remove from the previously created object the age
*/

delete myInfo.age
console.log(myInfo)

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

const otherInfo = {
    name: "Heaviest",
    surname: "Metal",
    emailAddress: "HeadBanger69@yahoo.com"
}
console.log(myInfo.emailAddress !== otherInfo.emailAddress)


/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

const totalShoppingCart = 30
let totalCost = 0
if(totalShoppingCart > 50){
    console.log("Free Shipping!")
    totalCost = totalShoppingCart
    console.log("Total cost is " ,totalCost, "€")
} else{
    console.log("Shipping costs 10€")
    totalCost = (totalShoppingCart + 10)
    console.log("Total cost is " ,totalCost, "€")
}

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

const shoppingCart = 100
const discount = 0.2
const totalShoppingCart2 = (shoppingCart - (shoppingCart*discount))
let totalCost2 = 0
if(totalShoppingCart2 > 50){
    console.log("Free Shipping!")
    totalCost2 = totalShoppingCart2
    console.log("Total cost is " ,totalCost2, "€")
} else{
    console.log("Shipping costs 10€")
    totalCost2 = (totalShoppingCart2 +10)
    console.log("Total cost is " ,totalCost2 + 10, "€")
}


/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

const car1 = {
    brand: "BMW",
    model: "Sport",
    licensePlate: "1A1A BCD"
}

let car2 = {}
let car3 = {}
let car4 = {}
let car5 = {}
let car6 = {}
Object.assign(car2, car1)
Object.assign(car3, car1)
Object.assign(car4, car1)
Object.assign(car5, car1)
Object.assign(car6, car1)
car2.licensePlate = "2B2B 333"
car3.licensePlate = "3C3C 333"
car4.licensePlate = "4D4D 333"
car5.licensePlate = "5E5E 333"
car6.licensePlate = "6F6F 333"
console.log(car5.licensePlate)


/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

const carsForRent = [car1, car2, car3, car4, car5, car6]
console.log(carsForRent)

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop()
carsForRent.shift()
console.log(carsForRent)

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

console.log(typeof(car2.brand))
console.log(typeof(car2.licensePlate))
console.log(typeof(car2.model))


/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

let car7 = Object.assign({}, car1)
let car8 = Object.assign({}, car1)
let car9 = Object.assign({}, car1)
const carsForSale = [car7, car8, car9]
const totalCars = (carsForRent.length + carsForSale.length)
console.log(totalCars)

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

for (let i = 0; i < carsForSale.length; i++){
    console.log("Car", (i+1))
    console.log(carsForSale[i])
}

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
