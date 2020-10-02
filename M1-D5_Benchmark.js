/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/

//JS Basics
console.log("---------------------");
console.log("JS BASICS");
console.log("---------------------");
/* Ex.A
   Create a variable test that contains a string
*/
console.log("Ex.A");

const exA = "This is a test string";
console.log(exA);

console.log("---------------------");
/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/
console.log("Ex.B");

const exB = 20 + 10;
console.log(`The sum of 10 and 20 is ${exB}`);

console.log("---------------------");
/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/
console.log("Ex.C");

const exC = Math.floor(Math.random() * 20);
console.log(`A random number between 0 and 20 can be ${exC}`);

console.log("---------------------");
/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/
console.log("Ex.D");

const Me = {
  Name: "Abdul Samad",
  Surname: "Mahmood",
  Age: 24,
};
console.log("The object Me contains ", Me);

console.log("---------------------");
/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/
console.log("Ex.E");

delete Me.Age;
console.log(Me);

console.log("---------------------");
/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/
console.log("Ex.F");

Me.Skills = ["A little HTML", "A little CSS", "A little JavaScript"];
console.log(Me);

console.log("---------------------");
/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/
console.log("Ex.G");

Me.Skills.pop();
console.log(Me);

console.log("---------------------");

// JS Functions
console.log("JS FUNCTIONS");
console.log("---------------------");
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/
console.log("Ex.1");

const Dice = function (n) {
  return (n = Math.floor(Math.random() * 6 + 1));
};
console.log("A random integer between 1 and 6 is ", Dice(1));

console.log("---------------------");
/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/
console.log("Ex.2");

const WhoIsBigger = function (x, y) {
  if (x === y) {
    return "These values are the same";
  } else if (x > y) {
    return x + " is the bigger number";
  } else {
    return y + " is the bigger number";
  }
};
console.log(WhoIsBigger(7, 7));

console.log("---------------------");
/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/
console.log("Ex.3");

const SplitMe = function (s) {
  return s.split(" ");
};
console.log(SplitMe("Hey there Stefano and/or other tutors"));

console.log("---------------------");
/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*/
console.log("Ex.4");

const DeleteOne = function (s, b) {
  if (typeof s !== String || typeof b !== Boolean) {
    return "Either parameter s is not a string or parameter b is not a boolean";
  } else if (b === true) {
    return s.slice(1);
  } else {
    return s.slice(0, -1);
  }
};
console.log(DeleteOne("Delete", true));
console.log(typeof "Delete", typeof true);

console.log("---------------------");
/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/
console.log("Ex.5");
/* Attempt before google
const OnlyLetters = function (s) {
  let sArray = s.split();
  for (let i = 0; i <= sArray.length; i++) {
    if (typeof sArray[i] === Number) {
      delete sArray[i];
    } else {
      return sArray[i];
    }
  }
  return sArray;
};
console.log(OnlyLetters("My OnlyLetters account costs £1000"));
*/

const OnlyLetters = function (s) {
  return s.replace(/[0-9]/g, "");
};
console.log(OnlyLetters("My OnlyLetters account costs £1000"));

console.log("---------------------");
/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/
console.log("Ex.6");

const IsThisAnEmail = function (s) {
  if (
    (s = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(IsThisAnEmail("abdul_mahmood@hotmail.co.uk"));

console.log("---------------------");
/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/
console.log("Ex.7");

const WhatDayIsIt = function (d) {
  switch (d) {
    case 1:
      return "Today is Monday";
    case 2:
      return "Today is Tuesday";
    case 3:
      return "Today is Wednesday";
    case 4:
      return "Today is Thurday";
    case 5:
      return "Today is Friday";
    case 6:
      return "Today is Saturday";
    case 7:
      return "Today is Sunday";
    default:
      break;
  }
};
let date = new Date();
let d = date.getDay();
console.log(WhatDayIsIt(d));

console.log("---------------------");
/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/
console.log("Ex.8");

const RollTheDice = function (r) {
  let die = [];
  for (let i = 0; i < r; i++) {
    addDie = Dice(1);
    die.push(addDie);
  }
  const diceSum = (die) => die.reduce((a, b) => a + b, 0);
  let result = {
    Dice: `You rolled ${die}`,
    Sum: `The sum of the dice is ${diceSum}`,
  };
  return result;
};

console.log(RollTheDice(3));

console.log("---------------------");
/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*/
console.log("Ex.9");

const HowManyDays = function (d) {
  return;
};
let date2 = new Date();
let dd = date.getDay();

console.log(dd);

console.log("---------------------");
/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/

// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file

/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
*/

/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/

/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/

/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/

/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/

/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/

/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/

/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/

/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
*/

/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/

// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/

/* Movies array is an example array, used for the exs. Don't change it :)  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
