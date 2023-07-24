// 1. Find value greater than 20 using find function 
// let arr = [10,20,30,40,50]

// let ans = arr.find((value) => {
//     return value > 20;
// })
// console.log(ans);

// 2. Find string length greater than 10 using find function 

// let arr = ["we","code","Academy","jaipurjothwara"]

// let ans = arr.find((value) => {
//     console.log(value.length);
//     return value.length > 10;
// })
// console.log(ans);

// 3. Filter all numbers less than 100

// let arr = [10,200,300,400,500]
// let ans = arr.filter((value) => {
//     return value < 100;
// })
// console.log(ans);

// 4. Filter all numbers greater than 50 and multiple of 5


// let arr = [10,200,301,400,500]
// let ans = arr.filter((value) => {
//     if(value > 50 && value% 5===0){
//         return value;
//     }
// })
// console.log(ans);
    
// 5. Filter all words with length > 5 and contains world 'World' in itself for example Hello World, Computer World 

// let arr = ["we","world","code world","Academy world","jaipur world"]

// let ans = arr.filter((value) => {
//     console.log(value.length);
//     return value.length > 5;
// })
// console.log(ans);
   
// 6. Calculate sum of all the numbers of array using reduce function 

//  let arr = [1,2,3,4,5]
//  let ans = arr.reduce((prev,curr) => {
//     return prev+ curr;
//  })
//  console.log(ans);

// 7. Calculate total words with length > 5 in an array using reduce and filter function. Dono se krna hai alag alag 

// let arr = ["we","code","Academy","jaipurjothwara"]
let arr = [1,2,3,4]
let ans = arr.reduce((prev,curr) => {
    return prev+curr
},2)
console.log(ans);

// ans = arr.reduce((prev, curr) => {
//   //console.log(prev, curr);
//   return prev + curr;
// }, 100);








// 8. Convert any odd number to even number using map function 



// 1st solution-----------------------

// let arr = [1,2,11,33,5]
// let ans = arr.map((value) =>{
//     if(value%2 === 0){
//         return value; 
//     }else{
//         return value+1
//     }
// })
// console.log(ans);

// 2nd solution-----------------------

// let arr = [1,2,11,33,5]
// let ans = arr.map((value) =>{
//     return value*2
// })
// console.log(ans);

// 9. Convert any even number to odd number using map function 

// 1st solution-----------------------

// let arr = [1,2,6,33,5]
// let ans = arr.map((value) =>{
//     if(value%2 === 1){
//         return value; 
//     }else{
//         return value+1
//     }
// })
// console.log(ans);

// 2nd solution-----------------------

// let arr = [1,2,11,33,5]
// let ans = arr.map((value) =>{
//     return value*2+1
// })
// console.log(ans);

// 10. Check if every number is multiple of 5 or not in the array using every function

// let arr = [5,10,15,20,25]
// let ans = arr.every((value) => {
//     return value%5 === 0;
// })
// console.log(ans);


// 11. Check if any number is multiple of 5 and less than 10 using some function

// let arr = [ 2,10,15,5]
// let ans = arr.some((value) => {
//  if(value% 5 === 0 && value < 10){
//        return value > 2 ;
//  }
// }
    
// )
// console.log(ans);





