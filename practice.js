console.log('Hello Lucky');

let user ={
    name : 'lucky',
    age : 13
};

console.log(user.name);
console.log(user['age']);

let Age = 'age';
console.log(user[Age]);

let student = ['lucky','abhijeet','potrik'];
student[3] = 'shreya';
console.log(student[0]);
console.log(student.length);

function yulu(name){
   console.log('Hello' + ' ' + name);
}

yulu('ritika');

function yumo(fistName , lastName){
   console.log('Hello' + ' ' + fistName + ' ' + lastName);
}
let na = 'rohit';
let pa = 'singh';
console.log(yumo(na,pa));

function Payment(name,age){
    this.name = name;
    this.age = age;
}

const payment = new Payment('lucky',5);
console.log(payment);


//check number is odd or even
let num = 4;
if(num % 2 ==0){
    console.log("Even");
}else{
    console.log("Odd");
}

//Check if a number is positive, negative, or zero.
let number = -3;
if(number > 0){
    console.log("Positive Number");
}else if(number < 0){
    console.log("Negative Number");
}else{
    console.log("Zero Number");
}

//Check if a character is a vowel.

let ch ='a';
if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U'){
    console.log("Character is vowel");
}else{
     console.log("Character is not vowel");
}

// 2nd way

let c = 'b';
if("aeiouAEIOU".includes(c)){

  console.log("Character is vowel");
}else{
     console.log("Character is not vowel");
}

//Check if a person is eligible to vote.
let age = 23;
if(age>=18){
  console.log("Person is eligible for vote");
}else{
    console.log("Person is not eligible for vote");
}

//Check if a number is divisible by both 3 and 5.

let numberr = 15;

if(numberr % 3 == 0 && numberr % 5 == 0){
  console.log("Number is divisible by both 3 & 5");
}else{
 console.log("Number is not divisible by both 3 & 5");
}


// Take Input from user
const prompt = require("prompt-sync")();
let  n = Number(prompt("Enter a Number: "));

if(n % 2 ==0){
    console.log("Even");
}else{
     console.log("Odd");
}

//Check Whether a String is Palindrome
let strr = 'madam';
let reversed = strr.split("").reverse().join("");
if(strr == reversed){
    console.log("Is palindrome");
}
else{
    console.log("Not palindrome");
}

//2 nd way
let str = 'abccba';
let isPalindrome = true;
for(let i=0;i<str.length/2;i++){
    if(str[i] != str[str.length-1-i]){
        isPalindrome=false;
        break;
    }
}

if(isPalindrome){
  console.log("Palindrome");
}else{
   console.log(" Not Palindrome");
}

//Find Largest of Three Numbers
let a = 15;
let b = 13;
let cc = 29;

let largest = a;
if(b > largest){
    largest = b;
}
if(cc > largest ){
    largest = cc;
}
console.log("Largest Number is : " + largest);

//Find Fcatorial 

let digit = 5;
let fact = 1;
for(let i=1;i<=digit;i++){
    fact*=i;
}
console.log("Factorial Number of" + " " + digit + " " + fact);


//Array
//Find largest/smallest element.
let arr = [10,2,3,9,15];
// largest Element
let largestElement = Number.MIN_SAFE_INTEGER;
let secondLargestElement = Number.MIN_SAFE_INTEGER;

for(let i=0;i<arr.length;i++){
    if(arr[i] > largestElement){
        secondLargestElement = largestElement;
        largestElement = arr[i];
    }else if(arr[i] > secondLargestElement && arr[i]!= largestElement){
          secondLargestElement = arr[i];
        }
        
}
console.log("Largest Number iS :" + " " + largestElement);
console.log("secondLargest Number iS :" + " " + secondLargestElement);

// Largest smallest Element & second smallest element

let smallestElement = Number.MAX_SAFE_INTEGER;
let secondSmallestElement = Number.MAX_SAFE_INTEGER;

for(let i=0;i<arr.length;i++){
    if(arr[i] < smallestElement){
        secondSmallestElement = smallestElement;
        smallestElement = arr[i];
    }else if(arr[i] < secondSmallestElement && arr[i]!= smallestElement){
          secondSmallestElement = arr[i];
        }
        
}
console.log("Smallest Number iS :" + " " + smallestElement);
console.log("secondSmallest Number iS :" + " " + secondSmallestElement);

//Reverse Array
let array = ['10',12,13];
let reverse1 = array.reverse();
console.log(reverse1);

// 2nd way 
let start=0 , end=Array.length-1;
while(start < end){
   let temp = array[start];
   array[start] = array[end];
   array[end] = temp;
   start++;
   end--;
}
console.log(array);

//Count Even Odd Number
let Carr = [1, 2, 3, 4, 5, 6, 7];
let evenCount = 0;
let oddCount = 0;
for(let i=0;i<Carr.length;i++){
    if(Carr[i] % 2 == 0){
        evenCount++;
    }else{
        oddCount++;
    }
}
console.log(" Even Count" + " " + evenCount , " Odd Count " + " " + oddCount);

//Rotate Array Left
let Rarr = [1, 2, 3, 4, 5];
let first = Rarr[0];
for(let i=0;i<Rarr.length-1;i++){
    Rarr[i] = Rarr[i+1];
}
Rarr[length-1] = first;
console.log(Rarr);

//Merge Two Arrays-------------------------------------
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merge = arr1.concat(arr2);
console.log(merge);

//Sort ascending/decending------------------------------

let arr3 = [5, 2, 8, 1, 3];
arr3.sort((a,b)=>a-b);
console.log("Ascending Order:" +" " + arr3);

let arr4 = [5, 2, 8, 1, 3];
arr4.sort((a,b)=> b-a);
console.log("Descending Order:" +" " + arr4);

//Find Maximum and Minimum Element
let arr5 = [10, 5, 20, 8, 15];
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MIN_SAFE_INTEGER;

for(let i=0;i<arr5.length;i++){
    if(arr5[i] > max){
        max = arr5[i];

    }
    console.log(max);
   
    if(arr5[i] < min){
        min = arr5[i];

    }
    console.log(min);

}
//Binary Search
let arr6 = [10, 20, 30, 40, 50];
let target = 40;

let left = 0;
let right =  arr6.length-1;
while(left<=right){
   let mid = Math.floor((left+right)/2);
   if(arr6[mid] == target){
    console.log("Element Found at index :" + i);
   }
   else if(arr6[mid] < target){
          left = mid + 1;
   }else{
    right = mid-1;
   }
}



const studentt = {
name : 'lucky',
age: '23',
marks: 89,
phone: 9304334481
};

studentt.marks = 100;
studentt.address = 'Bengaluru';
delete studentt.phone;

console.log("\nKeys:");
console.log(Object.keys(studentt));
console.log("\nValues:");
console.log(Object.values(studentt));

console.log("\nUpdated Object:");
console.log(studentt);



// HTTP Flow
// GET
// Client

// ↓

// Controller

// ↓

// Service

// ↓

// Database

// ↓

// Service

// ↓

// Controller

// ↓

// Client
// POST
// Client

// ↓

// req.body

// ↓

// Controller

// ↓

// Service

// ↓

// Stored Procedure

// ↓

// Database

// ↓

// Controller

// ↓

// Response
// PUT
// Client

// ↓

// id + body

// ↓

// Controller

// ↓

// Service

// ↓

// Stored Procedure

// ↓

// Database

// ↓

// affectedRows

// ↓

// Controller

// ↓

// Client
// DELETE
// Client

// ↓

// Controller

// ↓

// Service

// ↓

// DELETE Query

// ↓

// Database

// ↓

// affectedRows

// ↓

// Controller

// ↓

// Client


