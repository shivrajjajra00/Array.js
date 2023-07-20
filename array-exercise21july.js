// 1. Check if the array is sorted in ascending order.

// function ascending(arr){
//     for (let i = 0 ; i < arr.length;i++){
//         if(arr[i] < arr[i -1]){
//             return "No";
//         }
//     }
//     return "yes ascending";
// }
// let num = [1,2,3]
// let num2 = [1,2,8,3,2]

// console.log(ascending(num));
// console.log(ascending(num2));


// 2. Check if the array is sorted in descending order.

// function  descending(arr){
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] > arr[i-1]){
//             return "NO";
//         }
//     }
//     return  "yes descending" ;
// }
// let num = [ 1,2,3,4,5]
// let num2 = [5,4,3,2,1]
// let num3 = [5,6,4,3]

// console.log(descending(num));
// console.log(descending(num2));
// console.log(descending(num3));



// 3. Concat two Arrays but without using concat function

    //  without concat function :-

    // let arr = [ 1,2,3,4,5] ;
    // let arr2 = [ 6,7,8,9] ;

    // console.log(arr +","+ arr2);

    // with concat function :-

    // let arr = [ 1,2,3,4] ;
    // let arr2 = [5,6,7,8,9] ;

    // console.log(arr.concat(arr2));



// 4. Count the total number of odd numbers in the array

// let arr = [1,2,3,4,5,6,7,8,9]
//   let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         console.log(arr[i]);
//         sum = sum+ arr[i]
//     }
// }console.log( "total = ",sum);

// 5. Count the total number of even numbers in the array

// let arr = [1,2,3,4,5,6,7,8,9]
//   let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 !== 0){
//         console.log(arr[i]);
//         sum = sum+ arr[i]
//     }
// }console.log( "total = ",sum);

// 6. Create a new Array from existing Array using push function

//  let arr = [1,2,3,4,5,6]
//  arr.push(7)
//  arr.push(15)
// arr.push(20)
// let newArr = console.log(arr);
 
   
// 7. Find the average of the Array

// let arr =  [1,2,3,4,5]
// let sum = 0;

// for (let i = 0 ; i < arr.length; i++){
//     sum = sum + arr[i]
// }
// let average = sum / arr.length
// console.log(average);



// 8. Find the largest word in the Array

// let arr = [1,2,3,4,5]
// let largest = arr[0];
// for(let i = 0; i < arr.length; i++){
//      if(  largest < arr[i]){
//         largest = arr[i]
//      }
// } console.log(largest);

// 9. Create an array of names and sort it using a sort function (do it for practice then we will discuss in the class)

// 10. Create an empty Array

// let arr = [];
// console.log(arr);

// Now perform the below actions

// Push 3 numbers
// Unshift 3 numbers
// Pop 2 numbers
// Push 1 number
// Unshift 1 number
// Shift 2 numbers

// Now check the result and match

// let arr = [1,2,3,4,10,15]
// arr.push(20);
// arr.push(25);
// arr.push(30);
// console.log(arr);    //check the result
// arr.unshift(5)
// arr.unshift(6)
// arr.unshift(7)
// console.log(arr);  //check the result
// arr.pop();
// arr.pop();
// console.log(arr);  //check the result
// arr.push(8);
// console.log(arr);  // check the result
// arr.unshift(12);
// console.log(arr);  // check the result
// arr.shift()
// console.log(arr);  // check the result
