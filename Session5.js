// 1)
// Do the below programs in anonymous function & IIFE
// i)	--Print odd numbers in an array
let odd_numbers = function (arr) {
  for (let i in arr) {
    if (arr[i] % 2 != 0) console.log(arr[i]);
  }
};
let arr = [1, 2, 3, 4, 5];
odd_numbers(arr);

// ii)	--Convert all the strings to title caps in a string array
let Caps = function (arr) {
  for (let i in arr) {
    console.log(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
};
let caps_arr = ["laks", "ram"];
Caps(caps_arr);

// iii)	--Sum of all numbers in an array
let sumofarray = function (arr) {
  let sum = 0;
  for (let i in arr) {
    sum += arr[i];
  }
  console.log(sum);
};
let sumarr = [10, 20, 30];
sumofarray(sumarr);

// iv)	--Return all the prime numbers in an array
let prime_numbers = function (arr) {
  arr = arr.filter((num) => {
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
  console.log(arr);
};
let prime_arr = [1, 22, 36, 4, 5];
prime_numbers(prime_arr);

// v)	--Return all the palindromes in an array
let palindrome = function (arr) {
  for (let x in arr) {
    let string1 = arr[x];
    let string2 = arr[x].split("").reverse().join("");
    if (string1 == string2) console.log(arr[x]);
  }
};
let array = ["121", "432", "242", "363"];
palindrome(array);

// vi)	--Return median of two sorted arrays of same size
let ar1 = [1, 12, 15, 26, 38];
let ar2 = [2, 13, 17, 30, 45];

let n1 = ar1.length;

let getMedian = function (ar1, ar2, n) {
  let i = 0;
  let j = 0;
  let count;
  let m1 = -1,
    m2 = -1;
  for (count = 0; count <= n; count++) {
    if (i == n) {
      m1 = m2;
      m2 = ar2[0];
      break;
    } else if (j == n) {
      m1 = m2;
      m2 = ar1[0];
      break;
    }

    if (ar1[i] <= ar2[j]) {
      m1 = m2;
      m2 = ar1[i];
      i++;
    } else {
      m1 = m2;
      m2 = ar2[j];
      j++;
    }
  }

  return (m1 + m2) / 2;
};
console.log(getMedian(ar1, ar2, n1));

// vii) Remove duplicates from an array
const sampleValues = [1, 4, 5, 2, "a", "e", "b", "e", 2, 2, 4];
const uniqueValues = [...new Set(sampleValues)];
console.log(uniqueValues); //[1, 4, 5, 2, "a", "e", "b"]

// 3)
// Do the below programs in arrow functions

// a)	--Print odd numbers in an array
oddnum = (arr) => {
  console.log(arr.filter((x) => x % 2 != 0));
};
const arrnum = [1, 3, 4, 5, 6, 7, 8];

oddnum(arrnum);

// b) Convert all the strings to title caps in a string array
const str = ["ram", "laks", "logu"];
const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));
str.forEach((x) => console.log(capitalize(x)));

// c) Sum of all numbers in an array
const sumnum = [1, 2, 3, 4, 5];
const tot = sumnum.reduce(function (a, b) {
  return a + b;
});
console.log(tot);

// d) Return all the prime numbers in an array
let prime_arrownumbers = (arr) => {
  arr = arr.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(arr);
};

// e) Return all the palindromes in an array

let arrPrime = [1, 2, 3, 4, 5];
prime_arrownumbers(arrPrime);

let palindromes = function (arr) {
  for (let x in arr) {
    let string1 = arr[x];
    let string2 = arr[x].split("").reverse().join("");
    if (string1 == string2) console.log(arr[x]);
  }
};
let arrpp = ["121", "432", "242"];
palindromes(arrpp);
