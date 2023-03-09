// // Destructure 

// // let numbers  = [11,22,33,44]
// // let [a , b, c , d] = numbers
// // console.log(a)
// // console.log(b)
// // console.log(c)
// // console.log(d)


// let info =  [
//     {
//         firstName:"chinmay",
//         lastName:"deshpande"
//     },
//     {
//         firstName:"chinmay",
//         lastName:"deshpande"
//     }
// ]

// let [ {firstName:f1,lastName:l1},{firstName:f2,lastName:l2}] = info
// console.log(f1)
// console.log(l1)
// console.log(f2)
// console.log(l2)


// let names = ["chinmay","ram","mayuri","poorva","amol"]

// // spread operator

// // function printFirstTwo(a,b){
// //     console.log(a)
// //     console.log(b)
// // }
// // printFirstTwo(names[0],names[1])

// // function printFirstTwo(a,b){
// //     console.log(a)
// //     console.log(b)
// // }
// // printFirstTwo(...names)


// // let names1 = ["poorva","satish","ramesh"]
// // let names2 = ["rajesh","ravi","ram"]
// // let names3 = [...names1,...names2]
// // console.log(names3)

// function addAll(...arr){
//     console.log(arr)
//     return arr.reduce(function(acc,el,index){
//         return acc + el
//     },0)
// }
// let a = addAll(1,2,3,4,5,7,3,4,5,6,3,5,5,6,7,8,5,66,7,8,44,55)
// console.log(a)

//23,44,55,66,778,8      ----- [23,44,55,66,778,8 ] // rest operator
//[1,2,3,4,5,6,7,33,44]  ----- 1,2,3,4,5,6,7,33,44  // spread operator


// add()
// function add(){
//     console.log(9+9)
// }


// Hoisting 


let x ;
console.log(x) // undefined
x = 10
console.log(x) // 10


console.log(y)
var y ;  // hoisting


console.log(z)
var z


// y is not defined 
// undefned
// cannot access y before intialization


// consle.log(ii)
// const ii = 8 ;

add()
function add(){
    console.log(9+9)
}

// define and then call
var add = function(){
    console.log(9+9)
}
add()

console.log(x1)
var x1
x1 = 10
console.log(x1)