/*checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string pony.

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string kitten.

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.

checkObj({city: "Seattle"}, "city") should return the string Seattle.

checkObj({city: "Seattle"}, "district") should return the string Not Found.

checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return the string Not Found.*/
/*
Testing Objects for Properties
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
The first hasOwnProperty returns true, while the second returns false.*/
/*
const { useLayoutEffect } = require("react/cjs/react.production.min");*/


/*
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
  }*/
  // Setup
  /*
function phoneticLookup(val) {
  var result  = "";
     var lookup = {
     "alpha":"Adams",
       "bravo":"Boston",
       "charlie":"Chicago",
         "delta":"Denver",
        "echo":"Easy",
         "foxtrot": "Frank",
    };
  
    // Only change code above this line
  
      result = lookup[val];
    // Only change code above this line
    return result;
  }
  phoneticLookup("foxtrot");
  
phoneticLookup("charlie");
phoneticLookup("delta")




const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist":"Fela",
    "title":"Unknown soldier",
    "release_year":1983,
    "formats":[
        "CD",
      "8T",
      "LP"
    ]

      }
];

// Algorithms and Data Structures
//Basic JavaScript
//Accessing Nested Objects

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents =myStorage.car.inside["glove box"] ;


/*
You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.*/


//Record Collection
/*
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
if (prop !=='track' && value !=="" ){
records [id][prop] == [value];
}else if (prop ==="track" && records[id].hasOwnProperty("tracks") === false){
  records [id][prop] = [value];
}else if (prop === "track" && value !==""){
  records [id][prop].push(value);
}else if (value === ""){
  delete records[id][prop];
}
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
*/

//while loop
/*
const myArray=[5,4,3,2,1,0];
let i=5;

while (i<= 5){
  console.log(myArray[i]);
  i--;
}
//for loop
const myArray=[];
let i=1;

for (i=1; i<6; i++){
  myArray.push(i);
}

//forEach loop
const myArray=[];
let i=1;

for(let i = 1; i<10; i+=2){
  myArray.push(i);
}

//forEach loop
const myArray=[];
let i=9;

for (let i = 9; i>0; i-=2){
  myArray.push(i);
}

const myArr = [2, 3, 4, 5, 6];
let total = 0

for (let i = 0; i < myArr.length ; i++){
  total += myArr[i]
}*/
/*
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
   for (let i=0; i<arr.length; i++){
     for (let j=0; j<arr[i].length; j++){
       product *= arr[i][j];
     }
   }
   return product;
  };
  // Only change code above this line
  multiplyAll([[1,2],[3,4],[5,6,7]]);*/

// Setup
/*
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
}while (i < 5) */ 


/*
function myArr(arr){
  let product = 1;
 for (let i = 0;i <arr.length; i++){
   for (let j = 0 ; j<arr[i].length; j++){
     product *= arr[i][j];
   }
 }
}
console.log(myArr([[1,2],[3,4],[5,6,7]]));
*/



//recursive function

/*
function sum(arr,n){
  if (n <= 0){
    return 1;
  }else if (n <= 1){
    return 2
  }else if (n <= 3){
    return 9
  }
  else{
    return arr[n] + sum(arr,n-1);
  }
}

function multiply(arr,n){
  if (n <= 0){
    return 1;
  }else if (n <= 1){
    return 2
  }else if (n <= 3){
    return 9
  }
  else{
    return arr[n] * multiply(arr,n-1);
  }

}*/

function subtract(){
  if (n <= 0){
    return 1;
  }else if (n <= 1){
    return 3;
  }else if (n <= 3){
    return 9
  }else {
    return arr[n] - subtract(arr, n -1  )
  }
}

// Setup Profile Lookup
/*
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
    for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
  // Only change code above this line


lookUpProfile("Akira", "likes");*/
/*
function randomNumber(){

  
  var result = 0

  while ( result === 0){
    result = Math.random()
    randomEl.textContent = result 
  }
 
}*/
//Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  // Only change code below this li
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);

return 0;
  // Only change code above this line
}


console.log(randomRange(1, 10));




//parseInt 
function converterInt(str){
  return parseInt(str);
}
console.log(converterInt("5"));


//parseInt Radix
function converterInt(str){
  return parseInt(str,2);
}
console.log(converterInt("10011")); 



//Ternary operator

function checkEqual(a, b) {
  return a === b ? true : false;
}

console.log(checkEqual(1, 2));
console.log(checkEqual(2, 2));
console.log(checkEqual(3, 2));



//Ternary operator

function checkSign(num) {
  return num > 0 ? "positive"
    : num < 0 ? "negative"
    : "zero";
}


console.log(checkSign(10));
console.log(checkSign(-10));
console.log(checkSign(0));


// Only change code below this line
function countdown(n){
  if (n < 1) {
  return [];
} else {
  const arr = countdown(n - 1);
  arr.unshift(n);
  return arr;
}

return;
}
console.log(countdown(5));
console.log(countdown(10));
console.log(countdown(20));

/*

if (endNum - startNum === 0) {
  return [startNum];
} else {
  var numbers = rangeOfNumbers(startNum, endNum - 1);
  numbers.push(endNum);
  return numbers;
}*/