// Exercise :- 13

// Question 1
// Create an array with three elements and print out the second element.

// let arr = [1,2,3]
// console.log(arr[1]);

// Question 2
// Create an array with five elements and print out the length of the array.

// let arr = [1,2,3,4,5]
// console.log(arr.length);

// Question 3
// Create an array with four elements and print out each element using a for loop.

// let arr = [1,2,3,4]

// for(let i = 0 ;i < arr.length ;i++){
//     console.log(arr[i]);
// }


// Question 4
// Create an array with six elements and print out each element using a forEach loop.

// let arr = [1,2,3,4,5,6]
 
// function print(value){
//     console.log(value);
// }
// arr.forEach(print)

// Question 5
// Create an array with three elements and add a fourth element to the end of the array.

// let arr = [1,2,3]
// arr.push(4)
// console.log(arr);

// Question 6
// Create an array with four elements and remove the second element.
// let arr =[1,2,3,4]
// arr.splice(1,1)
// console.log(arr);

// Question 7
// Create an array with five elements and remove the last element.

// let arr = [1,2,3,4,5]
// arr.pop()
// console.log(arr);


// Question 8
// Create an array with three elements and check if the array includes a specific value.

// let arr =[1,2,3,4,5]
// if(arr.includes(3)){
//     console.log("yes");
// }else {
//     console.log("NO");
// }


// Question 9
// Create an array with five elements and sort the array in ascending order.

// let arr = ["b","d","c","a","e"]
// arr.sort()
// console.log(arr);

// let arr = [3,4,1,5,2]
// let ans = arr.sort((a,b) => {
//     return a-b
// })
// console.log(ans);

// Question 10
// Create an array with five elements and sort the array in descending order.

// let arr = [3,4,1,5,2]
// let ans = arr.sort((a,b) => {
//     return b-a
// })
// console.log(ans);


// Question 11
// Create two arrays, concatenate them and print out the resulting array.

// let arr = [1,2,3]
// let arr2 = [4,5,6,7]

// console.log(arr.concat(arr2));


// Question 12
// Create an array with three elements and convert it to a string.

// let arr = [1,2,3]
// console.log(arr.toString());

// Question 13
// Create an array with four elements and reverse the order of the elements.

//  let arr = [1,2,3,4]
//  console.log(arr.reverse());

// Question 14
// Create an array with five elements and find the index of a specific value.

// // 1st solution
// let arr = [10,20,30,40,50]
// let ans = arr.findIndex((value) =>{
//     return value === 30
// })
// console.log(ans);

// //2nd solution
// const array = [10,20,30,40,50]
// let num = 30;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === num) {
//     console.log(i);
//   }
// }




// Question 15
// Create an array with six elements and slice the array to create a new array with the first three elements.

// let arr = [1,2,3,4,5,6]
 
// console.log(arr.slice(1,4));

// Question 16
// Create an array with six elements and use the map method to double each element.

// let arr = [1,2,3,4,5,6]

// let ans = arr.map((value) => {
//   return value *2
// })
// console.log(ans);


// Question 17
// Create an array with four elements and use the while loop to calculate the sum of all elements.



// let arr = [1,2,3,4]
// let blank =0
// for(let i = 1; i <= arr.length;i++){
//   blank = blank+i
 
// }
//  console.log(blank);

// let arr = [1,2,3,4]
//  let blank = 0
//  let num = 0
//  while( num <= arr.length){
//   blank += num
//   num++

//  }
//  console.log(blank);




// Question 18
// Create an array with five elements and use the filter method to return only the even numbers.

// let arr = [1,2,3,4,5,6,7,8]

// let ans = arr.filter((value) => {
//   return value%2 === 0
// })
// console.log(ans);


// Question 19
// Create an array with three elements and use the join method to concatenate the elements with a dash (-) separator.
// let arr = [ 1,2,3]
// console.log(arr.join("--"));

// Question 20
// Create two arrays with three elements each and use the concat method to combine them into a new array.

// let arr = [1,2,3]
// let arr2 = [4,5,6,7]

// let ans = arr.concat(arr2)
// console.log(ans);


// ************************************Exercise :- 14****************************************************************



//question 1. Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.
  
// 1st solution
// let fruits = [ "Apple", "banana","orange"]

// let ans = fruit.find((value) => {
//   return  value === "orange"
// })
// console.log(ans);


// 2n solution
// let fruits = [ "Apple", "banana","orange"]

// if(fruits.includes("orange")){
//   console.log("yes");
// }else{
//   console.log("no");
// }


//question 2. Given an array of numbers, write a function that returns the sum of all the even numbers in the array.
//  let arr = [1, 2, 3, 4, 5];
// let ans = arr.reduce((a, b) => {
//   return 
// }, 0);
// console.log(ans);


//question 3. Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.
  //.............?

//question 4. Given an array of strings, write a function that returns the longest string in the array.


// let arr = ["we","code","academy","jaipur","jothwara"]
// let str = arr[0];
// for(let i = 0 ; i < arr.length; i++){
// if(arr[i].length > arr.length){
//   str = arr[i]
// }
// }
// console.log(str);


//question 5. Write a function that takes an array of numbers and returns the largest number in the array.

// let arr = [3,4,2,8,5,99,6,77 ]
// let num = [0]

// for(let i = 0 ; i < arr.length ; i++ ){
//     if(arr[i] > num){
//         num = arr[i]
//     }

// }
// console.log(num);

//question 6. Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array.

// let arr = [1,2,3,4,5,6]
// let ans = arr.filter((value) => {
//   return value%2 === 0
// })
// console.log(ans);

//question 7. Write a function that takes an array of strings and returns a new array that only contains strings with more than 5 characters.

// let arr = ["shivraj","shiv","wecode","Academy","jaipur","jothwara","raj"]

// let ans = arr.filter((value) => {
//   return value.length > 5
// })
// console.log(ans);

//question 8. Write a function that takes two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays).

//..........?


//question 9. Write a function that takes an array of numbers and returns a new array where each element is the square of the original element

// let arr = [1,2,3,4,5,6]
// let ans = arr.map((value) => {
//   return value * value
// })
// console.log(ans);


//question 10. Write a function that takes an array of numbers and returns the average of all the numbers in the array.

// let arr = [1,2,3,4,5]
// let ans = arr.reduce((prev,curr) => {
//   return prev+curr /arr.length
// })
// console.log(ans);



//question 11. Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function

// let arr = [1,2,3,4,5,6,7,8,9]
// let ans  = arr.filter((value) => {
//   return value > 5
// })
// console.log(ans);

//question 12. Write a function that takes an array of numbers and returns a new array where each element is the original element plus 1. use map function

// let arr = [1,2,3,4,5]
// let ans = arr.map((value) => {
//   return value+1
// })
// console.log(ans);

//question 13. Write a function that takes an array of numbers and returns a new array that contains only the unique numbers using reduce.

// let arr = [ 1,2,3,4,5]
// let ans = arr.reduce((prev,curr) => {
//     return prev+curr
// })
// console.log(ans);



//question 14. Write a function that takes an array of strings and returns the total number of characters in all the strings using reduce.

// let arr = [ "we","code","academy","jaipur"]
// let ans = arr.reduce((prev,curr) => {
//   return prev + curr.length
// },0)
// console.log(ans);


//question 15. Write a function that takes an array of strings and sorts them by their length in ascending order.

// // Example usage
// let strings = ["apple", "banana", "cherry", "date"];
// console.log(sortStringsByLength(strings)); // Output: ["date", "apple", "cherry", "banana"]


// let fruits = ["apple", "banana", "cherry", "date"];
// let ans = fruits.sort((a,b) => {
//   return a.length - b.length
// })
// console.log(ans);


// let veg = ["tomatos", "chillis","pea","radish",]
// let ans = veg.sort((a,b) => {
//   return a.length - b.length
// })
// console.log(ans);



//question 16. Write a function that takes an array of numbers and returns the second highest number.

let arr = [1,2,3,4,5]
let ans = arr.sort((a,b) => {
  return  value = a-b 
})
console.log(ans);

//question 17. Write a function that takes an array of numbers and returns a new array with all the unique numbers.
 
//............?


//question 18. Write a function that takes an array of strings and returns a new array with only the strings that contain the letter "a".
// let arr = [ "we","code","academy","jaipur","institude","coaching"]
// let ans = arr.filter((value) => {
//   return value.includes("a")
// })
// console.log(ans);


//question 19. Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.

// let arr = [ 4,5,3,77,99,22,11]
//  let ans = arr.sort((a,b) => {
//   return  a-b
//  })
//  console.log(ans);

//question 20. Write a function that takes an array of strings and flattens each string into an array of characters, then flattens the result into a single array.

// // Example usage
// let arr = ['hello', 'world'];
// console.log(flattenStrings(arr)); // Output: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// let flattenStrings = ['hello', 'world'];
// let ans = arr.map((value) => {
//   return value
// })
// console.log(ans.join(","));