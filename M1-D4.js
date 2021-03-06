/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

const area = function (l1, l2) {
  return l1 * l2;
};

console.log(`The area is ${area(4, 10)} cm²`);

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

const crazySum = function (x, y) {
  if (x === y) {
    return 3 * (x + y);
  } else {
    return "These values are not the same.";
  }
};

console.log(crazySum(4, 5));

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff = function (x) {
  if (x > 19) {
    return 3 * (x - 19);
  } else {
    return 19 - x;
  }
};

console.log(crazyDiff(21));

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

const boundary = function (N) {
  if ((N >= 20 && N <= 100) || N === 400) {
    return true;
  } else {
    return false;
  }
};
console.log("EX4", boundary(60));
/*
I tried to do this, but wasnt sure how to properly do the case with having to write a case for every single
number between 20 and 100

switch (N) {
    case (20 <= N <= 100):
        return true;
    case 400:
        return true;
    default:
        return "N is neither 400 nor within the range of 20-100";
}
*/
console.log(boundary(10));

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

const strivify = function (S) {
  const st = "Strive ";
  if (S.includes("Strive", 0) && !S.includes("Strive", 6)) {
    return S;
  } else {
    return st + S;
  }
};

console.log(strivify("Hey there Strivers"));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function (P) {
  if ((P >= 0 && Number.isInteger(P / 3)) || Number.isInteger(P / 7)) {
    return "P is positive and a multiple of 3 or 7";
  } else {
    return "P is neither positive nor a multiple of 3 or 7";
  }
};

console.log(check3and7(27));

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

const reverseString = function (S) {
  return S.split("").reverse().join("");
};

console.log(reverseString("Strive"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

const upperFirst = function (S) {
  const sArray = S.split(" ");
  for (let i = 0; i < sArray.length; i++) {
    sArray[i] = sArray[i].charAt(0).toUpperCase() + sArray[i].substring(1);
  }
  return sArray.join(" ");
};

console.log(upperFirst("hey there my name is sam"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function (S) {
  return S.substring(1, S.length - 1);
};

console.log(cutString("Hello world"));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
