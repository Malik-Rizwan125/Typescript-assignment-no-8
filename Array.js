// 1. Write a ts program to read and print elements of array
// var arr1:number[] = [2,4,5,6,7,9]
// console.log(arr1[0])
// console.log(arr1[1])
// console.log(arr1[2])
// console.log(arr1[3])
// console.log(arr1[4])
// console.log(arr1[5])
// 2. Write a ts program to print all negative elements in an array.
//  var arr1:number[] = [-2,-4,-6, -8,-10]
//  console.log(arr1[0])
//  console.log(arr1[1])
//  console.log(arr1[2])
//  console.log(arr1[3])
//  console.log(arr1[4])
// 3. Write a ts program to find sum of all array elements..............
var arr1 = [2, 4, 5, 6, 7, 9];
var sum = 0;
var i;
for (i = 0; i < arr1.length; i++) {
    sum += arr1[i];
    console.log("sum of all the num :", sum);
}
// 4. Write a ts program to find maximum and minimum element in an array
// 6. Write a ts program to count total number of even and odd elements in an array.
// var arr1:number[] =  [2,3,5,6,7,8,9,11,34,22,12,33]
//  var arr2:number = Number(arr1)
// for(var i=0 ; i<= arr1.length; i++){
//     if(i % 2 == 0){
//         console.log("this is even number" , i )
//     }else{
// console.log("This is off number", i)
//     }
// }
// 8. Write a ts program to copy all elements from an array to another array.
// var arr1:number [] = [2,3,4,5,6]
// var arr2:number[] = arr1;
// console.log(arr2)
// 9. Write a ts program to insert an element in an array...........
// var arr1:number [] =[2,4,6,7,8]
// arr1.push(9);
// console.log(arr1)
// 10. Write a ts program to delete an element from an array at specified position............
// var arr1:number [] =[2,4,6,7,8]
// arr1.pop();
// console.log(arr1)
// 15. Write a ts program to merge two array to third array.
// var arr1:number [] = [1,2,3,4,5,6];
// var arr2:number [] = [7,8,9,10,11,12]
// var concatArray = arr1.concat(arr2)
// console.log(concatArray)
// 16. Write a ts program to find reverse of an array.
// var arr1:number [] = [1,2,3,4,5,6];
// arr1.reverse()
// console.log(arr1)
// 18. Write a ts program to search an element in an array..........
// var alphaString:string[] = ["This is beautifull website"];
// alphaString.search('This')
var alpha = new Array("orange", "mango", "banana", "sugar");
alpha.sort();
console.log(alpha);
// 18. Write a ts program to search an element in an array.
// var arr1:number [] = [2,6,4,7,11,44,33,22,13,56,60];
// arr1.sort()
// console.log(arr1)
